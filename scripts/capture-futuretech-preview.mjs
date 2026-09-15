import { chromium } from 'playwright';
import { mkdirSync, writeFileSync } from 'node:fs';

const baseUrl = process.env.PREVIEW_BASE_URL || 'http://127.0.0.1:4173/Mr.-John-s-Learning-Hub';
const outDir = 'artifacts/futuretech-preview';
mkdirSync(outDir, { recursive: true });

const pages = [
  ['landing', '/courses/futuretech-lab/'],
  ['creator-foundations', '/courses/futuretech-lab/creator-foundations/'],
  ['mission-1', '/courses/futuretech-lab/creator-foundations/mission-1-make-it-happen/'],
  ['mission-2', '/courses/futuretech-lab/creator-foundations/mission-2-make-it-think/']
];

const viewports = [
  ['desktop', 1440, 1100],
  ['chromebook-tablet', 1024, 900],
  ['mobile-390', 390, 844],
  ['mobile-375', 375, 812],
  ['mobile-320', 320, 700]
];

const browser = await chromium.launch({ headless: true });
const report = [];
let failed = false;

try {
  for (const [viewportName, width, height] of viewports) {
    const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 });
    const page = await context.newPage();

    for (const [pageName, path] of pages) {
      const url = `${baseUrl}${path}`;
      const response = await page.goto(url, { waitUntil: 'networkidle' });
      const status = response?.status() ?? 0;
      const title = await page.title();
      const metrics = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        bodyScrollWidth: document.body.scrollWidth,
        h1: document.querySelector('h1')?.textContent?.trim() || '',
        mainTextLength: (document.querySelector('main')?.textContent || document.body.textContent || '').trim().length
      }));

      const horizontalOverflow = Math.max(metrics.scrollWidth, metrics.bodyScrollWidth) > metrics.clientWidth + 2;
      const hasContent = metrics.h1.length > 0 && metrics.mainTextLength > 100;
      const ok = status >= 200 && status < 400 && !horizontalOverflow && hasContent;
      if (!ok) failed = true;

      if (pageName.startsWith('mission-')) {
        for (let i = 1; i <= 6; i++) {
          const selector = `#stage-${i}`;
          const count = await page.locator(selector).count();
          if (count !== 1) {
            failed = true;
            report.push({ viewportName, pageName, check: `stage-${i}`, ok: false, detail: `found ${count}` });
          }
        }
        const stageLink = page.locator('.stage-nav a[href="#stage-4"]').first();
        if (await stageLink.count()) {
          await stageLink.click();
          await page.waitForTimeout(250);
          const visible = await page.locator('#stage-4').isVisible();
          if (!visible) failed = true;
          report.push({ viewportName, pageName, check: 'stage-4 anchor', ok: visible });
          await page.goto(url, { waitUntil: 'networkidle' });
        }
      }

      const filename = `${outDir}/${pageName}__${viewportName}.png`;
      await page.screenshot({ path: filename, fullPage: true });
      report.push({
        viewportName,
        width,
        height,
        pageName,
        url,
        status,
        title,
        h1: metrics.h1,
        horizontalOverflow,
        scrollWidth: metrics.scrollWidth,
        clientWidth: metrics.clientWidth,
        hasContent,
        screenshot: filename,
        ok
      });
    }

    await context.close();
  }
} finally {
  await browser.close();
}

writeFileSync(`${outDir}/report.json`, JSON.stringify(report, null, 2));
writeFileSync(`${outDir}/README.txt`, [
  'FutureTech Lab isolated rendered preview',
  `Base URL tested: ${baseUrl}`,
  'Pages: landing, Creator Foundations, Mission 1, Mission 2',
  'Viewports: 1440, 1024, 390, 375, 320 px',
  failed ? 'RESULT: FAIL — inspect report.json' : 'RESULT: PASS — no route/content/horizontal-overflow failures detected'
].join('\n'));

console.log(`FutureTech rendered preview smoke test: ${failed ? 'FAIL' : 'PASS'}`);
console.log(`Screenshots/report written to ${outDir}`);
if (failed) process.exit(1);

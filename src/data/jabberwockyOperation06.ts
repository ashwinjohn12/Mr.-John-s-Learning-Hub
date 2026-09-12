export interface RecoveryStage {
  day: string;
  exposedSurface: number;
  livingCover: number;
  speciesRichness: number;
  observation: string;
}

export interface RecoveryCase {
  id: string;
  name: string;
  code: string;
  baseCamp: string;
  environment: string;
  disturbance: string;
  reference: {
    livingCover: number;
    speciesRichness: number;
    description: string;
  };
  stages: RecoveryStage[];
  evidence: string[];
  managementChoices: string[];
  investigationQuestion: string;
}

export const operation06Cases: RecoveryCase[] = [
  {
    id:'gyre', name:'Gyre', code:'GY', baseCamp:'Frumious Basin', environment:'Alpine valley ecosystem',
    disturbance:'A landing-support vehicle crossed a fragile alpine bench, stripping low vegetation and exposing soil and gravel. Soil remained in the disturbed zone, but the plant mat was broken.',
    reference:{livingCover:82,speciesRichness:11,description:'Nearby less-disturbed alpine bench with continuous low vegetation and stable surface.'},
    stages:[
      {day:'Day 1',exposedSurface:86,livingCover:8,speciesRichness:2,observation:'Loose soil and gravel dominate. Only a few surviving plant fragments remain.'},
      {day:'Day 12',exposedSurface:78,livingCover:14,speciesRichness:3,observation:'Small pioneer shoots appear in protected cracks; wind moves exposed particles.'},
      {day:'Day 30',exposedSurface:68,livingCover:22,speciesRichness:5,observation:'More low plants establish, but several bare channels show erosion after snowmelt.'},
      {day:'Day 55',exposedSurface:59,livingCover:31,speciesRichness:6,observation:'Cover is increasing slowly. The plot is still much barer and less diverse than the reference site.'}
    ],
    evidence:['Short growing conditions limit rapid plant growth.','Repeated foot or vehicle traffic would break new shoots before they establish.','Erosion is strongest where exposed soil forms small channels.'],
    managementChoices:[
      'Keep the entire recovery zone closed and rely on natural recovery while monitoring erosion for another season.',
      'Keep traffic out, stabilize only the most actively eroding channels with local material, and continue monitoring natural recovery elsewhere.',
      'Allow limited foot access on one marked edge route while monitoring whether new damage appears outside the recovering centre.'
    ],
    investigationQuestion:'Which balance of protection, limited restoration, and carefully controlled access is best supported by Gyre’s slow recovery evidence?'
  },
  {
    id:'brillig', name:'Brillig', code:'BR', baseCamp:'Tulgey Station', environment:'Warm rainforest ecosystem',
    disturbance:'A temporary equipment clearing removed understory vegetation beside Tulgey Station. Soil remained, but heavy rain began washing exposed surface material downslope.',
    reference:{livingCover:94,speciesRichness:18,description:'Dense nearby rainforest floor with layered vegetation beneath an intact canopy.'},
    stages:[
      {day:'Day 1',exposedSurface:88,livingCover:7,speciesRichness:3,observation:'Bare wet soil dominates and runoff carries fine sediment after rain.'},
      {day:'Day 12',exposedSurface:58,livingCover:35,speciesRichness:7,observation:'Fast-growing ground plants and vines spread across wetter edges.'},
      {day:'Day 30',exposedSurface:31,livingCover:63,speciesRichness:11,observation:'Plant cover is returning quickly and surface erosion is reduced.'},
      {day:'Day 55',exposedSurface:18,livingCover:77,speciesRichness:13,observation:'The ground looks green again, but the former layered understory and canopy structure have not returned.'}
    ],
    evidence:['Warm, wet conditions allow rapid plant growth.','Early colonizers cover soil quickly but are not the same as a mature rainforest community.','Runoff declines as surface cover increases.'],
    managementChoices:[
      'Protect the clearing and allow succession to continue while monitoring which species and habitat layers return.',
      'Add a small number of locally sourced native understory plants to selected bare patches while continuing erosion and species monitoring.',
      'Permit carefully controlled research access on a marked perimeter route while keeping the recovering centre closed and monitored.'
    ],
    investigationQuestion:'With rapid greening but incomplete community structure, how much intervention and access should JCEC allow in Brillig?'
  },
  {
    id:'manxome', name:'Manxome', code:'MA', baseCamp:'Calloo Island', environment:'Coastal island ecosystem',
    disturbance:'A supply pod landed beside a coastal grass-and-shrub zone. Salt spray and strong winds continued after the landing, while the disturbed soil remained in place.',
    reference:{livingCover:76,speciesRichness:12,description:'Less-disturbed coastal patch with low grasses, salt-tolerant shrubs, and stable sandy soil.'},
    stages:[
      {day:'Day 1',exposedSurface:82,livingCover:11,speciesRichness:3,observation:'Compressed sandy soil and broken stems surround the landing mark.'},
      {day:'Day 12',exposedSurface:60,livingCover:29,speciesRichness:5,observation:'Low grasses recolonize sheltered edges; wind keeps the exposed centre dry.'},
      {day:'Day 30',exposedSurface:39,livingCover:48,speciesRichness:8,observation:'Roots are binding more surface material, but wind-blown sand still shifts through gaps.'},
      {day:'Day 55',exposedSurface:26,livingCover:62,speciesRichness:9,observation:'The plot is more stable, but shrub cover and total richness remain below the reference site.'}
    ],
    evidence:['Sheltered edges recover faster than the wind-exposed centre.','Rooted vegetation reduces movement of loose sand.','Salt and wind continue to limit which species establish.'],
    managementChoices:[
      'Keep the whole site closed and let wind-tolerant species recolonize naturally while monitoring the exposed centre.',
      'Use locally sourced plant material only in the wind-exposed centre, protect the rest from traffic, and compare treated and untreated recovery.',
      'Create one narrow, marked access route through the most stable edge while keeping the exposed centre closed and monitoring sand movement.'
    ],
    investigationQuestion:'Which management approach best addresses Manxome’s uneven recovery without creating unnecessary new disturbance?'
  },
  {
    id:'slithy-toves', name:'Slithy Toves', code:'ST', baseCamp:'Borogove Station', environment:'Desert ecosystem',
    disturbance:'A rover crossed a thin living soil crust near Borogove Station. The track did not remove much soil, but it broke the surface crust and crushed sparse plants.',
    reference:{livingCover:38,speciesRichness:7,description:'Less-disturbed desert surface with patchy plants and an intact dark biological soil crust.'},
    stages:[
      {day:'Day 1',exposedSurface:91,livingCover:2,speciesRichness:1,observation:'The rover track is pale and loose. The dark surface crust is broken.'},
      {day:'Day 12',exposedSurface:89,livingCover:3,speciesRichness:1,observation:'Very little visible change; wind moves fine particles across the track.'},
      {day:'Day 30',exposedSurface:84,livingCover:6,speciesRichness:2,observation:'A few seedlings appear after a rare moisture event.'},
      {day:'Day 55',exposedSurface:80,livingCover:9,speciesRichness:2,observation:'Some plant recovery is visible, but most of the track remains exposed and the soil crust has barely returned.'}
    ],
    evidence:['Desert plant growth is limited by scarce water.','The biological soil crust—a living community on the soil surface that helps stabilize desert soil—recovers much more slowly than a simple green-cover estimate suggests.','Additional traffic would repeatedly reset the disturbed surface.'],
    managementChoices:[
      'Close the damaged track completely and monitor long-term natural recovery of plants and biological soil crust.',
      'Move all future rover traffic to a clearly marked alternate route and stabilize only the most mobile soil patches near the old track.',
      'Test a very small, teacher-approved restoration plot using locally sourced crust material while leaving the rest of the track untouched for comparison.'
    ],
    investigationQuestion:'Because desert recovery is so slow, should JCEC rely on protection alone or test a limited restoration approach?'
  },
  {
    id:'wabe', name:'Wabe', code:'WA', baseCamp:'Beamish Station', environment:'Arctic ecosystem',
    disturbance:'Repeated equipment movement compressed a tundra patch beside Beamish Station. The vegetation mat was torn and shallow ruts formed while the ground was soft.',
    reference:{livingCover:64,speciesRichness:9,description:'Less-disturbed tundra mat with low plants covering most stable ground.'},
    stages:[
      {day:'Day 1',exposedSurface:87,livingCover:6,speciesRichness:2,observation:'Dark compressed ruts interrupt the tundra mat.'},
      {day:'Day 12',exposedSurface:84,livingCover:7,speciesRichness:2,observation:'Meltwater collects in the deepest rut and keeps it wetter than nearby ground.'},
      {day:'Day 30',exposedSurface:79,livingCover:10,speciesRichness:3,observation:'Small plants spread from intact edges, but the centre remains compacted.'},
      {day:'Day 55',exposedSurface:74,livingCover:13,speciesRichness:3,observation:'Recovery is slow; ruts remain wetter and less vegetated than the reference plot.'}
    ],
    evidence:['Cold conditions and a short growing season slow biological recovery.','Compaction changes drainage as well as vegetation cover.','Plants are recolonizing mainly from undisturbed edges.'],
    managementChoices:[
      'Keep the area closed for several growing seasons and monitor whether vegetation and drainage improve without intervention.',
      'Keep traffic out and make only a small drainage correction if repeated monitoring shows that pooled water is continuing to damage the same rut.',
      'If access is essential, install a lightweight removable crossing over an already stable edge route so future travel does not compact the recovering centre.'
    ],
    investigationQuestion:'Which option protects Wabe’s slow recovery while avoiding a restoration action that could cause even more disturbance?'
  },
  {
    id:'bandersnatch', name:'Bandersnatch', code:'BA', baseCamp:'Jubjub Station', environment:'Prairie ecosystem',
    disturbance:'A temporary cargo route flattened prairie vegetation near Jubjub Station. Much of the underground root system remained alive beneath the track.',
    reference:{livingCover:88,speciesRichness:14,description:'Less-disturbed native prairie with dense grass cover, flowering plants, and little exposed soil.'},
    stages:[
      {day:'Day 1',exposedSurface:83,livingCover:10,speciesRichness:4,observation:'Stems are flattened and patches of soil are exposed, but many roots remain.'},
      {day:'Day 12',exposedSurface:52,livingCover:39,speciesRichness:8,observation:'New shoots emerge rapidly from surviving roots.'},
      {day:'Day 30',exposedSurface:28,livingCover:64,speciesRichness:11,observation:'Continuous grass cover is returning, though flowering-species diversity remains lower.'},
      {day:'Day 55',exposedSurface:16,livingCover:78,speciesRichness:12,observation:'The route is much greener and more stable, but still differs from the reference prairie.'}
    ],
    evidence:['Surviving underground roots allow rapid regrowth.','Bare soil decreases quickly as grasses recover.','Species richness is recovering more slowly than total plant cover.'],
    managementChoices:[
      'Keep the former cargo route fully closed until both cover and richness are closer to the reference prairie.',
      'Allow limited foot access on one marked path while keeping vehicles out and continuing richness and cover monitoring.',
      'Allow seasonal low-intensity service access only if monitoring thresholds for cover, exposed soil, and richness continue improving.'
    ],
    investigationQuestion:'Bandersnatch is recovering quickly. How much carefully controlled use can JCEC allow without reversing that progress?'
  },
  {
    id:'gimble', name:'Gimble', code:'GI', baseCamp:'Galumph Station', environment:'Temperate forest ecosystem',
    disturbance:'Construction of a temporary sensor pad removed leaf litter and understory plants from a small forest-floor patch. Trees around the plot remained standing.',
    reference:{livingCover:90,speciesRichness:16,description:'Less-disturbed forest floor with mosses, herbs, seedlings, fungi, litter, and intact canopy above.'},
    stages:[
      {day:'Day 1',exposedSurface:84,livingCover:9,speciesRichness:3,observation:'Mineral soil is visible where litter and understory were removed.'},
      {day:'Day 12',exposedSurface:62,livingCover:28,speciesRichness:6,observation:'Moss fragments and small herbs begin spreading from the margins.'},
      {day:'Day 30',exposedSurface:40,livingCover:48,speciesRichness:9,observation:'Seedlings and fungi appear; leaf litter is beginning to accumulate again.'},
      {day:'Day 55',exposedSurface:29,livingCover:59,speciesRichness:10,observation:'The forest floor is rebuilding, but community complexity remains below the reference site.'}
    ],
    evidence:['The surrounding intact forest supplies seeds, spores, litter, and shade.','Soil remained after disturbance, allowing relatively rapid secondary succession.','Returning green cover does not recreate the original forest-floor community immediately.'],
    managementChoices:[
      'Remove remaining equipment, keep the patch closed, and allow seeds, spores, litter, and organisms from the surrounding forest to recolonize it naturally.',
      'Add a small amount of locally sourced leaf litter or woody material only where exposed soil is eroding, then continue monitoring natural recolonization.',
      'Plant a small mix of locally sourced understory species in selected bare spots while leaving comparison areas to recover naturally.'
    ],
    investigationQuestion:'Should Gimble mostly recover from the surrounding forest on its own, or is a small targeted restoration experiment justified?'
  },
  {
    id:'mimsy', name:'Mimsy', code:'MI', baseCamp:'Mome Station', environment:'Wetland ecosystem',
    disturbance:'A temporary access mat compressed marsh vegetation near Mome Station and changed shallow water flow through a narrow strip. The mat was removed after one day.',
    reference:{livingCover:79,speciesRichness:13,description:'Less-disturbed wetland edge with emergent plants, shallow channels, and patchy open water.'},
    stages:[
      {day:'Day 1',exposedSurface:75,livingCover:14,speciesRichness:4,observation:'Vegetation is flattened and water pools along one side of the former access strip.'},
      {day:'Day 12',exposedSurface:47,livingCover:38,speciesRichness:7,observation:'Fast-growing wetland plants return along the wetter edges.'},
      {day:'Day 30',exposedSurface:30,livingCover:57,speciesRichness:10,observation:'Plant cover expands, but water still follows a slightly different channel.'},
      {day:'Day 55',exposedSurface:23,livingCover:66,speciesRichness:11,observation:'The strip looks greener, yet shallow-water flow remains different from the reference area.'}
    ],
    evidence:['Wetland plants can recolonize quickly when water is available.','Small changes in water flow (hydrology) can alter habitat even after vegetation returns.','The reference site has both greater cover and a different water pattern.'],
    managementChoices:[
      'Keep the strip closed and monitor both vegetation and water flow for another period before changing the site.',
      'Carefully restore the shallow flow path using the least-disturbing method possible, then monitor whether vegetation and water patterns both improve.',
      'Create a lightweight elevated access route beside the recovering strip so necessary travel can continue without compressing the wetland again.'
    ],
    investigationQuestion:'Because plant cover is returning but water flow remains altered, which management approach best protects Mimsy’s wetland function?'
  }
];

export const operation06ById = Object.fromEntries(operation06Cases.map((item) => [item.id, item]));
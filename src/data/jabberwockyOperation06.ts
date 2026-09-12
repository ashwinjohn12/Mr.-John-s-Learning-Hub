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
    reference:{livingCover:82,speciesRichness:11,description:'Nearby undisturbed alpine bench with continuous low vegetation and stable surface.'},
    stages:[
      {day:'Day 1',exposedSurface:86,livingCover:8,speciesRichness:2,observation:'Loose soil and gravel dominate. Only a few surviving plant fragments remain.'},
      {day:'Day 12',exposedSurface:78,livingCover:14,speciesRichness:3,observation:'Small pioneer shoots appear in protected cracks; wind moves exposed particles.'},
      {day:'Day 30',exposedSurface:68,livingCover:22,speciesRichness:5,observation:'More low plants establish, but several bare channels show erosion after snowmelt.'},
      {day:'Day 55',exposedSurface:59,livingCover:31,speciesRichness:6,observation:'Cover is increasing slowly. The plot is still much barer and less diverse than the reference site.'}
    ],
    evidence:['Short growing conditions limit rapid plant growth.','Repeated foot or vehicle traffic would break new shoots before they establish.','Erosion is strongest where exposed soil forms small channels.'],
    managementChoices:['Close the zone to traffic and continue monitoring natural recovery.','Stabilize the most eroded channels with local material, restrict traffic, and monitor.','Reopen the route because living cover has increased since Day 1.'],
    investigationQuestion:'Is Gyre recovering fast enough on its own, or does the evidence support limited restoration and stronger protection?'
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
    managementChoices:['Protect the clearing and allow succession to continue while monitoring species composition.','Plant locally sourced native understory species and continue erosion monitoring.','Declare the site fully restored because most exposed soil is covered.'],
    investigationQuestion:'Does rapid plant cover mean Brillig has fully recovered, or are important parts of the original community still missing?'
  },
  {
    id:'manxome', name:'Manxome', code:'MA', baseCamp:'Calloo Island', environment:'Coastal island ecosystem',
    disturbance:'A supply pod landed beside a coastal grass-and-shrub zone. Salt spray and strong winds continued after the landing, while the disturbed soil remained in place.',
    reference:{livingCover:76,speciesRichness:12,description:'Undisturbed coastal patch with low grasses, salt-tolerant shrubs, and stable sandy soil.'},
    stages:[
      {day:'Day 1',exposedSurface:82,livingCover:11,speciesRichness:3,observation:'Compressed sandy soil and broken stems surround the landing mark.'},
      {day:'Day 12',exposedSurface:60,livingCover:29,speciesRichness:5,observation:'Low grasses recolonize sheltered edges; wind keeps the exposed centre dry.'},
      {day:'Day 30',exposedSurface:39,livingCover:48,speciesRichness:8,observation:'Roots are binding more surface material, but wind-blown sand still shifts through gaps.'},
      {day:'Day 55',exposedSurface:26,livingCover:62,speciesRichness:9,observation:'The plot is more stable, but shrub cover and total richness remain below the reference site.'}
    ],
    evidence:['Sheltered edges recover faster than the wind-exposed centre.','Rooted vegetation reduces movement of loose sand.','Salt and wind continue to limit which species establish.'],
    managementChoices:['Keep the site closed and allow natural recovery while monitoring the exposed centre.','Add locally sourced plant material to the exposed centre and protect it from traffic.','Resume regular equipment use because most of the original living cover has returned.'],
    investigationQuestion:'What evidence shows that Manxome is recovering, and what evidence shows recovery is still incomplete?'
  },
  {
    id:'slithy-toves', name:'Slithy Toves', code:'ST', baseCamp:'Borogove Station', environment:'Desert ecosystem',
    disturbance:'A rover crossed a thin living soil crust near Borogove Station. The track did not remove much soil, but it broke the surface crust and crushed sparse plants.',
    reference:{livingCover:38,speciesRichness:7,description:'Undisturbed desert surface with patchy plants and an intact dark biological soil crust.'},
    stages:[
      {day:'Day 1',exposedSurface:91,livingCover:2,speciesRichness:1,observation:'The rover track is pale and loose. The dark surface crust is broken.'},
      {day:'Day 12',exposedSurface:89,livingCover:3,speciesRichness:1,observation:'Very little visible change; wind moves fine particles across the track.'},
      {day:'Day 30',exposedSurface:84,livingCover:6,speciesRichness:2,observation:'A few seedlings appear after a rare moisture event.'},
      {day:'Day 55',exposedSurface:80,livingCover:9,speciesRichness:2,observation:'Some plant recovery is visible, but most of the track remains exposed and the soil crust has barely returned.'}
    ],
    evidence:['Desert plant growth is limited by scarce water.','The biological soil crust recovers much more slowly than a simple green-cover estimate suggests.','Additional traffic would repeatedly reset the disturbed surface.'],
    managementChoices:['Close the track completely and monitor long-term natural recovery.','Create a marked alternate route and actively stabilize only the most mobile soil patches.','Continue rover use because desert sites naturally have low plant cover.'],
    investigationQuestion:'Why is living-cover percentage alone not enough to judge recovery in Slithy Toves?'
  },
  {
    id:'wabe', name:'Wabe', code:'WA', baseCamp:'Beamish Station', environment:'Arctic ecosystem',
    disturbance:'Repeated equipment movement compressed a tundra patch beside Beamish Station. The vegetation mat was torn and shallow ruts formed while the ground was soft.',
    reference:{livingCover:64,speciesRichness:9,description:'Undisturbed tundra mat with low plants covering most stable ground.'},
    stages:[
      {day:'Day 1',exposedSurface:87,livingCover:6,speciesRichness:2,observation:'Dark compressed ruts interrupt the tundra mat.'},
      {day:'Day 12',exposedSurface:84,livingCover:7,speciesRichness:2,observation:'Meltwater collects in the deepest rut and keeps it wetter than nearby ground.'},
      {day:'Day 30',exposedSurface:79,livingCover:10,speciesRichness:3,observation:'Small plants spread from intact edges, but the centre remains compacted.'},
      {day:'Day 55',exposedSurface:74,livingCover:13,speciesRichness:3,observation:'Recovery is slow; ruts remain wetter and less vegetated than the reference plot.'}
    ],
    evidence:['Cold conditions and a short growing season slow biological recovery.','Compaction changes drainage as well as vegetation cover.','Plants are recolonizing mainly from undisturbed edges.'],
    managementChoices:['Close the area and monitor several growing seasons before allowing reuse.','Protect the edges, improve drainage only if monitoring shows continuing damage, and keep traffic out.','Level the ruts immediately with heavy machinery so the surface looks normal again.'],
    investigationQuestion:'Should JCEC intervene in Wabe’s recovery zone, or could more disturbance make the problem worse?'
  },
  {
    id:'bandersnatch', name:'Bandersnatch', code:'BA', baseCamp:'Jubjub Station', environment:'Prairie ecosystem',
    disturbance:'A temporary cargo route flattened prairie vegetation near Jubjub Station. Much of the underground root system remained alive beneath the track.',
    reference:{livingCover:88,speciesRichness:14,description:'Native prairie with dense grass cover, flowering plants, and little exposed soil.'},
    stages:[
      {day:'Day 1',exposedSurface:83,livingCover:10,speciesRichness:4,observation:'Stems are flattened and patches of soil are exposed, but many roots remain.'},
      {day:'Day 12',exposedSurface:52,livingCover:39,speciesRichness:8,observation:'New shoots emerge rapidly from surviving roots.'},
      {day:'Day 30',exposedSurface:28,livingCover:64,speciesRichness:11,observation:'Continuous grass cover is returning, though flowering-species diversity remains lower.'},
      {day:'Day 55',exposedSurface:16,livingCover:78,speciesRichness:12,observation:'The route is much greener and more stable, but still differs from the reference prairie.'}
    ],
    evidence:['Surviving underground roots allow rapid regrowth.','Bare soil decreases quickly as grasses recover.','Species richness is recovering more slowly than total plant cover.'],
    managementChoices:['Keep the route closed until richness and cover are closer to the reference site.','Allow limited foot access on a marked path while continuing recovery monitoring.','Reopen the full cargo route because grass cover has almost returned.'],
    investigationQuestion:'How can Bandersnatch look almost recovered while still being ecologically different from the reference prairie?'
  },
  {
    id:'gimble', name:'Gimble', code:'GI', baseCamp:'Galumph Station', environment:'Temperate forest ecosystem',
    disturbance:'Construction of a temporary sensor pad removed leaf litter and understory plants from a small forest-floor patch. Trees around the plot remained standing.',
    reference:{livingCover:90,speciesRichness:16,description:'Forest floor with mosses, herbs, seedlings, fungi, litter, and intact canopy above.'},
    stages:[
      {day:'Day 1',exposedSurface:84,livingCover:9,speciesRichness:3,observation:'Mineral soil is visible where litter and understory were removed.'},
      {day:'Day 12',exposedSurface:62,livingCover:28,speciesRichness:6,observation:'Moss fragments and small herbs begin spreading from the margins.'},
      {day:'Day 30',exposedSurface:40,livingCover:48,speciesRichness:9,observation:'Seedlings and fungi appear; leaf litter is beginning to accumulate again.'},
      {day:'Day 55',exposedSurface:29,livingCover:59,speciesRichness:10,observation:'The forest floor is rebuilding, but community complexity remains below the reference site.'}
    ],
    evidence:['The surrounding intact forest supplies seeds, spores, litter, and shade.','Soil remained after disturbance, allowing relatively rapid secondary succession.','Returning green cover does not recreate the original forest-floor community immediately.'],
    managementChoices:['Remove the sensor pad, keep the patch closed, and monitor natural recolonization.','Add only locally sourced litter or woody material if erosion develops, then continue monitoring.','Plant a dense single species so the plot reaches 90% cover as quickly as possible.'],
    investigationQuestion:'Which indicators show Gimble is recovering, and why would a single high-cover species not equal full recovery?'
  },
  {
    id:'mimsy', name:'Mimsy', code:'MI', baseCamp:'Mome Station', environment:'Wetland ecosystem',
    disturbance:'A temporary access mat compressed marsh vegetation near Mome Station and changed shallow water flow through a narrow strip. The mat was removed after one day.',
    reference:{livingCover:79,speciesRichness:13,description:'Wetland edge with emergent plants, shallow channels, and patchy open water.'},
    stages:[
      {day:'Day 1',exposedSurface:75,livingCover:14,speciesRichness:4,observation:'Vegetation is flattened and water pools along one side of the former access strip.'},
      {day:'Day 12',exposedSurface:47,livingCover:38,speciesRichness:7,observation:'Fast-growing wetland plants return along the wetter edges.'},
      {day:'Day 30',exposedSurface:30,livingCover:57,speciesRichness:10,observation:'Plant cover expands, but water still follows a slightly different channel.'},
      {day:'Day 55',exposedSurface:23,livingCover:66,speciesRichness:11,observation:'The strip looks greener, yet shallow-water flow remains different from the reference area.'}
    ],
    evidence:['Wetland plants can recolonize quickly when water is available.','Small changes in water flow can alter habitat even after vegetation returns.','The reference site has both greater cover and a different water pattern.'],
    managementChoices:['Keep the strip closed and monitor both vegetation and water flow before deciding on further action.','Restore the shallow flow path carefully using minimal disturbance, then monitor recovery.','Judge the site recovered once plant cover reaches the reference percentage.'],
    investigationQuestion:'Why must JCEC monitor hydrology as well as plant cover when judging Mimsy’s recovery?'
  }
];

export const operation06ById = Object.fromEntries(operation06Cases.map((item) => [item.id, item]));

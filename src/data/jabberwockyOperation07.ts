export interface IncidentSpreadStage {
  label: string;
  occupiedZones: number;
  nativeIndicator: number;
  note: string;
}

export interface ContaminantLevel {
  sample: string;
  trophicRole: string;
  concentration: number;
}

export interface Operation07Incident {
  id: string;
  name: string;
  code: string;
  baseCamp: string;
  environment: string;
  stowaway: string;
  suspectedEntry: string;
  firstDetection: string;
  nativeIndicatorLabel: string;
  spread: IncidentSpreadStage[];
  evidence: string[];
  contaminantPath: ContaminantLevel[];
  contaminantNote: string;
  responseChoices: string[];
  investigationQuestion: string;
}

export const operation07Incidents: Operation07Incident[] = [
  {
    id:'gyre', name:'Gyre', code:'GY', baseCamp:'Frumious Basin', environment:'Alpine valley ecosystem',
    stowaway:'Earth Ryegrass',
    suspectedEntry:'Seeds lodged in landing-equipment tread after Earth-side field testing.',
    firstDetection:'A grass with Earth DNA markers appeared beside a cargo route and then in two wetter valley plots.',
    nativeIndicatorLabel:'Bluecrest Grass cover in monitored plots (%)',
    spread:[
      {label:'Survey 1',occupiedZones:1,nativeIndicator:64,note:'Earth Ryegrass found only beside the equipment pad.'},
      {label:'Survey 2',occupiedZones:2,nativeIndicator:57,note:'New plants appear along a runoff path.'},
      {label:'Survey 3',occupiedZones:4,nativeIndicator:46,note:'Dense Ryegrass patches overlap Bluecrest feeding areas.'},
      {label:'Survey 4',occupiedZones:6,nativeIndicator:37,note:'Ridgebacks graze both grasses; Bluecrest patches are becoming smaller.'}
    ],
    evidence:['Earth Ryegrass produces many seeds before the short alpine season ends.','The strongest spread follows boot, wheel, and runoff routes from JCEC activity.','Crag Hunter numbers remain stable, so predator change does not explain the Bluecrest decline.'],
    contaminantPath:[
      {sample:'Valley water',trophicRole:'environment',concentration:0.6},
      {sample:'Bluecrest Grass',trophicRole:'producer',concentration:1.8},
      {sample:'Ridgeback Grazer tissue',trophicRole:'primary consumer',concentration:5.7},
      {sample:'Crag Hunter feather sample',trophicRole:'predator',concentration:15.9}
    ],
    contaminantNote:'Trace X-17 was found downstream from a leaking JCEC maintenance container near the equipment pad.',
    responseChoices:['Close the spread corridor, clean equipment before movement, remove small Ryegrass patches, and monitor Bluecrest recovery.','Contain only the two densest Ryegrass patches while allowing essential JCEC travel on cleaned routes and increasing monitoring.','Pause removal for one monitoring cycle, restrict new travel, and test whether Bluecrest decline continues where Ryegrass is absent.'],
    investigationQuestion:'Does current evidence justify treating Earth Ryegrass as an invasive threat, and how aggressively should JCEC respond?'
  },
  {
    id:'brillig', name:'Brillig', code:'BR', baseCamp:'Tulgey Station', environment:'Warm rainforest ecosystem',
    stowaway:'Earth Compost Worm',
    suspectedEntry:'Egg cocoons survived in a small amount of Earth greenhouse soil packed around research plants.',
    firstDetection:'Earth-origin worms were found beneath cargo pallets and later in several warm, wet litter plots.',
    nativeIndicatorLabel:'Native leaf-litter depth (cm)',
    spread:[
      {label:'Survey 1',occupiedZones:1,nativeIndicator:8.4,note:'Worms restricted to soil beside Tulgey Station.'},
      {label:'Survey 2',occupiedZones:3,nativeIndicator:7.1,note:'Worms detected beneath nearby wet litter.'},
      {label:'Survey 3',occupiedZones:5,nativeIndicator:5.8,note:'Litter disappears faster in occupied plots.'},
      {label:'Survey 4',occupiedZones:7,nativeIndicator:4.6,note:'Seedlings that normally establish in deep litter are less common in invaded plots.'}
    ],
    evidence:['Occupied plots lose leaf litter faster than matched unoccupied plots.','Warm, wet conditions allow the Earth worms to remain active for long periods.','Warmrot Fungi are still present, but the litter habitat used by several small native organisms is thinner.'],
    contaminantPath:[
      {sample:'River-edge water',trophicRole:'environment',concentration:0.5},
      {sample:'Glowfruit Vine tissue',trophicRole:'producer',concentration:1.4},
      {sample:'Canopy Glider tissue',trophicRole:'primary consumer',concentration:4.8},
      {sample:'Vine Stalker tissue',trophicRole:'predator',concentration:14.2}
    ],
    contaminantNote:'X-17 entered a drainage ditch during cleaning of a damaged field battery after a storm.',
    responseChoices:['Quarantine soil movement, remove contaminated greenhouse soil, contain occupied litter plots, and monitor native litter organisms.','Restrict soil movement and test targeted worm removal in small plots before expanding the response.','Stop new soil imports, mark invaded plots as research-only, and collect another cycle of litter and seedling data before large-scale removal.'],
    investigationQuestion:'How strong is the evidence that an introduced decomposer is changing Brillig’s litter ecosystem, and what response creates the least additional disturbance?'
  },
  {
    id:'manxome', name:'Manxome', code:'MA', baseCamp:'Calloo Island', environment:'Coastal island ecosystem',
    stowaway:'Earth Shore Snail',
    suspectedEntry:'Small snails and eggs survived in damp packing material around shoreline instruments.',
    firstDetection:'Earth-origin snails were found beside the supply dock and then on sheltered algae-covered rocks.',
    nativeIndicatorLabel:'Tidefilm Algae cover on sheltered rocks (%)',
    spread:[
      {label:'Survey 1',occupiedZones:1,nativeIndicator:69,note:'Snails found only beside the dock.'},
      {label:'Survey 2',occupiedZones:2,nativeIndicator:63,note:'A second colony appears inside a sheltered cove.'},
      {label:'Survey 3',occupiedZones:4,nativeIndicator:51,note:'Snails overlap Tide Skipper and Shellgrazer feeding areas.'},
      {label:'Survey 4',occupiedZones:5,nativeIndicator:44,note:'Algae scraping increases strongly in snail-occupied plots.'}
    ],
    evidence:['Snail density is highest where Tidefilm Algae loss is greatest.','The protected cove did not experience the high-wave event that caused the earlier Operation 05 decline.','Tide Skippers and Shellgrazers now spend more time in the remaining algae-rich patches.'],
    contaminantPath:[
      {sample:'Cove seawater',trophicRole:'environment',concentration:0.4},
      {sample:'Tidefilm Algae',trophicRole:'producer',concentration:1.5},
      {sample:'Tide Skipper tissue',trophicRole:'primary consumer',concentration:5.1},
      {sample:'Cove Hunter tissue',trophicRole:'predator',concentration:16.8}
    ],
    contaminantNote:'X-17 was traced to protective coating washed from a damaged dock component during storm repair.',
    responseChoices:['Quarantine the dock/cove, inspect all shoreline cargo, remove snails from newly occupied rocks, and monitor algae recovery.','Keep the dock operating under strict inspection while removing snails from the newest colonies first and tracking spread.','Close new shoreline access, collect another survey of snail reproduction and native competition, and delay broad removal until the team knows which habitats are most vulnerable.'],
    investigationQuestion:'Can JCEC contain the introduced snail before it becomes established across multiple islands without causing more shoreline damage?'
  },
  {
    id:'slithy-toves', name:'Slithy Toves', code:'ST', baseCamp:'Borogove Station', environment:'Desert ecosystem',
    stowaway:'Earth Drought Grass',
    suspectedEntry:'Dormant seeds arrived in dust trapped inside a rover wheel housing.',
    firstDetection:'A fast-seeding Earth grass appeared around the only regularly used water-transfer point near Borogove Station.',
    nativeIndicatorLabel:'Saltseed Grass seed heads per monitoring plot',
    spread:[
      {label:'Survey 1',occupiedZones:1,nativeIndicator:31,note:'Earth grass restricted to damp soil beside the water-transfer point.'},
      {label:'Survey 2',occupiedZones:2,nativeIndicator:28,note:'Plants appear along a rover track after a small spill.'},
      {label:'Survey 3',occupiedZones:3,nativeIndicator:22,note:'The introduced grass uses the same brief moisture pulse as Saltseed Grass.'},
      {label:'Survey 4',occupiedZones:4,nativeIndicator:18,note:'Native seed production is lowest in mixed patches near the water point.'}
    ],
    evidence:['The Earth grass is not spreading across the driest dunes; it is concentrated where humans add or move water.','Saltseed and Earth grass root zones overlap after moisture events.','Dune Runner feeding observations show greater use of the remaining native seed patches.'],
    contaminantPath:[
      {sample:'Spring water',trophicRole:'environment',concentration:0.7},
      {sample:'Saltseed Grass tissue',trophicRole:'producer',concentration:1.9},
      {sample:'Dune Runner tissue',trophicRole:'primary consumer',concentration:5.5},
      {sample:'Night Stalker tissue',trophicRole:'predator',concentration:17.1}
    ],
    contaminantNote:'A small amount of X-17 entered the water-transfer system from a cracked pump seal.',
    responseChoices:['Stop nonessential water spills, clean rover equipment, remove Earth grass around the transfer point, and protect native seed-producing patches.','Redesign the water-transfer area to isolate spills, remove new Earth grass plants before seed set, and monitor rather than disturbing older desert surfaces.','Temporarily close the water-transfer point, map all introduced-grass patches, and collect another moisture season of evidence before removing plants outside the station zone.'],
    investigationQuestion:'Is the introduced grass mainly a species problem, a human-created water problem, or both?'
  },
  {
    id:'wabe', name:'Wabe', code:'WA', baseCamp:'Beamish Station', environment:'Arctic ecosystem',
    stowaway:'Earth Coldgrass',
    suspectedEntry:'Seeds were found in insulated cargo matting that had been used outdoors on Earth.',
    firstDetection:'Cold-tolerant Earth grass appeared in disturbed, warmer soil beside Beamish Station and along compacted ruts.',
    nativeIndicatorLabel:'Tundra Mat cover in disturbed monitoring plots (%)',
    spread:[
      {label:'Survey 1',occupiedZones:1,nativeIndicator:29,note:'Coldgrass found only in the warmest disturbed patch.'},
      {label:'Survey 2',occupiedZones:2,nativeIndicator:27,note:'A few plants establish along a rut edge.'},
      {label:'Survey 3',occupiedZones:3,nativeIndicator:23,note:'Coldgrass grows faster than native mat during the short warm period.'},
      {label:'Survey 4',occupiedZones:4,nativeIndicator:20,note:'Native mat recovery is weakest where Coldgrass is densest.'}
    ],
    evidence:['Coldgrass is rare in intact tundra and concentrated in human-disturbed ground.','Compacted ruts remain warmer and wetter than nearby undisturbed tundra during thaw.','Snow Burrower feeding signs still favour native Tundra Mat and Frost Lichen.'],
    contaminantPath:[
      {sample:'Meltwater',trophicRole:'environment',concentration:0.5},
      {sample:'Tundra Mat tissue',trophicRole:'producer',concentration:1.6},
      {sample:'Snow Burrower tissue',trophicRole:'primary consumer',concentration:5.0},
      {sample:'Pale Hunter tissue',trophicRole:'predator',concentration:15.5}
    ],
    contaminantNote:'X-17 was detected below an equipment-storage area after spring meltwater passed through a damaged sealant container.',
    responseChoices:['Remove Coldgrass from the small invaded patches by hand, close disturbed routes, clean cargo matting, and monitor native recovery.','Test hand removal in one patch while leaving another under strict containment as a comparison, with no new vehicle traffic.','Prioritize restoring the human-created ruts and preventing seed movement, then reassess whether Coldgrass declines as disturbed habitat disappears.'],
    investigationQuestion:'Should JCEC focus first on removing the introduced grass, repairing the disturbed habitat that favours it, or both?'
  },
  {
    id:'bandersnatch', name:'Bandersnatch', code:'BA', baseCamp:'Jubjub Station', environment:'Prairie ecosystem',
    stowaway:'Earth Brome Grass',
    suspectedEntry:'Seeds travelled in hay-like packing material used to protect cargo during landing.',
    firstDetection:'Earth Brome formed a narrow patch beside a cargo route, then appeared near a prairie water corridor.',
    nativeIndicatorLabel:'Goldstem Grass cover in monitored plots (%)',
    spread:[
      {label:'Survey 1',occupiedZones:1,nativeIndicator:74,note:'Brome restricted to the cargo edge.'},
      {label:'Survey 2',occupiedZones:3,nativeIndicator:66,note:'Seeds appear along vehicle and animal movement routes.'},
      {label:'Survey 3',occupiedZones:6,nativeIndicator:52,note:'Dense Brome patches develop near water.'},
      {label:'Survey 4',occupiedZones:9,nativeIndicator:41,note:'Goldstem cover is lowest where Brome cover is highest.'}
    ],
    evidence:['Earth Brome produces seed earlier than most monitored native prairie plants.','Plains Striders carry some seeds on lower-leg fur after crossing invaded patches.','Prairie Starflower richness is also lower inside the densest Brome patches.'],
    contaminantPath:[
      {sample:'Waterhole water',trophicRole:'environment',concentration:0.5},
      {sample:'Goldstem Grass tissue',trophicRole:'producer',concentration:1.7},
      {sample:'Prairie Grazer tissue',trophicRole:'primary consumer',concentration:5.8},
      {sample:'Sky Hunter tissue',trophicRole:'predator',concentration:18.4}
    ],
    contaminantNote:'X-17 entered a shallow drainage channel from a maintenance spill near Jubjub Station.',
    responseChoices:['Create a containment perimeter, remove seed-producing Brome patches, clean vehicles, and protect high-value native prairie corridors.','Prioritize removal at the invasion front and water corridor while leaving the oldest patch contained for comparison and monitoring.','Restrict cargo traffic, stop all new seed sources, and test whether native prairie recovery plus targeted mowing/removal can suppress Brome without broad soil disturbance.'],
    investigationQuestion:'How should JCEC respond when an introduced species is already spreading through a highly connected prairie?'
  },
  {
    id:'gimble', name:'Gimble', code:'GI', baseCamp:'Galumph Station', environment:'Temperate forest ecosystem',
    stowaway:'Earth Bark Beetle',
    suspectedEntry:'Several beetles emerged from untreated wooden packing braces shipped from Earth.',
    firstDetection:'Earth-origin beetles were trapped near the unpacking area and later beneath bark on stressed trees beside the sensor route.',
    nativeIndicatorLabel:'Healthy Seedberry/Bark habitat trees in survey plots (%)',
    spread:[
      {label:'Survey 1',occupiedZones:1,nativeIndicator:91,note:'Beetles detected only beside unpacked cargo.'},
      {label:'Survey 2',occupiedZones:2,nativeIndicator:86,note:'New boring marks appear on two nearby stressed trees.'},
      {label:'Survey 3',occupiedZones:4,nativeIndicator:75,note:'Larvae are found under bark in a wider patch.'},
      {label:'Survey 4',occupiedZones:6,nativeIndicator:64,note:'Bark habitat changes are now affecting Bark Grub and Barkclimber foraging sites.'}
    ],
    evidence:['Beetle DNA matches the insects found in Earth packing wood.','The highest beetle densities occur in stressed edge trees, but new detections are moving into the forest.','Barkclimbers spend more time searching in heavily affected plots where native Bark Grubs have declined.'],
    contaminantPath:[
      {sample:'Forest runoff',trophicRole:'environment',concentration:0.4},
      {sample:'Seedberry Shrub tissue',trophicRole:'producer',concentration:1.3},
      {sample:'Bark Grub tissue',trophicRole:'primary consumer',concentration:4.7},
      {sample:'Barkclimber tissue',trophicRole:'secondary consumer',concentration:12.9},
      {sample:'Forest Prowler tissue',trophicRole:'predator',concentration:20.6}
    ],
    contaminantNote:'X-17 was traced to a leaking weatherproofing container stored uphill from a drainage swale.',
    responseChoices:['Quarantine all wood products, destroy untreated packing material, remove beetles from newly infested edge trees, and intensively monitor the invasion front.','Treat only the newest infested trees, establish trap lines around Galumph Station, and avoid cutting healthy forest until spread is better mapped.','Stop movement of all wood, isolate the sensor route, and compare beetle spread in stressed versus healthy forest before deciding whether tree removal is justified.'],
    investigationQuestion:'How can JCEC contain an introduced bark insect without causing unnecessary damage to Gimble’s mature forest?'
  },
  {
    id:'mimsy', name:'Mimsy', code:'MI', baseCamp:'Mome Station', environment:'Wetland ecosystem',
    stowaway:'Earth Marsh Grass',
    suspectedEntry:'Rhizome fragments survived in wet matting used to stabilize equipment during transport.',
    firstDetection:'Dense Earth grass shoots appeared along the temporary access strip and then beside a changed shallow-water channel.',
    nativeIndicatorLabel:'Native Reedbed Plant cover in monitored edge plots (%)',
    spread:[
      {label:'Survey 1',occupiedZones:1,nativeIndicator:62,note:'Earth grass restricted to the former access strip.'},
      {label:'Survey 2',occupiedZones:3,nativeIndicator:55,note:'Rhizome fragments appear downstream of the strip.'},
      {label:'Survey 3',occupiedZones:5,nativeIndicator:43,note:'Dense Earth grass begins replacing open reed-water edge.'},
      {label:'Survey 4',occupiedZones:8,nativeIndicator:34,note:'Reedcrawler detections are lower where the shallow edge is choked by Earth grass.'}
    ],
    evidence:['The introduced grass spreads fastest along the altered water-flow path created by the access mat.','Surface Insect abundance is lower in the densest Earth-grass stands than in mixed native reed edges.','Mud Stalker detections remain similar, so predator increase does not explain the Reedcrawler change.'],
    contaminantPath:[
      {sample:'Wetland water',trophicRole:'environment',concentration:0.6},
      {sample:'Water Mat tissue',trophicRole:'producer',concentration:1.9},
      {sample:'Surface Insect tissue',trophicRole:'primary consumer',concentration:5.9},
      {sample:'Reedcrawler tissue',trophicRole:'secondary consumer',concentration:13.8},
      {sample:'Mud Stalker tissue',trophicRole:'predator',concentration:22.3}
    ],
    contaminantNote:'X-17 was detected near a damaged pump used beside the temporary access strip.',
    responseChoices:['Contain the invaded channel, remove small Earth-grass patches, restore normal shallow-water flow, clean wet equipment, and monitor native reed-edge recovery.','Restore water flow first and remove only invasion-front patches, testing whether habitat restoration slows the Earth grass naturally.','Close the access strip, prevent all fragment movement, map the wetland invasion for another survey cycle, and delay broad removal that could further disturb soft sediment.'],
    investigationQuestion:'Is the introduced grass driving habitat change, taking advantage of human-altered water flow, or both?'
  }
];

export const operation07ById = Object.fromEntries(operation07Incidents.map((item) => [item.id, item]));
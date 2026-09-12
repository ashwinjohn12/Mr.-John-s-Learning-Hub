export interface PlanningZone {
  name: string;
  evidencePrompt: string;
}

export interface Operation08Brief {
  id: string;
  name: string;
  code: string;
  baseCamp: string;
  preliminaryRating: string;
  environment: string;
  planningZones: PlanningZone[];
  ecologicalStrength: string;
  ecologicalConcern: string;
}

export const operation08Briefs: Operation08Brief[] = [
  {
    id:'gyre', name:'Gyre', code:'GY', baseCamp:'Frumious Basin', preliminaryRating:'Promising', environment:'Alpine valley ecosystem',
    ecologicalStrength:'Fresh water, productive valley habitat, and several connected ecological zones provide strong evidence that life can persist in protected valleys.',
    ecologicalConcern:'Fragile alpine surfaces recover slowly, Bluecrest resources can be limited by moisture, and the Earth Ryegrass/X-17 incident shows that human corridors can spread ecological impacts.',
    planningZones:[
      {name:'Valley Water Corridor',evidencePrompt:'Fresh water, Bluecrest habitat, Ridgeback feeding, and contaminant pathway evidence.'},
      {name:'Alpine Bench',evidencePrompt:'Slow recovery, erosion risk, and fragile pioneer growth.'},
      {name:'Base-Camp / Cargo Corridor',evidencePrompt:'Main human-use area and origin of the Earth Ryegrass incident.'},
      {name:'Reference Valley',evidencePrompt:'Less-disturbed comparison habitat that should remain available for long-term monitoring.'}
    ]
  },
  {
    id:'brillig', name:'Brillig', code:'BR', baseCamp:'Tulgey Station', preliminaryRating:'Very Promising', environment:'Warm rainforest ecosystem',
    ecologicalStrength:'High productivity, abundant water, rapid plant growth, and complex food-web relationships create a biologically rich environment.',
    ecologicalConcern:'Rapid surface greening can hide incomplete recovery, erosion increases after clearing, and introduced soil organisms can alter rainforest litter processes.',
    planningZones:[
      {name:'Riverbank Corridor',evidencePrompt:'Flooding, erosion, water quality, and River Fern habitat.'},
      {name:'Canopy Habitat',evidencePrompt:'Canopy Glider food/shelter relationships and mature-tree structure.'},
      {name:'Recovery Clearing',evidencePrompt:'Fast succession but incomplete rainforest structure.'},
      {name:'Cargo / Soil Quarantine Zone',evidencePrompt:'Earth Compost Worm entry and contaminated drainage evidence.'}
    ]
  },
  {
    id:'manxome', name:'Manxome', code:'MA', baseCamp:'Calloo Island', preliminaryRating:'Promising', environment:'Coastal island ecosystem',
    ecologicalStrength:'Mild conditions and productive coastal habitats support connected marine and terrestrial food webs.',
    ecologicalConcern:'Storm exposure, vulnerable Tidefilm feeding areas, and transport between islands make introduced-species containment difficult.',
    planningZones:[
      {name:'Sheltered Cove',evidencePrompt:'Tidefilm Algae, Tide Skippers, Shellgrazers, and Earth Shore Snail evidence.'},
      {name:'Exposed Shore',evidencePrompt:'Wave disturbance and natural recovery data.'},
      {name:'Upland Coastal Habitat',evidencePrompt:'Shore Grass and less-disturbed refuge habitat.'},
      {name:'Supply Dock',evidencePrompt:'Main human transport point and suspected introduced-species entry route.'}
    ]
  },
  {
    id:'slithy-toves', name:'Slithy Toves', code:'ST', baseCamp:'Borogove Station', preliminaryRating:'Difficult', environment:'Desert ecosystem',
    ecologicalStrength:'Native organisms show strong adaptations to extreme temperature, scarce water, and short resource pulses.',
    ecologicalConcern:'Water is a major limiting factor, biological soil crust recovers extremely slowly, and human-added water can create opportunities for introduced species.',
    planningZones:[
      {name:'Freshwater Spring',evidencePrompt:'Critical limiting resource for native organisms and X-17 contamination pathway.'},
      {name:'Biological Soil-Crust Zone',evidencePrompt:'Very slow recovery and high sensitivity to traffic.'},
      {name:'Native Seed Patch',evidencePrompt:'Saltseed Grass production and Dune Runner food evidence.'},
      {name:'Water-Transfer / Rover Zone',evidencePrompt:'Earth Drought Grass spread linked to human water movement.'}
    ]
  },
  {
    id:'wabe', name:'Wabe', code:'WA', baseCamp:'Beamish Station', preliminaryRating:'Challenging', environment:'Arctic ecosystem',
    ecologicalStrength:'Native species use snow, stored food, low-growing plants, and seasonal refuges to survive severe cold.',
    ecologicalConcern:'Recovery is slow, compaction changes drainage, native producers grow slowly, and disturbed warm patches favour introduced Coldgrass.',
    planningZones:[
      {name:'Tundra Mat Habitat',evidencePrompt:'Slow-growing native producer and Snow Burrower food resource.'},
      {name:'Snow-Burrow Refuge Zone',evidencePrompt:'Subnivean habitat and seasonal survival evidence.'},
      {name:'Rut Recovery Zone',evidencePrompt:'Compaction, altered drainage, and slow succession.'},
      {name:'Beamish Cargo Zone',evidencePrompt:'Coldgrass introduction and X-17 meltwater pathway.'}
    ]
  },
  {
    id:'bandersnatch', name:'Bandersnatch', code:'BA', baseCamp:'Jubjub Station', preliminaryRating:'Excellent', environment:'Prairie ecosystem',
    ecologicalStrength:'Deep-rooted prairie plants, mobile grazers, and rapid vegetative regrowth show strong resilience under some disturbances.',
    ecologicalConcern:'Water availability shapes animal distribution, native richness recovers more slowly than grass cover, and Earth Brome can spread quickly through connected prairie corridors.',
    planningZones:[
      {name:'Native Prairie Core',evidencePrompt:'Goldstem Grass, Prairie Starflower, food-web diversity, and reference-site richness.'},
      {name:'Waterhole Corridor',evidencePrompt:'Plains Strider movement and Brome spread along high-use routes.'},
      {name:'Cargo-Route Recovery Zone',evidencePrompt:'Rapid regrowth but incomplete richness recovery.'},
      {name:'Jubjub Operations Zone',evidencePrompt:'Human access, maintenance spill, and biosecurity entry pathways.'}
    ]
  },
  {
    id:'gimble', name:'Gimble', code:'GI', baseCamp:'Galumph Station', preliminaryRating:'Very Promising', environment:'Temperate forest ecosystem',
    ecologicalStrength:'Intact surrounding forest can supply seeds, spores, litter, shelter, and complex food-web connections that support recovery.',
    ecologicalConcern:'Forest-floor complexity takes time to rebuild, Barkclimbers depend on mature bark habitat, and an introduced bark beetle could spread through stressed trees.',
    planningZones:[
      {name:'Mature Forest Core',evidencePrompt:'Barkclimber, Bark Grub, cavity/shelter, and intact food-web evidence.'},
      {name:'Forest-Floor Recovery Patch',evidencePrompt:'Secondary succession, litter return, and species-richness gap.'},
      {name:'Drainage / Runoff Swale',evidencePrompt:'X-17 transport pathway from human activity.'},
      {name:'Cargo / Wood Quarantine Zone',evidencePrompt:'Earth Bark Beetle entry and containment evidence.'}
    ]
  },
  {
    id:'mimsy', name:'Mimsy', code:'MI', baseCamp:'Mome Station', preliminaryRating:'Poor', environment:'Wetland ecosystem',
    ecologicalStrength:'Wetland organisms are strongly adapted to shallow-water edges, and vegetation can recolonize quickly when water flow remains suitable.',
    ecologicalConcern:'Soft ground and altered hydrology can change habitat even when plants return, while Earth Marsh Grass spreads through disturbed water-flow corridors.',
    planningZones:[
      {name:'Native Reed-Water Edge',evidencePrompt:'Reedcrawler, Surface Insects, Reedbed Plants, and shallow-water food-web evidence.'},
      {name:'Water-Flow Corridor',evidencePrompt:'Hydrology is a key habitat condition and route for introduced-grass spread.'},
      {name:'Access-Strip Recovery Zone',evidencePrompt:'Plant recovery with persistent water-flow change.'},
      {name:'Mome Operations Zone',evidencePrompt:'Pump damage, X-17 source, and human movement controls.'}
    ]
  }
];

export const operation08ById = Object.fromEntries(operation08Briefs.map((item) => [item.id, item]));
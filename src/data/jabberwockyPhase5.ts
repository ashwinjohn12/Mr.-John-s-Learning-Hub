export interface Phase5GeologicalSite {
  id: string;
  name: string;
  code: string;
  icon: string;
  subtitle: string;
  geologicalQuestion: string;
  previousTeamGeologicalBriefing: {
    surfaceEnvironment: string;
    structuralSiteNeed: string;
    groundDisturbanceLimit: string;
    openGeologicalQuestion: string;
  };
  mission1SurveyPacket: string[];
  mission2RockHistoryClues: string[];
}

export const phase5GeologicalSites: Phase5GeologicalSite[] = [
  {
    id: 'gyre', name: 'Gyre', code: 'GY', icon: '⛰️', subtitle: 'Alpine Frontier',
    geologicalQuestion: 'What do exposed rock, angular fragments and thin sediments reveal about this alpine site?',
    previousTeamGeologicalBriefing: {
      surfaceEnvironment: 'Cold alpine highlands with steep or uneven terrain, exposed slopes, snow and thin fragile soils.',
      structuralSiteNeed: 'Project New Horizon requires stable support on limited ground while accounting for snow/exposure.',
      groundDisturbanceLimit: 'Minimize disturbance to erosion-prone slopes, thin mountain soils and important valley habitat.',
      openGeologicalQuestion: 'JCEC has not yet determined what the exposed layers and loose fragments can reveal about the site’s geological history.'
    },
    mission1SurveyPacket: [
      'An exposed outcrop shows several visible layers. JCEC has not assigned an age or rock identity to them.',
      'Loose fragments near the outcrop are mostly angular rather than rounded.',
      'Surface sediment is thin and discontinuous, with bedrock exposed in several places.'
    ],
    mission2RockHistoryClues: [
      'Several outcrop layers contain visibly different grain sizes, but JCEC has not confirmed whether they are one rock type or several.',
      'Some loose fragments appear similar in colour and texture to nearby exposed layers; others do not.',
      'Layering is consistent with a history involving deposition, but the present survey does not prove exactly how or when those layers formed.'
    ]
  },
  {
    id: 'brillig', name: 'Brillig', code: 'BR', icon: '🌿', subtitle: 'Emerald Basin',
    geologicalQuestion: 'What can strongly weathered surfaces and stream sediments reveal about a wet rainforest landscape?',
    previousTeamGeologicalBriefing: {
      surfaceEnvironment: 'Warm humid rainforest with dense vegetation, rivers, frequent rainfall and erosion-sensitive clearings.',
      structuralSiteNeed: 'Project New Horizon requires a reliable structure on a frequently wet site with a small cleared footprint.',
      groundDisturbanceLimit: 'Avoid large forest clearing or ground disturbance that could increase erosion and habitat damage.',
      openGeologicalQuestion: 'JCEC still needs evidence about the materials beneath the forest soil and how sediments are moving through waterways.'
    },
    mission1SurveyPacket: [
      'Several exposed rock surfaces appear strongly weathered and roughened.',
      'Stream sediment includes many rounded grains and small pebbles.',
      'Fine sediment has accumulated in quieter areas beside moving water.'
    ],
    mission2RockHistoryClues: [
      'Rounded stream particles show that transport has changed some surface material, so loose sediment is not automatically the same as the rock beneath it.',
      'Fine material occurs in quiet-water deposits while coarser particles remain in faster-moving areas.',
      'The survey supports transport and deposition, but it does not yet establish the rock class of buried or weathered bedrock.'
    ]
  },
  {
    id: 'manxome', name: 'Manxome', code: 'MA', icon: '🏝️', subtitle: 'Vorpal Archipelago',
    geologicalQuestion: 'What do coastal exposures, rounded pebbles and sediment bands reveal about the island surface?',
    previousTeamGeologicalBriefing: {
      surfaceEnvironment: 'Mild ocean-influenced islands with a severe storm season, freshwater catchments and sensitive coastal connections.',
      structuralSiteNeed: 'Project New Horizon requires secure, stable support and connections through changing storm-season loads.',
      groundDisturbanceLimit: 'Protect freshwater catchments and sensitive coastal habitat connections when investigating or building.',
      openGeologicalQuestion: 'JCEC has not yet determined how much of the shoreline material is exposed rock versus transported sediment.'
    },
    mission1SurveyPacket: [
      'A coastal exposure reveals solid rock at several points along the shoreline.',
      'Nearby beaches contain many rounded pebbles and smaller grains.',
      'Visible bands of sand and other sediment occur along parts of the shore.'
    ],
    mission2RockHistoryClues: [
      'Some solid coastal exposures show visible layers; nearby rounded pebbles are loose and may have travelled before deposition.',
      'Bands of sand contain particles of more than one colour and grain size.',
      'The evidence supports more than one stage of geological change, but it does not prove one rock class for the entire island.'
    ]
  },
  {
    id: 'slithy-toves', name: 'Slithy Toves', code: 'ST', icon: '🏜️', subtitle: 'Sunscar Desert',
    geologicalQuestion: 'What can fractured exposed rock and sorted loose sediment reveal about this dry site?',
    previousTeamGeologicalBriefing: {
      surfaceEnvironment: 'Extremely dry exposed desert with scarce fresh water, storms and very large day-night temperature changes.',
      structuralSiteNeed: 'Project New Horizon requires a material-efficient structure that works through large thermal changes without water-heavy construction.',
      groundDisturbanceLimit: 'Do not consume large amounts of scarce fresh water or disturb productive areas near limited water sources.',
      openGeologicalQuestion: 'JCEC still needs evidence about how exposed rock breaks down and how loose sediment has been sorted or moved.'
    },
    mission1SurveyPacket: [
      'Exposed rock surfaces contain visible fractures; no fault or tectonic cause has been confirmed.',
      'Angular fragments occur close to several exposed rock surfaces.',
      'Loose sediment in open areas shows visible differences in grain size from place to place.'
    ],
    mission2RockHistoryClues: [
      'Fragments beside some exposures share visible texture with nearby rock, suggesting they may have broken from local material.',
      'Other loose sediment is more sorted by grain size and may have been moved before it settled.',
      'Fractures and loose particles do not by themselves identify an igneous, sedimentary or metamorphic origin.'
    ]
  },
  {
    id: 'wabe', name: 'Wabe', code: 'WA', icon: '❄️', subtitle: 'White Frontier',
    geologicalQuestion: 'What do fractured rock and seasonal meltwater deposits reveal about a cold surface?',
    previousTeamGeologicalBriefing: {
      surfaceEnvironment: 'Arctic cold with snow, short summers, long storms and slow ecosystem recovery.',
      structuralSiteNeed: 'Project New Horizon requires reliable support through snow and storms while minimizing repeated disturbance.',
      groundDisturbanceLimit: 'Protect slow-recovering plant mats and avoid unnecessary repeated ground disturbance.',
      openGeologicalQuestion: 'JCEC still needs evidence about the exposed rock, loose angular debris and small seasonal sediment deposits.'
    },
    mission1SurveyPacket: [
      'Several exposed rock surfaces contain visible fractures and broken edges.',
      'Loose debris near exposures is mostly angular.',
      'Small deposits of sediment are visible where seasonal meltwater has moved across the surface.'
    ],
    mission2RockHistoryClues: [
      'Some exposed surfaces show small visible grains, but the current survey does not show enough detail to confirm a rock class.',
      'Angular debris near the exposure is consistent with local breakdown rather than long transport.',
      'Seasonal sediment deposits record a later surface process and should not be mistaken for evidence of how the original rock first formed.'
    ]
  },
  {
    id: 'bandersnatch', name: 'Bandersnatch', code: 'BA', icon: '🌾', subtitle: 'Golden Plains',
    geologicalQuestion: 'What can soil, layered sediment and limited rock exposure tell us about a prairie site?',
    previousTeamGeologicalBriefing: {
      surfaceEnvironment: 'Open prairie with productive soils, cold winters, warm summers and strong seasonal change.',
      structuralSiteNeed: 'Project New Horizon requires a compact footprint and stable support while protecting productive soil and habitat.',
      groundDisturbanceLimit: 'Keep native prairie connections intact and protect productive soil from unnecessary excavation or erosion.',
      openGeologicalQuestion: 'Because exposed rock is limited, JCEC does not yet know how much site history can be inferred from surface sediments alone.'
    },
    mission1SurveyPacket: [
      'Most of the site is covered by soil rather than exposed rock.',
      'A shallow cut exposes several layers of sediment and gravel beneath the soil.',
      'Only a few small rock exposures are visible in the current survey area.'
    ],
    mission2RockHistoryClues: [
      'The layered sediment includes sand-sized material and gravel, but loose sediment is not automatically sedimentary rock.',
      'The few solid rock exposures are too limited for JCEC to assume one rock class across the site.',
      'The strongest current history may describe sediment transport and deposition while leaving the underlying bedrock origin unresolved.'
    ]
  },
  {
    id: 'gimble', name: 'Gimble', code: 'GI', icon: '🌲', subtitle: 'Greatwood',
    geologicalQuestion: 'What can weathered outcrops and stream sediment reveal beneath a forest surface?',
    previousTeamGeologicalBriefing: {
      surfaceEnvironment: 'Temperate forest with severe winters, forest soils and important habitat connections.',
      structuralSiteNeed: 'Project New Horizon requires a compact reliable site that does not depend on extensive forest clearing.',
      groundDisturbanceLimit: 'Avoid unnecessary forest clearing, fragmentation or excavation simply to make investigation or construction easier.',
      openGeologicalQuestion: 'JCEC still needs evidence about the weathered rock beneath forest soils and the origin of sediment in local streams.'
    },
    mission1SurveyPacket: [
      'A small outcrop beneath the forest soil has a visibly weathered surface.',
      'Nearby stream sediment contains many rounded grains and pebbles.',
      'Most of the ground remains covered by soil and vegetation, so the rock record is only partly exposed.'
    ],
    mission2RockHistoryClues: [
      'The exposed outcrop contains more than one visible grain type, but weathering makes some original features difficult to interpret.',
      'Rounded stream sediment has been transported and may include material from beyond the immediate survey point.',
      'The current evidence can support a cautious rock-history hypothesis, not a site-wide rock identity.'
    ]
  },
  {
    id: 'mimsy', name: 'Mimsy', code: 'MI', icon: '🪷', subtitle: 'Endless Wetlands',
    geologicalQuestion: 'What can fine saturated sediment layers reveal when very little bedrock is exposed?',
    previousTeamGeologicalBriefing: {
      surfaceEnvironment: 'Warm humid wetland with shallow water, saturated ground and very little dry exposed surface.',
      structuralSiteNeed: 'Project New Horizon requires stable support on saturated ground without draining or filling the wetland.',
      groundDisturbanceLimit: 'Do not drain, excavate or destroy wetland vegetation and water-storage function simply to expose deeper material.',
      openGeologicalQuestion: 'JCEC has little direct bedrock evidence and must determine what can be learned from shallow sediment without damaging the wetland.'
    },
    mission1SurveyPacket: [
      'Shallow survey cores show fine saturated sediment in visible layers.',
      'Some layers contain more mineral grains while others contain more organic material.',
      'Very little solid rock is exposed at the surface in the current survey area.'
    ],
    mission2RockHistoryClues: [
      'Fine layered sediment shows repeated deposition, but loose wetland sediment is not yet rock.',
      'Some layers contain different proportions of mineral grains and organic material, recording changing surface conditions.',
      'Because solid bedrock is scarcely exposed, “not enough evidence yet” may be the strongest rock-class conclusion.'
    ]
  }
];

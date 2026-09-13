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
    ]
  }
];

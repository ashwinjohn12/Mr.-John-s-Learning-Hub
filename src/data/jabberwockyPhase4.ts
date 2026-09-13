export interface Phase4StructuralSite {
  id: string;
  name: string;
  code: string;
  icon: string;
  subtitle: string;
  previousTeamStructuralBriefing: {
    environment: string;
    thermalRequirement: string;
    ecologicalRestriction: string;
    siteLoadWarning: string;
  };
  structuralChallenge: string;
  mission1Clues: string[];
}

export const phase4StructuralSites: Phase4StructuralSite[] = [
  {
    id: 'gyre', name: 'Gyre', code: 'GY', icon: '⛰️', subtitle: 'Alpine Frontier',
    previousTeamStructuralBriefing: {
      environment: 'Cold alpine highlands with snow, exposed slopes and limited sheltered ground.',
      thermalRequirement: 'The Phase 3 plan must reduce long-term heat loss and use passive solar gain only where the site allows it.',
      ecologicalRestriction: 'Keep erosion-prone slopes, thin mountain soils and important valley habitat as undisturbed as possible.',
      siteLoadWarning: 'Uneven or sloped ground limits where a stable support system can be placed, and snow/exposure must be considered as structural loading conditions.'
    },
    structuralChallenge: 'Create requirements for a stable, low-disturbance habitat on limited alpine ground that can tolerate snow and exposure.',
    mission1Clues: [
      'Useful building ground is limited and may be uneven or sloped.',
      'Snow and exposed alpine conditions must be considered when deciding what the structure needs to withstand.',
      'Fragile soils and slopes mean the structure should minimize ground disturbance rather than simply use a larger footprint.'
    ]
  },
  {
    id: 'brillig', name: 'Brillig', code: 'BR', icon: '🌿', subtitle: 'Emerald Basin',
    previousTeamStructuralBriefing: {
      environment: 'Warm, humid rainforest with dense vegetation, rivers and heavy rainfall.',
      thermalRequirement: 'The Phase 3 plan should limit heat gain using shade and careful control rather than clearing more canopy.',
      ecologicalRestriction: 'Use existing openings where possible and avoid large forest clearing that increases erosion and habitat damage.',
      siteLoadWarning: 'A wet rainforest site means placement, moisture exposure and stable support conditions matter before a structure is selected.'
    },
    structuralChallenge: 'Set requirements for a reliable habitat in a wet rainforest while keeping the cleared footprint small.',
    mission1Clues: [
      'The site is warm, humid and frequently wet, so the structure must remain useful in a moisture-rich environment.',
      'Large canopy clearing is already ruled out because it can increase erosion and habitat damage.',
      'A successful structure must fit into a limited site rather than requiring a large open construction area.'
    ]
  },
  {
    id: 'manxome', name: 'Manxome', code: 'MA', icon: '🏝️', subtitle: 'Vorpal Archipelago',
    previousTeamStructuralBriefing: {
      environment: 'Mild ocean-influenced islands with a severe annual storm season.',
      thermalRequirement: 'The Phase 3 system should stay flexible through changing island weather and use passive control when conditions allow.',
      ecologicalRestriction: 'Protect freshwater catchments and sensitive coastal connections when choosing human sites.',
      siteLoadWarning: 'Storm-season exposure means the structure and its connections must be designed with changing external loads in mind.'
    },
    structuralChallenge: 'Define a structure that remains stable through storm-season exposure without damaging island or coastal systems.',
    mission1Clues: [
      'The islands are usually mild, but a severe storm season changes the loading conditions a structure may face.',
      'Connections between structural parts may be especially important when external forces change quickly.',
      'Freshwater catchments and coastal habitat connections limit where construction should spread.'
    ]
  },
  {
    id: 'slithy-toves', name: 'Slithy Toves', code: 'ST', icon: '🏜️', subtitle: 'Sunscar Desert',
    previousTeamStructuralBriefing: {
      environment: 'Extremely dry desert with scarce fresh water, storms and very large day-night temperature changes.',
      thermalRequirement: 'The Phase 3 habitat must limit daytime heat gain and nighttime heat loss without depending on water-intensive cooling.',
      ecologicalRestriction: 'Do not consume large amounts of scarce fresh water or disturb the few productive areas near water sources.',
      siteLoadWarning: 'The structure will be exposed to a dry, open setting and must remain useful through large thermal changes without water-heavy construction methods.'
    },
    structuralChallenge: 'Set requirements for a material-efficient exposed habitat that can handle desert conditions without creating a new water problem.',
    mission1Clues: [
      'The site is extremely dry and exposed, so construction cannot depend on large amounts of fresh water.',
      'Large day-night thermal changes from earlier missions remain a structural design requirement.',
      'The structure must use land carefully because productive areas near water are limited.'
    ]
  },
  {
    id: 'wabe', name: 'Wabe', code: 'WA', icon: '❄️', subtitle: 'White Frontier',
    previousTeamStructuralBriefing: {
      environment: 'Arctic cold with snow, short summers and long storms.',
      thermalRequirement: 'The Phase 3 plan requires strong protection against prolonged heat loss with controlled heating backup.',
      ecologicalRestriction: 'Protect slow-recovering natural plant mats from repeated disturbance.',
      siteLoadWarning: 'Snow and long storms create structural loading concerns while the site allows very little repeated ground disturbance.'
    },
    structuralChallenge: 'Define a stable structure that can tolerate prolonged cold, snow and storms while keeping site disturbance low.',
    mission1Clues: [
      'Snow and long storms are normal environmental conditions that a structure must be able to handle safely.',
      'The habitat also needs a strong thermal envelope, so structural choices cannot ignore the Phase 3 requirement.',
      'Slow-recovering vegetation means construction and repairs should minimize repeated ground disturbance.'
    ]
  },
  {
    id: 'bandersnatch', name: 'Bandersnatch', code: 'BA', icon: '🌾', subtitle: 'Golden Plains',
    previousTeamStructuralBriefing: {
      environment: 'Open prairie with cold winters, warm summers and a broad seasonal temperature range.',
      thermalRequirement: 'The Phase 3 habitat must adapt between winter heating and summer cooling without expanding its footprint.',
      ecologicalRestriction: 'Keep native prairie connections intact and protect productive soil from unnecessary development and erosion.',
      siteLoadWarning: 'A successful structural system must work on an exposed open site while keeping its land footprint compact.'
    },
    structuralChallenge: 'Set requirements for an adaptable, compact prairie structure that remains reliable across strong seasonal changes.',
    mission1Clues: [
      'The open prairie gives the structure little natural shelter from the surrounding environment.',
      'Large seasonal temperature changes mean structural requirements must remain compatible with the Phase 3 thermal plan.',
      'A larger footprint is not automatically better because prairie habitat connections and soil must be protected.'
    ]
  },
  {
    id: 'gimble', name: 'Gimble', code: 'GI', icon: '🌲', subtitle: 'Greatwood',
    previousTeamStructuralBriefing: {
      environment: 'Temperate forest with severe winters and mild to warm summers.',
      thermalRequirement: 'The Phase 3 plan must retain heat during severe winters without clearing large forest areas for solar exposure.',
      ecologicalRestriction: 'Avoid extensive forest clearing or fragmentation for human infrastructure.',
      siteLoadWarning: 'The structure must fit within an existing forest site and remain reliable through severe winter conditions.'
    },
    structuralChallenge: 'Define a compact forest structure that remains safe through severe winters without fragmenting the habitat around it.',
    mission1Clues: [
      'Severe winter conditions must be considered when deciding what the structure must withstand.',
      'The site is inside an existing forest, so clearing a large construction footprint conflicts with earlier evidence.',
      'The structure must work with the thermal plan rather than requiring a separate cleared site to solve winter heating problems.'
    ]
  },
  {
    id: 'mimsy', name: 'Mimsy', code: 'MI', icon: '🪷', subtitle: 'Endless Wetlands',
    previousTeamStructuralBriefing: {
      environment: 'Warm, humid wetland with shallow water and saturated ground.',
      thermalRequirement: 'The Phase 3 plan must limit heat gain without draining or heavily altering the wetland.',
      ecologicalRestriction: 'Do not drain or destroy wetland vegetation and natural water-storage function to make construction easier.',
      siteLoadWarning: 'Saturated ground makes stable support and foundation design a major site question.'
    },
    structuralChallenge: 'Set requirements for a light, stable wetland structure that can be supported without draining the site.',
    mission1Clues: [
      'The ground is saturated, so ordinary dry-ground foundation assumptions may not work here.',
      'The wetland cannot be drained simply to make the site easier to build on.',
      'A successful structure should keep its footprint and disturbance limited while remaining stable on the wet site.'
    ]
  }
];

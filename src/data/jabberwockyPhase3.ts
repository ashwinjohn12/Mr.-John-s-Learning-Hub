export interface Phase3ThermalSite {
  id: string;
  name: string;
  code: string;
  icon: string;
  subtitle: string;
  previousTeamThermalBriefing: {
    environment: string;
    resource: string;
    ecosystemWarning: string;
    developmentRestriction: string;
  };
  thermalChallenge: string;
  mission1Clues: string[];
  mission2Clues: string[];
  mission3Clues: string[];
  mission4Clues: string[];
}

export const phase3ThermalSites: Phase3ThermalSite[] = [
  {
    id: 'gyre', name: 'Gyre', code: 'GY', icon: '⛰️', subtitle: 'Alpine Frontier',
    previousTeamThermalBriefing: {
      environment: 'Cold alpine highlands with snow, exposed slopes and limited sheltered ground.',
      resource: 'Skyroot can provide food and fibre, but useful growing land is limited.',
      ecosystemWarning: 'Thin mountain soils and alpine vegetation can recover slowly after disturbance.',
      developmentRestriction: 'Keep erosion-prone slopes and important valley habitat as undisturbed as possible.'
    },
    thermalChallenge: 'Reduce rapid heat loss in an exposed cold environment while using passive solar gain when conditions allow.',
    mission1Clues: [
      'Cold alpine conditions make long periods of heat loss a serious concern.',
      'Wind exposure can make an unprotected habitat lose heat faster.',
      'Some slopes receive useful sunlight, but fragile ground limits where humans should build.'
    ],
    mission2Clues: [
      'Exposed moving air can carry thermal energy away from a warmer habitat by convection.',
      'Walls, floors and other touching materials can conduct thermal energy from the warmer inside toward colder surroundings.',
      'Sunlight on some slopes can add thermal energy by radiation when it is available.'
    ],
    mission3Clues: [
      'A barrier that slows conduction through walls, roof and floor could reduce heat loss during long cold periods.',
      'Wind exposure means gaps or poorly covered areas can weaken an otherwise useful thermal barrier.',
      'Fragile slopes limit how much humans should disturb the site, so improving the habitat envelope is preferable to simply expanding the development footprint.'
    ],
    mission4Clues: [
      'Long cold periods mean a control system must notice falling indoor temperature and respond before conditions become unsafe.',
      'Passive solar gain can help when sunlight is available, but it cannot be treated as a constant heat source.',
      'Because the site is fragile, JCEC should improve control of the existing habitat before expanding the development footprint.'
    ]
  },
  {
    id: 'brillig', name: 'Brillig', code: 'BR', icon: '🌿', subtitle: 'Emerald Basin',
    previousTeamThermalBriefing: {
      environment: 'Warm, humid rainforest with dense vegetation and heavy rainfall.',
      resource: 'Rainspout Tree provides fruit, seeds and fibre without needing open farmland.',
      ecosystemWarning: 'Removing canopy vegetation can increase erosion, nutrient loss and habitat damage.',
      developmentRestriction: 'Use existing clearings and avoid clearing forest simply to make human systems easier to operate.'
    },
    thermalChallenge: 'Limit unwanted heat gain and cooling demand in a warm, humid habitat without damaging the rainforest around it.',
    mission1Clues: [
      'The environment is already warm and humid for long periods.',
      'Dense canopy changes how much direct sunlight reaches different locations.',
      'Large forest clearings would create a new ecological problem even if they made construction easier.'
    ],
    mission2Clues: [
      'Warm, humid air moving around a habitat can transfer thermal energy by convection.',
      'Dense canopy changes how much direct sunlight reaches a site, so radiant energy gain can differ by location.',
      'Any temperature difference across habitat walls or roofs can move thermal energy through those materials by conduction.'
    ],
    mission3Clues: [
      'A thermal barrier can slow unwanted energy moving through the habitat shell when outside conditions are warmer than the interior.',
      'Good coverage matters, but a barrier should not be treated as a reason to remove surrounding canopy or block every useful airflow path.',
      'Earlier teams already ruled out large forest clearings, so the thermal strategy must work within existing openings and habitat limits.'
    ],
    mission4Clues: [
      'Shade can reduce radiant heat gain before active cooling is used.',
      'Ventilation can move air when conditions make it useful, but the control system still needs to monitor indoor temperature rather than vent automatically all the time.',
      'The rainforest canopy and existing clearings must remain part of the solution instead of being removed for easier habitat control.'
    ]
  },
  {
    id: 'manxome', name: 'Manxome', code: 'MA', icon: '🏝️', subtitle: 'Vorpal Archipelago',
    previousTeamThermalBriefing: {
      environment: 'Mild ocean-influenced islands with a severe annual storm season.',
      resource: 'Storm Palm can provide fruit, oil-rich seeds and useful fibre.',
      ecosystemWarning: 'Land and shore food webs are closely connected, and introduced organisms can spread between islands.',
      developmentRestriction: 'Protect freshwater catchments and sensitive coastal connections when choosing habitat sites.'
    },
    thermalChallenge: 'Keep habitat temperatures reasonably stable with a system that remains useful through changing island weather and storm conditions.',
    mission1Clues: [
      'Most conditions are mild compared with the coldest or hottest continents.',
      'Storm season can quickly change wind, cloud cover and exposure around a habitat.',
      'A thermal plan should remain useful without requiring new damage to freshwater or coastal habitat.'
    ],
    mission2Clues: [
      'Storm-season air movement can make convection an important pathway around an exposed habitat.',
      'Changing cloud cover and exposure can change how much solar radiation reaches habitat surfaces.',
      'When indoor and outdoor temperatures differ, thermal energy can conduct through the habitat materials between them.'
    ],
    mission3Clues: [
      'Because most island conditions are mild, the best barrier may be one that moderates changes rather than maximizing insulation at all times.',
      'Storm exposure makes continuous coverage and protected openings important because gaps can allow rapid thermal exchange with moving air.',
      'Habitat improvements must protect freshwater catchments and sensitive coastal connections rather than relocating the whole system into a more damaging site.'
    ],
    mission4Clues: [
      'Most conditions are mild enough that passive control and careful ventilation may often reduce the need for active heating or cooling.',
      'Storm-season changes in wind and cloud cover mean the system should respond to measured conditions rather than follow one fixed setting all year.',
      'Control choices must continue to protect freshwater catchments and coastal habitat connections.'
    ]
  },
  {
    id: 'slithy-toves', name: 'Slithy Toves', code: 'ST', icon: '🏜️', subtitle: 'Sunscar Desert',
    previousTeamThermalBriefing: {
      environment: 'Extremely dry desert with scarce fresh water and very large day-night temperature changes.',
      resource: 'Reservoir Thorn survives with little water and may provide food, oil and fibre.',
      ecosystemWarning: 'Most organisms depend on a few productive areas near limited water sources.',
      developmentRestriction: 'Human systems must not solve problems by consuming large amounts of scarce fresh water.'
    },
    thermalChallenge: 'Limit daytime heat gain near 40°C while also reducing heat loss when nights can fall near −5°C.',
    mission1Clues: [
      'Daytime temperatures can reach about 40°C.',
      'Night temperatures can fall to about −5°C.',
      'Fresh water is scarce, so water-intensive cooling would create another survival problem.'
    ],
    mission2Clues: [
      'During hot daytime conditions, exposed habitat surfaces can gain thermal energy from sunlight by radiation.',
      'At night, much colder outside air can carry thermal energy away from a warmer habitat by convection.',
      'The large inside-outside temperature difference can drive conduction through walls in either direction as conditions change.'
    ],
    mission3Clues: [
      'A useful thermal barrier must slow energy transfer in both directions: inward during hot days and outward during cold nights.',
      'Gaps or weakly covered areas can undermine a barrier when the temperature difference between inside and outside is large.',
      'Fresh water is scarce, so the team should reduce unwanted transfer before relying on any water-intensive cooling idea.'
    ],
    mission4Clues: [
      'The control protocol may need different daytime and nighttime responses because conditions can swing from very hot to very cold.',
      'Shade and reduced radiant gain are useful passive actions before active cooling is considered.',
      'Any active cooling strategy must respect the established rule that scarce fresh water cannot become the main cooling resource.'
    ]
  },
  {
    id: 'wabe', name: 'Wabe', code: 'WA', icon: '❄️', subtitle: 'White Frontier',
    previousTeamThermalBriefing: {
      environment: 'Arctic cold with snow, short summers and long storms.',
      resource: 'Ember Moss provides oil-rich seeds and insulating fibre but grows slowly.',
      ecosystemWarning: 'Damaged vegetation can take years to recover.',
      developmentRestriction: 'Keep slow-recovering natural plant mats protected from repeated disturbance.'
    },
    thermalChallenge: 'Minimize prolonged habitat heat loss and heating demand during very cold conditions and long storms.',
    mission1Clues: [
      'Very cold conditions can continue for long periods.',
      'Storms increase exposure and can make temperature control more difficult.',
      'Natural vegetation recovers slowly, so habitat solutions should minimize disturbance.'
    ],
    mission2Clues: [
      'Very cold moving air during exposed conditions can carry thermal energy away by convection.',
      'Walls, doors and floors can conduct thermal energy from the warmer habitat toward colder surroundings.',
      'Radiation can still add thermal energy to exposed surfaces when sunlight is available, so it is not the only pathway to consider.'
    ],
    mission3Clues: [
      'Long cold periods make slowing conduction through the habitat shell especially important.',
      'Continuous coverage and trapped-air spaces can help reduce transfer, while gaps around doors or joins can weaken the barrier.',
      'Slow-recovering natural plant mats must remain protected, so thermal protection should come from the habitat design rather than repeated ground disturbance.'
    ],
    mission4Clues: [
      'A thermostat-style control should respond quickly when indoor temperature falls below the safe range during prolonged cold.',
      'Passive solar gain can reduce heating demand when sunlight is available, but active heating still needs a clear backup rule.',
      'Habitat control must work without repeated disturbance of the slow-recovering natural plant mats.'
    ]
  },
  {
    id: 'bandersnatch', name: 'Bandersnatch', code: 'BA', icon: '🌾', subtitle: 'Golden Plains',
    previousTeamThermalBriefing: {
      environment: 'Open prairie with cold winters, warm summers and a broad seasonal temperature range.',
      resource: 'Goldstem Grain can produce food and fibre efficiently on the productive prairie.',
      ecosystemWarning: 'Large-scale development can fragment habitat and expose prairie soil to erosion.',
      developmentRestriction: 'Keep native prairie connections and soil protection in the development plan.'
    },
    thermalChallenge: 'Create a habitat strategy that can handle seasonal conditions ranging from about −30°C to +30°C.',
    mission1Clues: [
      'Winter temperatures can fall to about −30°C.',
      'Summer temperatures can rise to about +30°C.',
      'One habitat may therefore face both heating and cooling problems at different times of year.'
    ],
    mission2Clues: [
      'Seasonal temperature changes can reverse the direction of conduction through habitat walls and roofs.',
      'The open prairie allows moving air around a habitat, so convection can matter in both cold and warm seasons.',
      'Sunlight can add energy by radiation, and its importance may change with the season.'
    ],
    mission3Clues: [
      'A useful barrier must slow unwanted transfer during both cold winters and warm summers rather than solving only one season.',
      'Open prairie exposure makes full coverage and control of gaps important when outside air is moving.',
      'The thermal solution must fit within a compact development plan that protects native prairie connections and soil.'
    ],
    mission4Clues: [
      'A single year-round heating-only or cooling-only rule would not fit the established seasonal temperature range.',
      'Seasonal shade, solar gain and ventilation can reduce active energy use before heating or cooling is switched on.',
      'The control system must fit a compact habitat plan that keeps prairie connections and soil protection intact.'
    ]
  },
  {
    id: 'gimble', name: 'Gimble', code: 'GI', icon: '🌲', subtitle: 'Greatwood',
    previousTeamThermalBriefing: {
      environment: 'Temperate forest with very cold winters and mild to warm summers.',
      resource: 'Ironwood offers strong timber and fibre, but replacement takes many years.',
      ecosystemWarning: 'Many organisms depend on intact forest structure and connected habitat.',
      developmentRestriction: 'Avoid extensive forest clearing or fragmentation for human infrastructure.'
    },
    thermalChallenge: 'Retain heat through winters near −40°C while still handling summer conditions that can reach about +24°C.',
    mission1Clues: [
      'Winter temperatures can fall to about −40°C.',
      'Summer temperatures can reach about +24°C.',
      'Clearing large forest areas to change solar exposure would conflict with earlier ecological evidence.'
    ],
    mission2Clues: [
      'Very cold winter conditions can create strong conduction from the warmer habitat through its materials toward the outside.',
      'Moving outdoor air can carry thermal energy away by convection when the habitat is warmer than its surroundings.',
      'Solar radiation can add energy to exposed surfaces, but the team must work with the existing forest rather than clear it for exposure.'
    ],
    mission3Clues: [
      'Severe winter conditions make a strong thermal barrier valuable, especially across walls, roof and floor.',
      'Summer conditions are milder, so the design should reduce winter heat loss without assuming maximum heat retention is always helpful.',
      'The team cannot solve the thermal problem by clearing large forest areas; the barrier strategy must work within the existing forest setting.'
    ],
    mission4Clues: [
      'Very cold winters make reliable heating control important, while warmer summer conditions mean the system should not heat automatically all year.',
      'Passive solar gain and ventilation can be useful when conditions allow, but neither justifies clearing large areas of forest.',
      'Any control protocol must protect connected forest habitat and work within the existing site.'
    ]
  },
  {
    id: 'mimsy', name: 'Mimsy', code: 'MI', icon: '🪷', subtitle: 'Endless Wetlands',
    previousTeamThermalBriefing: {
      environment: 'Warm, humid wetland with shallow water and saturated ground.',
      resource: 'Floatroot can provide edible seeds and flexible fibre in waterlogged conditions.',
      ecosystemWarning: 'Wetland vegetation supports native organisms and natural stormwater storage.',
      developmentRestriction: 'Do not drain or heavily alter the wetland to make habitat construction easier.'
    },
    thermalChallenge: 'Limit unwanted heat gain and maintain safe conditions without draining or significantly changing the wetland.',
    mission1Clues: [
      'The wetland environment is warm and humid.',
      'Saturated ground and shallow water limit where ordinary dry-land structures can be placed.',
      'Cooling solutions cannot depend on draining or heavily modifying the wetland.'
    ],
    mission2Clues: [
      'Warm, humid air moving through the wetland environment can transfer thermal energy by convection.',
      'Sunlight can transfer thermal energy to exposed habitat surfaces by radiation.',
      'Any habitat materials touching wet or saturated surroundings can exchange thermal energy by conduction; the solution cannot depend on draining the wetland.'
    ],
    mission3Clues: [
      'A barrier can slow unwanted heat transfer through the habitat shell, but the design still needs to work in a warm, humid setting.',
      'Materials or layouts that depend on draining the ground would conflict with the established wetland restriction.',
      'A compact barrier strategy should protect the wetland while reducing the amount of active cooling the habitat may eventually need.'
    ],
    mission4Clues: [
      'Shade can reduce radiant heat gain before active cooling is used.',
      'Ventilation may help when conditions allow, but the habitat still needs measured temperature feedback instead of a permanently open or closed rule.',
      'Cooling and control systems cannot depend on draining or heavily altering the wetland.'
    ]
  }
];

export const phase3ThermalSiteMap = Object.fromEntries(phase3ThermalSites.map((site) => [site.id, site]));

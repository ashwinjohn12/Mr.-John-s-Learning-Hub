export interface Phase2PlantSite {
  id: string;
  name: string;
  code: string;
  icon: string;
  subtitle: string;
  baseCamp: string;
  previousTeamBriefing: {
    environment: string;
    ecosystemConnection: string;
    warning: string;
  };
  plant: {
    name: string;
    commonNameNote?: string;
    resourceUse: string;
    jcecInterest: string;
    structureClues: Array<{
      structure: 'Root' | 'Stem' | 'Leaves' | 'Flower / seed structure';
      clue: string;
      function: string;
    }>;
    adaptation: string;
    productionProblem: string;
    sustainabilityRisk: string;
  };
}

export const phase2PlantSites: Phase2PlantSite[] = [
  {
    id: 'gyre', name: 'Gyre', code: 'GY', icon: '⛰️', subtitle: 'Alpine Frontier', baseCamp: 'Frumious Basin',
    previousTeamBriefing: {
      environment: 'Cold highlands with thin soils, steep slopes and limited flat growing areas.',
      ecosystemConnection: 'Valley vegetation supports the Ridgeback Grazer and other parts of the alpine food web.',
      warning: 'Disturbed slopes can erode and damaged alpine vegetation may recover slowly.'
    },
    plant: {
      name: 'Skyroot',
      resourceUse: 'Starchy food from enlarged roots and coarse fibre from tough stems.',
      jcecInterest: 'It survives where the growing season is short and useful flat land is scarce.',
      structureClues: [
        { structure: 'Root', clue: 'A thick storage root grows deep into narrow pockets of soil.', function: 'Stores food and water while anchoring the plant on steep ground.' },
        { structure: 'Stem', clue: 'Short flexible stems stay close to the ground.', function: 'Reduces damage from strong alpine winds.' },
        { structure: 'Leaves', clue: 'Small waxy, slightly hairy leaves cover the plant.', function: 'Helps reduce water loss and protect leaf surfaces from cold wind.' },
        { structure: 'Flower / seed structure', clue: 'Small dark flowers open quickly during the warmest part of the short summer.', function: 'Allows reproduction during a brief growing season.' }
      ],
      adaptation: 'Low growth, storage roots and protected leaves help Skyroot survive cold, windy mountain conditions.',
      productionProblem: 'Cold temperatures, thin soils and very little flat land limit cultivation.',
      sustainabilityRisk: 'Large-scale digging or cultivation could loosen thin mountain soils and increase erosion.'
    }
  },
  {
    id: 'brillig', name: 'Brillig', code: 'BR', icon: '🌿', subtitle: 'Emerald Basin', baseCamp: 'Tulgey Station',
    previousTeamBriefing: {
      environment: 'Warm, humid and very wet, with dense vegetation and heavy rainfall.',
      ecosystemConnection: 'The forest canopy supports many organisms and helps hold nutrients in the living system.',
      warning: 'Removing vegetation exposes soil and can quickly increase erosion and nutrient loss.'
    },
    plant: {
      name: 'Rainspout Tree',
      resourceUse: 'Nutritious fruit and seeds plus strong flexible bark fibre.',
      jcecInterest: 'One mature tree can provide several useful materials without needing open farmland.',
      structureClues: [
        { structure: 'Root', clue: 'Wide surface roots spread around the trunk and rise above wet ground.', function: 'Supports the tall tree in shallow, rain-soaked soil.' },
        { structure: 'Stem', clue: 'A tall woody trunk lifts the leaves toward canopy light.', function: 'Supports the crown and transports water and materials through the tree.' },
        { structure: 'Leaves', clue: 'Broad leaves end in narrow drip tips.', function: 'Captures light while allowing heavy rain to drain from the leaf surface.' },
        { structure: 'Flower / seed structure', clue: 'Clusters of flowers and fruit grow high in the canopy.', function: 'Produces seeds while attracting local pollinators and fruit-eating organisms.' }
      ],
      adaptation: 'Broad drip-tip leaves and spreading support roots fit Brillig’s wet forest environment.',
      productionProblem: 'Useful nutrients are tied up in living vegetation rather than deep fertile soil.',
      sustainabilityRisk: 'Clearing forest for plantations could damage the canopy, increase erosion and remove habitat.'
    }
  },
  {
    id: 'manxome', name: 'Manxome', code: 'MA', icon: '🏝️', subtitle: 'Vorpal Archipelago', baseCamp: 'Calloo Island',
    previousTeamBriefing: {
      environment: 'Mild islands with ocean influence and a severe annual storm season.',
      ecosystemConnection: 'Land and shore food webs are closely connected, especially around sheltered bays.',
      warning: 'Storm disturbance can reshape habitats, and introduced organisms can move easily between islands.'
    },
    plant: {
      name: 'Storm Palm',
      resourceUse: 'Edible fruit, oil-rich seeds and long fibres for cordage or woven material.',
      jcecInterest: 'It provides several resources while surviving strong coastal winds.',
      structureClues: [
        { structure: 'Root', clue: 'A dense mat of fibrous roots spreads through shallow coastal soil.', function: 'Anchors the plant and helps hold soil during storms.' },
        { structure: 'Stem', clue: 'The trunk bends noticeably without snapping.', function: 'Allows the plant to flex during strong winds.' },
        { structure: 'Leaves', clue: 'Long narrow leaf sections bend and stream with the wind.', function: 'Reduces the force of storm winds on the plant.' },
        { structure: 'Flower / seed structure', clue: 'Flowers develop into clusters of floating, salt-tolerant fruits.', function: 'Produces seeds that can disperse between islands.' }
      ],
      adaptation: 'Flexible stems, fibrous roots and wind-tolerant leaves help Storm Palm survive coastal storms.',
      productionProblem: 'Storms and salt exposure can damage young plants and growing areas.',
      sustainabilityRisk: 'Large uniform groves could be vulnerable to one storm or pest and replace diverse island habitat.'
    }
  },
  {
    id: 'slithy-toves', name: 'Slithy Toves', code: 'ST', icon: '🏜️', subtitle: 'Sunscar Desert', baseCamp: 'Borogove Station',
    previousTeamBriefing: {
      environment: 'Extremely dry desert with scarce fresh water and large day-night temperature changes.',
      ecosystemConnection: 'Most organisms depend on a few productive areas near limited water sources.',
      warning: 'Human water use or disturbance could have large effects because productive habitat is scarce.'
    },
    plant: {
      name: 'Reservoir Thorn',
      resourceUse: 'Oil-rich seeds, edible inner tissue and tough fibre.',
      jcecInterest: 'It survives with very little water, making it a possible desert resource.',
      structureClues: [
        { structure: 'Root', clue: 'A very deep main root reaches moisture far below the surface.', function: 'Accesses water that is unavailable near the dry surface.' },
        { structure: 'Stem', clue: 'A thick green stem stores water after rare rainfall.', function: 'Stores water and can also capture light when leaves are reduced.' },
        { structure: 'Leaves', clue: 'Tiny leaves appear briefly and many branches end in sharp thorns.', function: 'Small leaves reduce water loss while thorns protect stored water-rich tissue.' },
        { structure: 'Flower / seed structure', clue: 'Flowers open quickly after rainfall and produce hard-coated seeds.', function: 'Allows reproduction during short wet periods and helps seeds survive dry times.' }
      ],
      adaptation: 'Deep roots, water storage and reduced leaves help Reservoir Thorn survive extreme drought.',
      productionProblem: 'Irrigation would compete for scarce fresh water and may increase salt buildup in soil.',
      sustainabilityRisk: 'Expanding production could use water needed by native ecosystems and worsen salinization.'
    }
  },
  {
    id: 'wabe', name: 'Wabe', code: 'WA', icon: '❄️', subtitle: 'White Frontier', baseCamp: 'Beamish Station',
    previousTeamBriefing: {
      environment: 'Very cold with snow, a short summer and a brief growing season.',
      ecosystemConnection: 'Seasonal vegetation supports the Snow Burrower and other organisms during the short summer.',
      warning: 'Damaged vegetation grows back slowly, so repeated disturbance can last for years.'
    },
    plant: {
      name: 'Ember Moss',
      commonNameNote: 'Despite its common name, Ember Moss is a flowering seed plant—not a true moss.',
      resourceUse: 'Oil-rich seeds and soft insulating fibre from dense mats.',
      jcecInterest: 'It completes growth and reproduction during Wabe’s very short summer.',
      structureClues: [
        { structure: 'Root', clue: 'Shallow roots spread through the thin thawed surface layer.', function: 'Collects water and anchors the plant without needing deep unfrozen soil.' },
        { structure: 'Stem', clue: 'Short stems form dense mats close to the ground.', function: 'Keeps the plant in a slightly warmer, less windy layer of air.' },
        { structure: 'Leaves', clue: 'Small dark leaves absorb sunlight and cluster tightly together.', function: 'Helps capture light while reducing exposure to cold wind.' },
        { structure: 'Flower / seed structure', clue: 'Tiny flowers appear and produce seeds rapidly during midsummer.', function: 'Completes reproduction during the short growing season.' }
      ],
      adaptation: 'Low mat growth, shallow roots and rapid flowering fit Wabe’s cold, short growing season.',
      productionProblem: 'Natural growth is slow and large yields may require protected or heated growing spaces.',
      sustainabilityRisk: 'Harvesting natural mats faster than they regrow could damage slowly recovering habitat.'
    }
  },
  {
    id: 'bandersnatch', name: 'Bandersnatch', code: 'BA', icon: '🌾', subtitle: 'Golden Plains', baseCamp: 'Jubjub Station',
    previousTeamBriefing: {
      environment: 'Productive prairie with fresh water, cold winters, warm summers and a long growing season.',
      ecosystemConnection: 'Grassland roots, producers and grazers form an important food-web and soil system.',
      warning: 'Large-scale development can fragment habitat and exposed prairie soil can erode.'
    },
    plant: {
      name: 'Goldstem Grain',
      resourceUse: 'High-energy grain plus straw-like fibre.',
      jcecInterest: 'It grows quickly across open prairie and could produce large amounts of food.',
      structureClues: [
        { structure: 'Root', clue: 'A dense fibrous root system fills the upper soil.', function: 'Absorbs water quickly and helps hold prairie soil in place.' },
        { structure: 'Stem', clue: 'Hollow flexible stems bend during strong winds.', function: 'Supports seed heads while reducing breakage.' },
        { structure: 'Leaves', clue: 'Long narrow leaves grow from several levels of the stem.', function: 'Captures light while limiting water loss in windy conditions.' },
        { structure: 'Flower / seed structure', clue: 'Many small flowers form a compact grain head.', function: 'Produces many seeds in one growing season.' }
      ],
      adaptation: 'Fibrous roots, narrow leaves and rapid seed production fit the open seasonal prairie.',
      productionProblem: 'Conditions are favourable enough that humans may be tempted to cultivate very large areas.',
      sustainabilityRisk: 'Monoculture and habitat conversion could reduce biodiversity and increase soil erosion.'
    }
  },
  {
    id: 'gimble', name: 'Gimble', code: 'GI', icon: '🌲', subtitle: 'Greatwood', baseCamp: 'Galumph Station',
    previousTeamBriefing: {
      environment: 'Cool temperate forest with abundant freshwater, cold winters and mild summers.',
      ecosystemConnection: 'The Barkclimber and many other organisms depend on intact forest structure.',
      warning: 'Forest clearing fragments habitat and can increase erosion near waterways.'
    },
    plant: {
      name: 'Ironwood',
      resourceUse: 'Very strong timber and durable plant fibre.',
      jcecInterest: 'Its wood could reduce the amount of construction material transported from Earth.',
      structureClues: [
        { structure: 'Root', clue: 'Large spreading roots interlock with forest soil.', function: 'Anchors the tree and helps stabilize soil around the trunk.' },
        { structure: 'Stem', clue: 'A thick woody trunk grows slowly and becomes extremely strong.', function: 'Supports the canopy and stores a large amount of structural material.' },
        { structure: 'Leaves', clue: 'Broad seasonal leaves form a layered canopy.', function: 'Captures light during the growing season.' },
        { structure: 'Flower / seed structure', clue: 'Small flowers produce heavy winged seeds after many years of growth.', function: 'Allows reproduction, but new generations establish slowly.' }
      ],
      adaptation: 'Strong wood, broad leaves and extensive roots fit a long-lived forest tree.',
      productionProblem: 'Ironwood grows slowly, so harvested trees take many years to replace.',
      sustainabilityRisk: 'Large-scale logging could fragment forest habitat and increase erosion.'
    }
  },
  {
    id: 'mimsy', name: 'Mimsy', code: 'MI', icon: '🪷', subtitle: 'Endless Wetlands', baseCamp: 'Mome Station',
    previousTeamBriefing: {
      environment: 'Warm, saturated wetland with shallow water, muddy ground and nutrient-poor soils.',
      ecosystemConnection: 'The Reedcrawler and many other organisms depend on intact wetland vegetation.',
      warning: 'Draining wetlands destroys habitat and reduces natural stormwater storage.'
    },
    plant: {
      name: 'Floatroot',
      resourceUse: 'Edible seeds and flexible fibres for woven or lightweight materials.',
      jcecInterest: 'It grows where ordinary Earth crops would struggle in waterlogged ground.',
      structureClues: [
        { structure: 'Root', clue: 'Fine roots hang in saturated mud and shallow water.', function: 'Absorbs materials while tolerating very wet soil.' },
        { structure: 'Stem', clue: 'Hollow stems contain large air spaces.', function: 'Moves air through the plant and helps support tissues in waterlogged conditions.' },
        { structure: 'Leaves', clue: 'Broad waxy leaves float or rise just above the water.', function: 'Keeps leaf surfaces in the light and air.' },
        { structure: 'Flower / seed structure', clue: 'Flowers rise above the water and later release buoyant seeds.', function: 'Allows pollination and helps seeds spread through wetlands.' }
      ],
      adaptation: 'Air-filled stems, wet-tolerant roots and floating leaves help Floatroot survive saturated wetlands.',
      productionProblem: 'Conventional fields would require drainage, while contained or raised systems need careful design.',
      sustainabilityRisk: 'Draining wetlands for agriculture would damage habitat and increase flood risk.'
    }
  }
];

export const phase2PlantSiteMap = Object.fromEntries(phase2PlantSites.map((site) => [site.id, site]));

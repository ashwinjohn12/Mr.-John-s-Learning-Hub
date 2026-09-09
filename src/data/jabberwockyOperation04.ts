export type EcosystemRole = 'producer' | 'consumer' | 'decomposer';
export type SymbiosisType = 'mutualism' | 'commensalism' | 'parasitism';

export interface EcosystemNode {
  id: string;
  name: string;
  role: EcosystemRole;
  evidence: string;
}

export interface FeedingLink {
  food: string;
  eater: string;
  evidence: string;
}

export interface Operation04Network {
  id: string;
  name: string;
  code: string;
  baseCamp: string;
  focalSpecies: string;
  environment: string;
  nodes: EcosystemNode[];
  feedingLinks: FeedingLink[];
  symbiosis: {
    partners: string;
    evidence: string;
    type: SymbiosisType;
  };
  competition: {
    organisms: string;
    sharedResource: string;
    evidence: string;
  };
  changeChallenge: string;
  investigationQuestion: string;
}

export const operation04Networks: Operation04Network[] = [
  {
    id: 'gyre', name: 'Gyre', code: 'GY', baseCamp: 'Frumious Basin', focalSpecies: 'Ridgeback Grazer', environment: 'Alpine valley ecosystem',
    nodes: [
      { id: 'bluecrest-grass', name: 'Bluecrest Grass', role: 'producer', evidence: 'Low green blades capture sunlight across moist valley flats.' },
      { id: 'basin-bloom', name: 'Basin Bloom', role: 'producer', evidence: 'Flowering plants grow on sheltered slopes and produce nectar-rich blossoms.' },
      { id: 'ridge-midge', name: 'Ridge Midge', role: 'consumer', evidence: 'Small flying organisms drink nectar from Basin Blooms and carry pollen between flowers.' },
      { id: 'ridgeback-grazer', name: 'Ridgeback Grazer', role: 'consumer', evidence: 'Operation 03 feeding traces showed cropped low plants beside valley water.' },
      { id: 'valley-hopper', name: 'Valley Hopper', role: 'consumer', evidence: 'Small jumping organisms chew Bluecrest Grass and young Basin Bloom shoots.' },
      { id: 'crag-hunter', name: 'Crag Hunter', role: 'consumer', evidence: 'Camera traps show this predator catching Valley Hoppers and occasionally young Ridgebacks.' },
      { id: 'stonecap-fungus', name: 'Stonecap Fungus', role: 'decomposer', evidence: 'Fungal mats spread through dead stems, droppings, and animal remains.' }
    ],
    feedingLinks: [
      { food: 'Bluecrest Grass', eater: 'Ridgeback Grazer', evidence: 'Ridgebacks crop low grass.' },
      { food: 'Bluecrest Grass', eater: 'Valley Hopper', evidence: 'Valley Hoppers chew grass blades.' },
      { food: 'Basin Bloom', eater: 'Ridge Midge', evidence: 'Ridge Midges drink nectar.' },
      { food: 'Basin Bloom', eater: 'Valley Hopper', evidence: 'Valley Hoppers eat young shoots.' },
      { food: 'Valley Hopper', eater: 'Crag Hunter', evidence: 'Crag Hunters capture Valley Hoppers.' },
      { food: 'Ridgeback Grazer', eater: 'Crag Hunter', evidence: 'Young Ridgebacks appear in Crag Hunter feeding records.' }
    ],
    symbiosis: { partners: 'Basin Bloom + Ridge Midge', evidence: 'The midge receives nectar while the flower receives pollen transfer that helps it reproduce.', type: 'mutualism' },
    competition: { organisms: 'Ridgeback Grazer + Valley Hopper', sharedResource: 'Bluecrest Grass', evidence: 'Both feed heavily on the same grass patches during the short alpine growing season.' },
    changeChallenge: 'A dry spring causes Bluecrest Grass to decline sharply for three weeks. Predict two direct effects and one possible indirect effect elsewhere in the web.',
    investigationQuestion: 'How is the Ridgeback Grazer connected to organisms it eats, organisms that may eat it, competitors, and decomposers in Gyre?'
  },
  {
    id: 'brillig', name: 'Brillig', code: 'BR', baseCamp: 'Tulgey Station', focalSpecies: 'Canopy Glider', environment: 'Warm rainforest ecosystem',
    nodes: [
      { id: 'glowfruit-vine', name: 'Glowfruit Vine', role: 'producer', evidence: 'A climbing vine uses sunlight in canopy gaps and produces soft fruit.' },
      { id: 'river-fern', name: 'River Fern', role: 'producer', evidence: 'Large fronds grow along humid riverbanks and shaded forest openings.' },
      { id: 'canopy-glider', name: 'Canopy Glider', role: 'consumer', evidence: 'Operation 03 evidence showed fruit feeding and seed remains beneath canopy routes.' },
      { id: 'fruit-nibbler', name: 'Fruit Nibbler', role: 'consumer', evidence: 'Small climbing animals feed on Glowfruit fruit and soft seeds.' },
      { id: 'leaf-hopper', name: 'Leaf Hopper', role: 'consumer', evidence: 'These insects remove pieces from River Ferns and young vine leaves.' },
      { id: 'vine-stalker', name: 'Vine Stalker', role: 'consumer', evidence: 'A canopy predator hunts Canopy Gliders, Fruit Nibblers, and large Leaf Hoppers.' },
      { id: 'warmrot-fungi', name: 'Warmrot Fungi', role: 'decomposer', evidence: 'Fungi rapidly break down fallen leaves, fruit, waste, and dead organisms on the forest floor.' }
    ],
    feedingLinks: [
      { food: 'Glowfruit Vine', eater: 'Canopy Glider', evidence: 'Canopy Gliders feed on soft fruit.' },
      { food: 'Glowfruit Vine', eater: 'Fruit Nibbler', evidence: 'Fruit Nibblers eat fruit and seeds.' },
      { food: 'Glowfruit Vine', eater: 'Leaf Hopper', evidence: 'Leaf Hoppers feed on young leaves.' },
      { food: 'River Fern', eater: 'Leaf Hopper', evidence: 'Leaf Hoppers remove fern tissue.' },
      { food: 'Canopy Glider', eater: 'Vine Stalker', evidence: 'Vine Stalkers hunt gliders.' },
      { food: 'Fruit Nibbler', eater: 'Vine Stalker', evidence: 'Vine Stalkers hunt Fruit Nibblers.' },
      { food: 'Leaf Hopper', eater: 'Vine Stalker', evidence: 'Large Leaf Hoppers are also prey.' }
    ],
    symbiosis: { partners: 'Canopy Glider + Hollowstem Tree', evidence: 'Canopy Gliders shelter in dry cavities of mature Hollowstem Trees. The glider gains shelter; current evidence shows no clear benefit or harm to the tree.', type: 'commensalism' },
    competition: { organisms: 'Canopy Glider + Fruit Nibbler', sharedResource: 'Glowfruit fruit', evidence: 'Both species concentrate at the same fruiting vines when ripe fruit is limited.' },
    changeChallenge: 'A storm removes many fruiting Glowfruit branches. Predict which consumers are affected first and how the Vine Stalker might be affected later.',
    investigationQuestion: 'How do food, shelter, competition, predation, and decomposition connect the Canopy Glider to Brillig’s rainforest network?'
  },
  {
    id: 'manxome', name: 'Manxome', code: 'MA', baseCamp: 'Calloo Island', focalSpecies: 'Tide Skipper', environment: 'Coastal island ecosystem',
    nodes: [
      { id: 'tidefilm-algae', name: 'Tidefilm Algae', role: 'producer', evidence: 'Green films capture sunlight on wet rocks near the waterline.' },
      { id: 'shore-grass', name: 'Shore Grass', role: 'producer', evidence: 'Salt-tolerant grass grows above the high-water line.' },
      { id: 'tide-skipper', name: 'Tide Skipper', role: 'consumer', evidence: 'Operation 03 scraping marks linked Tide Skippers to algae-covered stones.' },
      { id: 'shellgrazer', name: 'Shellgrazer', role: 'consumer', evidence: 'Low shell-covered organisms scrape Tidefilm Algae from sheltered rocks.' },
      { id: 'palm-hopper', name: 'Shore Hopper', role: 'consumer', evidence: 'Small jumping animals feed on Shore Grass seeds and young shoots.' },
      { id: 'cove-hunter', name: 'Cove Hunter', role: 'consumer', evidence: 'This shoreline predator captures Tide Skippers, Shellgrazers, and Shore Hoppers in protected coves.' },
      { id: 'shore-mold', name: 'Shore Mold', role: 'decomposer', evidence: 'Microbes and fungi break down washed-up plant matter, waste, and remains above the tide line.' }
    ],
    feedingLinks: [
      { food: 'Tidefilm Algae', eater: 'Tide Skipper', evidence: 'Tide Skippers scrape algae from rock.' },
      { food: 'Tidefilm Algae', eater: 'Shellgrazer', evidence: 'Shellgrazers also scrape algae.' },
      { food: 'Shore Grass', eater: 'Shore Hopper', evidence: 'Shore Hoppers eat seeds and shoots.' },
      { food: 'Tide Skipper', eater: 'Cove Hunter', evidence: 'Cove Hunters capture Tide Skippers.' },
      { food: 'Shellgrazer', eater: 'Cove Hunter', evidence: 'Shellgrazers are prey in protected coves.' },
      { food: 'Shore Hopper', eater: 'Cove Hunter', evidence: 'Shore Hoppers are also prey.' }
    ],
    symbiosis: { partners: 'Dune Bloom + Storm Moth', evidence: 'Storm Moths receive nectar from coastal flowers and transfer pollen between Dune Blooms.', type: 'mutualism' },
    competition: { organisms: 'Tide Skipper + Shellgrazer', sharedResource: 'Tidefilm Algae', evidence: 'Both feed from the same sheltered algae-covered rocks at low tide.' },
    changeChallenge: 'Several days of unusually high waves scrape Tidefilm Algae from exposed rocks. Predict how that could affect Tide Skippers, Shellgrazers, and Cove Hunters.',
    investigationQuestion: 'How does the Tide Skipper connect the shoreline producer community to competitors and predators in Manxome?'
  },
  {
    id: 'slithy-toves', name: 'Slithy Toves', code: 'ST', baseCamp: 'Borogove Station', focalSpecies: 'Dune Runner', environment: 'Desert ecosystem',
    nodes: [
      { id: 'saltseed-grass', name: 'Saltseed Grass', role: 'producer', evidence: 'Sparse grass uses sunlight and produces dry seeds after rare rainfall.' },
      { id: 'night-bloom', name: 'Night Bloom', role: 'producer', evidence: 'A low plant opens pale flowers during cooler evening hours.' },
      { id: 'dune-runner', name: 'Dune Runner', role: 'consumer', evidence: 'Operation 03 found seed cases and clipped plant tips near Dune Runner burrows.' },
      { id: 'sand-hopper', name: 'Sand Hopper', role: 'consumer', evidence: 'Small desert animals collect Saltseed seeds and tender Night Bloom tissue.' },
      { id: 'thorn-moth', name: 'Thorn Moth', role: 'consumer', evidence: 'Night-active moths drink nectar from Night Blooms.' },
      { id: 'night-stalker', name: 'Night Stalker', role: 'consumer', evidence: 'A nocturnal predator hunts Dune Runners, Sand Hoppers, and large Thorn Moths.' },
      { id: 'dustcap-decomposer', name: 'Dustcap Decomposer', role: 'decomposer', evidence: 'Fungi and bacteria become active after moisture and break down buried waste and remains.' }
    ],
    feedingLinks: [
      { food: 'Saltseed Grass', eater: 'Dune Runner', evidence: 'Dune Runners eat seeds and plant tips.' },
      { food: 'Saltseed Grass', eater: 'Sand Hopper', evidence: 'Sand Hoppers collect Saltseed seeds.' },
      { food: 'Night Bloom', eater: 'Sand Hopper', evidence: 'Sand Hoppers eat tender plant tissue.' },
      { food: 'Night Bloom', eater: 'Thorn Moth', evidence: 'Thorn Moths drink nectar.' },
      { food: 'Dune Runner', eater: 'Night Stalker', evidence: 'Night Stalkers hunt Dune Runners.' },
      { food: 'Sand Hopper', eater: 'Night Stalker', evidence: 'Sand Hoppers are prey.' },
      { food: 'Thorn Moth', eater: 'Night Stalker', evidence: 'Large Thorn Moths can also be eaten.' }
    ],
    symbiosis: { partners: 'Night Bloom + Thorn Moth', evidence: 'The moth receives nectar while the Night Bloom receives pollen transfer during the cool night.', type: 'mutualism' },
    competition: { organisms: 'Dune Runner + Sand Hopper', sharedResource: 'Saltseed seeds', evidence: 'Both species collect the same limited seed crop after rainfall.' },
    changeChallenge: 'A season produces very few Saltseed seeds. Predict what could happen to Dune Runners, Sand Hoppers, and the Night Stalker.',
    investigationQuestion: 'How can a desert food web remain connected even when producers and water-dependent resources are scarce?'
  },
  {
    id: 'wabe', name: 'Wabe', code: 'WA', baseCamp: 'Beamish Station', focalSpecies: 'Snow Burrower', environment: 'Arctic ecosystem',
    nodes: [
      { id: 'frost-lichen', name: 'Frost Lichen', role: 'producer', evidence: 'A slow-growing photosynthetic mat covers exposed dark rock during the short bright season.' },
      { id: 'tundra-mat', name: 'Tundra Mat', role: 'producer', evidence: 'Low plant growth appears in sheltered areas during the brief summer.' },
      { id: 'snow-burrower', name: 'Snow Burrower', role: 'consumer', evidence: 'Operation 03 found plant-like material stored inside Snow Burrower tunnels.' },
      { id: 'tundra-nibbler', name: 'Tundra Nibbler', role: 'consumer', evidence: 'Small surface animals graze Frost Lichen and Tundra Mat during calm weather.' },
      { id: 'ice-mite', name: 'Ice Mite', role: 'consumer', evidence: 'Tiny animals feed on plant scraps and organic material inside old snow tunnels.' },
      { id: 'pale-hunter', name: 'Pale Hunter', role: 'consumer', evidence: 'This predator waits near tunnel exits and hunts Snow Burrowers and Tundra Nibblers.' },
      { id: 'coldrot-fungi', name: 'Coldrot Fungi', role: 'decomposer', evidence: 'Slow-growing fungi break down dead material during warmer periods beneath snow.' }
    ],
    feedingLinks: [
      { food: 'Frost Lichen', eater: 'Snow Burrower', evidence: 'Stored food includes lichen-like fragments.' },
      { food: 'Tundra Mat', eater: 'Snow Burrower', evidence: 'Snow Burrowers collect low plant material.' },
      { food: 'Frost Lichen', eater: 'Tundra Nibbler', evidence: 'Tundra Nibblers graze lichen.' },
      { food: 'Tundra Mat', eater: 'Tundra Nibbler', evidence: 'Tundra Nibblers also graze low plants.' },
      { food: 'Snow Burrower', eater: 'Pale Hunter', evidence: 'Pale Hunters wait near burrow exits.' },
      { food: 'Tundra Nibbler', eater: 'Pale Hunter', evidence: 'Tundra Nibblers are also prey.' }
    ],
    symbiosis: { partners: 'Snow Burrower + Ice Mite', evidence: 'Ice Mites use abandoned Snow Burrower tunnel chambers and feed on leftover scraps. The mite benefits; current evidence shows no clear effect on the Snow Burrower.', type: 'commensalism' },
    competition: { organisms: 'Snow Burrower + Tundra Nibbler', sharedResource: 'Frost Lichen and Tundra Mat', evidence: 'Both rely on the same slow-growing plant resources during the short productive season.' },
    changeChallenge: 'A late snowmelt shortens the growing season for Tundra Mat. Predict direct and indirect effects through this web.',
    investigationQuestion: 'How do slow-growing producers, stored food, competition, and predation connect the Snow Burrower to Wabe’s Arctic web?'
  },
  {
    id: 'bandersnatch', name: 'Bandersnatch', code: 'BA', baseCamp: 'Jubjub Station', focalSpecies: 'Plains Strider', environment: 'Prairie ecosystem',
    nodes: [
      { id: 'goldstem-grass', name: 'Goldstem Grass', role: 'producer', evidence: 'Deep-rooted grass captures sunlight across most of the open prairie.' },
      { id: 'prairie-starflower', name: 'Prairie Starflower', role: 'producer', evidence: 'Flowering plants grow among the grass and produce seeds later in the season.' },
      { id: 'plains-strider', name: 'Plains Strider', role: 'consumer', evidence: 'Operation 03 showed clipped grass tops along long movement routes.' },
      { id: 'prairie-grazer', name: 'Prairie Grazer', role: 'consumer', evidence: 'A smaller herd animal also feeds heavily on Goldstem Grass.' },
      { id: 'seed-burrower', name: 'Seed Burrower', role: 'consumer', evidence: 'Small burrowing animals collect Starflower seeds and grass seeds.' },
      { id: 'sky-hunter', name: 'Sky Hunter', role: 'consumer', evidence: 'A large aerial predator hunts Seed Burrowers and young prairie grazers.' },
      { id: 'soil-decomposer', name: 'Prairie Soil Decomposers', role: 'decomposer', evidence: 'Fungi, bacteria, and small detritivores break down dead roots, droppings, and remains.' }
    ],
    feedingLinks: [
      { food: 'Goldstem Grass', eater: 'Plains Strider', evidence: 'Plains Striders graze grass tops.' },
      { food: 'Goldstem Grass', eater: 'Prairie Grazer', evidence: 'Prairie Grazers also feed on grass.' },
      { food: 'Goldstem Grass', eater: 'Seed Burrower', evidence: 'Seed Burrowers collect grass seeds.' },
      { food: 'Prairie Starflower', eater: 'Seed Burrower', evidence: 'Seed Burrowers collect Starflower seeds.' },
      { food: 'Seed Burrower', eater: 'Sky Hunter', evidence: 'Sky Hunters capture Seed Burrowers.' },
      { food: 'Prairie Grazer', eater: 'Sky Hunter', evidence: 'Young Prairie Grazers can be prey.' }
    ],
    symbiosis: { partners: 'Prairie Starflower + Longtongue Pollinator', evidence: 'The pollinator receives nectar and the Starflower receives pollen transfer between widely separated plants.', type: 'mutualism' },
    competition: { organisms: 'Plains Strider + Prairie Grazer', sharedResource: 'Goldstem Grass', evidence: 'Both herds feed on the same grassland, especially near water during dry periods.' },
    changeChallenge: 'Goldstem Grass is reduced in one large area after an unusually dry month. Predict how movement, competition, and predator-prey relationships could change.',
    investigationQuestion: 'Why can a prairie that looks simple from far away contain a highly connected network of competition, feeding, and decomposition?'
  },
  {
    id: 'gimble', name: 'Gimble', code: 'GI', baseCamp: 'Galumph Station', focalSpecies: 'Barkclimber', environment: 'Temperate forest ecosystem',
    nodes: [
      { id: 'bark-moss', name: 'Bark Moss', role: 'producer', evidence: 'Photosynthetic mats grow on moist trunks and fallen wood.' },
      { id: 'seedberry-shrub', name: 'Seedberry Shrub', role: 'producer', evidence: 'Understory shrubs use forest light and produce berries and seeds.' },
      { id: 'barkclimber', name: 'Barkclimber', role: 'consumer', evidence: 'Operation 03 linked Barkclimbers to small organisms beneath loose bark.' },
      { id: 'trunk-forager', name: 'Trunk Forager', role: 'consumer', evidence: 'Another climbing species searches the same trees for Bark Grubs.' },
      { id: 'bark-grub', name: 'Bark Grub', role: 'consumer', evidence: 'Larvae feed on soft plant tissue beneath loose bark.' },
      { id: 'forest-prowler', name: 'Forest Prowler', role: 'consumer', evidence: 'A small predator hunts Barkclimbers and Trunk Foragers near fallen logs.' },
      { id: 'rotcap-fungi', name: 'Rotcap Fungi', role: 'decomposer', evidence: 'Fungi break down fallen wood, leaf litter, waste, and dead organisms.' }
    ],
    feedingLinks: [
      { food: 'Seedberry Shrub', eater: 'Bark Grub', evidence: 'Some Bark Grubs feed in soft shrub stems.' },
      { food: 'Bark Grub', eater: 'Barkclimber', evidence: 'Barkclimbers remove Bark Grubs beneath bark.' },
      { food: 'Bark Grub', eater: 'Trunk Forager', evidence: 'Trunk Foragers hunt the same grubs.' },
      { food: 'Barkclimber', eater: 'Forest Prowler', evidence: 'Forest Prowlers hunt Barkclimbers.' },
      { food: 'Trunk Forager', eater: 'Forest Prowler', evidence: 'Trunk Foragers are also prey.' },
      { food: 'Bark Moss', eater: 'Bark Grub', evidence: 'Some larvae graze moist surface growth before entering bark cracks.' }
    ],
    symbiosis: { partners: 'Seedberry Shrub + Root Thread Fungus', evidence: 'The fungus receives sugars from the shrub while its threads help the shrub obtain water and mineral nutrients from a larger soil area.', type: 'mutualism' },
    competition: { organisms: 'Barkclimber + Trunk Forager', sharedResource: 'Bark Grubs', evidence: 'Both hunt the same prey on mature and fallen trees.' },
    changeChallenge: 'Bark Grub numbers drop suddenly in one forest patch. Predict how Barkclimbers, Trunk Foragers, and Forest Prowlers could respond.',
    investigationQuestion: 'How can a small prey organism beneath bark connect producers, competing consumers, predators, and decomposers in Gimble?'
  },
  {
    id: 'mimsy', name: 'Mimsy', code: 'MI', baseCamp: 'Mome Station', focalSpecies: 'Reedcrawler', environment: 'Wetland ecosystem',
    nodes: [
      { id: 'reedbed-plant', name: 'Reedbed Plant', role: 'producer', evidence: 'Tall emergent plants capture sunlight above shallow water.' },
      { id: 'water-mat', name: 'Water Mat', role: 'producer', evidence: 'Floating photosynthetic growth spreads across calm open water.' },
      { id: 'surface-insects', name: 'Surface Insects', role: 'consumer', evidence: 'Small insect-like organisms feed on microscopic plant growth and organic particles near the water surface.' },
      { id: 'reedcrawler', name: 'Reedcrawler', role: 'consumer', evidence: 'Operation 03 showed Reedcrawlers feeding on tiny moving organisms at the water surface.' },
      { id: 'surface-skimmer', name: 'Surface Skimmer', role: 'consumer', evidence: 'Another small predator captures many of the same surface insects.' },
      { id: 'marsh-grazer', name: 'Marsh Grazer', role: 'consumer', evidence: 'A slow-moving herbivore eats Water Mat and young Reedbed shoots.' },
      { id: 'mud-stalker', name: 'Mud Stalker', role: 'consumer', evidence: 'A wetland predator hunts Reedcrawlers, Surface Skimmers, and juvenile Marsh Grazers.' },
      { id: 'silt-decomposer', name: 'Silt Decomposers', role: 'decomposer', evidence: 'Microbes and fungi break down dead plant material and waste in wet sediment.' }
    ],
    feedingLinks: [
      { food: 'Water Mat', eater: 'Surface Insects', evidence: 'Surface Insects graze microscopic growth associated with the floating mat.' },
      { food: 'Water Mat', eater: 'Marsh Grazer', evidence: 'Marsh Grazers eat floating plant growth.' },
      { food: 'Reedbed Plant', eater: 'Marsh Grazer', evidence: 'Marsh Grazers also eat young reed shoots.' },
      { food: 'Surface Insects', eater: 'Reedcrawler', evidence: 'Reedcrawlers capture small surface organisms.' },
      { food: 'Surface Insects', eater: 'Surface Skimmer', evidence: 'Surface Skimmers hunt the same prey.' },
      { food: 'Reedcrawler', eater: 'Mud Stalker', evidence: 'Mud Stalkers capture Reedcrawlers.' },
      { food: 'Surface Skimmer', eater: 'Mud Stalker', evidence: 'Surface Skimmers are also prey.' },
      { food: 'Marsh Grazer', eater: 'Mud Stalker', evidence: 'Juvenile Marsh Grazers can be prey.' }
    ],
    symbiosis: { partners: 'Reedcrawler + Marsh Leech', evidence: 'The leech attaches to a Reedcrawler and takes body fluids. The leech benefits while the Reedcrawler loses resources and may be weakened.', type: 'parasitism' },
    competition: { organisms: 'Reedcrawler + Surface Skimmer', sharedResource: 'Surface insects', evidence: 'Both feed in the same shallow-water edge where small insects are concentrated.' },
    changeChallenge: 'A temporary drop in surface-insect abundance occurs after several days of heavy rain. Predict effects on Reedcrawlers, Surface Skimmers, and Mud Stalkers.',
    investigationQuestion: 'How do feeding, competition, parasitism, predation, and decomposition connect the Reedcrawler to Mimsy’s wetland web?'
  }
];

export const operation04ById = Object.fromEntries(operation04Networks.map((network) => [network.id, network]));

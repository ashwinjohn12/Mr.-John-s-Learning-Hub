export interface Operation03Clue {
  source: string;
  observation: string;
}

export interface Operation03Species {
  id: string;
  name: string;
  code: string;
  baseCamp: string;
  environment: string;
  fieldName: string;
  teamIdExample: string;
  contactZone: string;
  clues: Operation03Clue[];
  investigationQuestion: string;
}

export const operation03Species: Operation03Species[] = [
  {
    id: 'gyre', name: 'Gyre', code: 'GY', baseCamp: 'Frumious Basin', environment: 'Alpine valley and high-elevation terrain', fieldName: 'Ridgeback Grazer', teamIdExample: 'P1-GY-01', contactZone: 'stream valley below a wind-exposed ridge',
    clues: [
      { source: 'TRACK SURVEY', observation: 'Broad four-toed tracks cross loose valley soil without sinking deeply. The same trail narrows toward rocky higher ground.' },
      { source: 'FEEDING TRACE', observation: 'Low plants beside the stream show wide cropped edges. Hard stems are crushed rather than torn into narrow strips.' },
      { source: 'THERMAL IMAGE', observation: 'A large body-shaped heat signal remains warm even when the surrounding air drops near freezing.' },
      { source: 'FIELD CAMERA', observation: 'The organism lowers its body behind boulders during strong ridge winds and becomes active again when winds weaken.' },
      { source: 'MOVEMENT LOG', observation: 'Most detections occur between the valley water source and patches of low vegetation.' },
      { source: 'SURFACE SAMPLE', observation: 'Coarse fibres recovered from a resting site form a dense outer layer over a softer insulating layer.' }
    ],
    investigationQuestion: 'What combination of body structures and behaviours would allow this organism to feed, move, and stay warm in Gyre’s alpine environment?'
  },
  {
    id: 'brillig', name: 'Brillig', code: 'BR', baseCamp: 'Tulgey Station', environment: 'Warm rainforest and river basin', fieldName: 'Canopy Glider', teamIdExample: 'P1-BR-01', contactZone: 'mid-canopy above a flooded forest edge',
    clues: [
      { source: 'MOTION SENSOR', observation: 'A small organism moves rapidly between tree trunks without descending to the forest floor.' },
      { source: 'IMAGE FRAME', observation: 'A thin flexible surface stretches between the front and rear limbs when the organism crosses a wide gap.' },
      { source: 'FEEDING TRACE', observation: 'Soft fruit has paired scrape marks, and tiny seeds are scattered on branches beneath feeding sites.' },
      { source: 'FOOTPRINT SCAN', observation: 'Long curved digits leave gripping marks around narrow wet branches.' },
      { source: 'ACTIVITY LOG', observation: 'Most movement occurs where canopy cover is dense and wind is low.' },
      { source: 'SHELTER OBSERVATION', observation: 'The organism rests inside a dry tree cavity during periods of heavy rainfall.' }
    ],
    investigationQuestion: 'How might movement between trees, gripping structures, feeding behaviour, and shelter use help this organism occupy Brillig’s rainforest canopy?'
  },
  {
    id: 'manxome', name: 'Manxome', code: 'MA', baseCamp: 'Calloo Island', environment: 'Coastal island habitat', fieldName: 'Tide Skipper', teamIdExample: 'P1-MA-01', contactZone: 'sheltered rocky shore above the high-water line',
    clues: [
      { source: 'SHORE CAMERA', observation: 'A compact organism moves in short bursts between wet rock, shallow water, and sheltered cracks.' },
      { source: 'FOOT SCAN', observation: 'Wide flexible feet leave gripping impressions on wet rock but narrow prints on damp sand.' },
      { source: 'FEEDING TRACE', observation: 'Thin scraping marks appear on algae-covered stones near the waterline.' },
      { source: 'STORM LOG', observation: 'Detections disappear from exposed shoreline sensors before strong winds and reappear in protected coves afterward.' },
      { source: 'BODY SURFACE IMAGE', observation: 'The outer surface appears smooth and water-resistant, with no loose fur or feathers visible.' },
      { source: 'LOCATION DATA', observation: 'The organism is rarely recorded far from both tidal water and rock shelters.' }
    ],
    investigationQuestion: 'Which adaptations would help this organism move, feed, and avoid dangerous conditions in Manxome’s changing coastal habitat?'
  },
  {
    id: 'slithy-toves', name: 'Slithy Toves', code: 'ST', baseCamp: 'Borogove Station', environment: 'Hot desert and rare freshwater zones', fieldName: 'Dune Runner', teamIdExample: 'P1-ST-01', contactZone: 'sand flats within travelling distance of a rare spring',
    clues: [
      { source: 'TRACK SURVEY', observation: 'Long narrow tracks appear mainly at dawn and after sunset. Midday sand near the same trail has no fresh prints.' },
      { source: 'THERMAL CAMERA', observation: 'During daytime heat, a body-sized signal remains several degrees cooler inside a shaded burrow.' },
      { source: 'FOOT IMAGE', observation: 'The feet are broad relative to body size and spread outward when moving across loose sand.' },
      { source: 'FEEDING TRACE', observation: 'Dry seed cases and clipped plant tips collect near the burrow entrance.' },
      { source: 'WATER LOG', observation: 'The organism visits the spring infrequently even though tracks show regular activity nearby.' },
      { source: 'STORM OBSERVATION', observation: 'Burrow openings are positioned behind low rock ridges where wind-blown sand moves more slowly.' }
    ],
    investigationQuestion: 'How could body structure, activity time, burrow use, and water-saving behaviour help this organism survive Slithy Toves?'
  },
  {
    id: 'wabe', name: 'Wabe', code: 'WA', baseCamp: 'Beamish Station', environment: 'Cold Arctic plain', fieldName: 'Snow Burrower', teamIdExample: 'P1-WA-01', contactZone: 'sheltered snowbank beside exposed dark rock',
    clues: [
      { source: 'TRACK SURVEY', observation: 'Short tracks lead from exposed rock into tunnels beneath deep snow and rarely continue across open windy ground.' },
      { source: 'THERMAL IMAGE', observation: 'The tunnel interior remains warmer and more stable than the air above the snow.' },
      { source: 'BODY IMAGE', observation: 'The organism has a compact body, small exposed ears, and a thick pale outer covering.' },
      { source: 'FEEDING TRACE', observation: 'Plant-like material and dark crust fragments are stored inside a sheltered tunnel chamber.' },
      { source: 'WEATHER LOG', observation: 'Surface activity stops during strong winds but continues beneath the snow.' },
      { source: 'MOVEMENT FRAME', observation: 'Wide front limbs push snow aside while the body follows through a narrow tunnel.' }
    ],
    investigationQuestion: 'Which features help this organism conserve heat, move through snow, find food, and avoid Wabe’s exposed wind?'
  },
  {
    id: 'bandersnatch', name: 'Bandersnatch', code: 'BA', baseCamp: 'Jubjub Station', environment: 'Open prairie', fieldName: 'Plains Strider', teamIdExample: 'P1-BA-01', contactZone: 'open grassland between a shallow watercourse and dense prairie cover',
    clues: [
      { source: 'TRACK SURVEY', observation: 'Long-stride tracks form repeated routes across open grassland and continue for several kilometres.' },
      { source: 'BODY IMAGE', observation: 'The organism has long lower limbs and a narrow body held high above the grass.' },
      { source: 'FEEDING TRACE', observation: 'Grass tops and tender shoots are clipped along movement routes, while roots remain mostly undisturbed.' },
      { source: 'GROUP CAMERA', observation: 'Several individuals travel in the same direction with wide spacing between them.' },
      { source: 'ALERT OBSERVATION', observation: 'When one individual raises its head suddenly, nearby individuals change direction within seconds.' },
      { source: 'SEASONAL LOG', observation: 'Movement routes shift toward water during hotter, drier periods and spread outward after rainfall.' }
    ],
    investigationQuestion: 'How might long-distance movement, group behaviour, feeding height, and seasonal use of water shape this organism’s prairie niche?'
  },
  {
    id: 'gimble', name: 'Gimble', code: 'GI', baseCamp: 'Galumph Station', environment: 'Temperate forest and freshwater edge', fieldName: 'Barkclimber', teamIdExample: 'P1-GI-01', contactZone: 'mature forest between fallen logs and a freshwater edge',
    clues: [
      { source: 'TREE CAMERA', observation: 'A small organism moves vertically along rough tree trunks and can pause head-down without falling.' },
      { source: 'FOOT IMAGE', observation: 'Curved gripping digits press into bark while a stiff tail braces against the trunk.' },
      { source: 'FEEDING TRACE', observation: 'Small holes in loose bark contain fewer tiny invertebrates after the organism visits.' },
      { source: 'SOUND LOG', observation: 'Short tapping sounds occur before feeding at several tree locations.' },
      { source: 'SHELTER OBSERVATION', observation: 'The organism enters cavities in standing and fallen trees during cold rain.' },
      { source: 'LOCATION DATA', observation: 'Detections are highest where old trees, fallen wood, and dense leaf litter occur together.' }
    ],
    investigationQuestion: 'How do climbing structures, feeding behaviour, shelter choice, and forest structure help this organism occupy Gimble’s woodland habitat?'
  },
  {
    id: 'mimsy', name: 'Mimsy', code: 'MI', baseCamp: 'Mome Station', environment: 'Warm wetland and marsh', fieldName: 'Reedcrawler', teamIdExample: 'P1-MI-01', contactZone: 'dense emergent vegetation beside shallow standing water',
    clues: [
      { source: 'WATER CAMERA', observation: 'A small organism moves through shallow water and climbs flexible plant stems above the surface.' },
      { source: 'FOOT IMAGE', observation: 'Long spread-out toes contact both mud and floating vegetation without sinking deeply.' },
      { source: 'FEEDING TRACE', observation: 'Tiny moving organisms disappear from the water surface near repeated feeding locations.' },
      { source: 'BODY IMAGE', observation: 'The outer covering sheds water quickly after the organism leaves the marsh.' },
      { source: 'SHELTER OBSERVATION', observation: 'The organism remains inside dense reeds during heavy rain and when larger splashes are detected nearby.' },
      { source: 'LOCATION DATA', observation: 'Most detections occur where shallow water, plant cover, and open water meet.' }
    ],
    investigationQuestion: 'Which adaptations allow this organism to move across wet surfaces, feed in shallow water, and use Mimsy’s vegetation for protection?'
  }
];

export const operation03ById = Object.fromEntries(operation03Species.map((species) => [species.id, species]));

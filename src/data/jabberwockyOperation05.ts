export interface PopulationSeries {
  key: string;
  label: string;
  unit: string;
  values: number[];
  note: string;
}

export interface PopulationEvidence {
  source: string;
  observation: string;
}

export interface PopulationCase {
  id: string;
  name: string;
  code: string;
  baseCamp: string;
  focalSpecies: string;
  environment: string;
  mystery: string;
  investigationQuestion: string;
  timeLabels: string[];
  series: PopulationSeries[];
  evidence: PopulationEvidence[];
  possibleClaims: string[];
}

const weeks = ['W1','W2','W3','W4','W5','W6','W7','W8'];

export const operation05Cases: PopulationCase[] = [
  {
    id: 'gyre', name: 'Gyre', code: 'GY', baseCamp: 'Frumious Basin', focalSpecies: 'Ridgeback Grazer', environment: 'Alpine valley ecosystem',
    mystery: 'Ridgeback Grazer detections have fallen for four surveys in a row. JCEC needs to know whether the pattern is best explained by changing food conditions, predation, movement, or a problem with the monitoring system.',
    investigationQuestion: 'Which explanation best fits the Ridgeback decline, and what evidence would make your conclusion stronger?',
    timeLabels: weeks,
    series: [
      { key: 'ridgebacks', label: 'Ridgeback Grazer detections', unit: 'per standard valley transect', values: [42,45,44,41,36,31,27,25], note: 'Same transect length, survey time, and sensor settings each week.' },
      { key: 'grass', label: 'Bluecrest Grass cover', unit: '% ground cover', values: [68,70,69,60,49,39,33,31], note: 'Estimated from fixed monitoring plots in the same valley.' },
      { key: 'moisture', label: 'Soil moisture', unit: '%', values: [44,45,43,35,27,23,22,24], note: 'Average from fixed valley probes.' }
    ],
    evidence: [
      { source: 'Predator cameras', observation: 'Crag Hunter detections stayed between 4 and 5 per week throughout the survey.' },
      { source: 'Equipment check', observation: 'Transect sensors passed calibration checks before Weeks 1, 4, and 8.' },
      { source: 'Field notes', observation: 'Fresh Ridgeback tracks became concentrated near the remaining greener valley floor after Week 5.' }
    ],
    possibleClaims: [
      'Reduced Bluecrest Grass caused a true decline in Ridgeback numbers across the monitored valley, with food limitation as the main driver.',
      'Ridgebacks mainly shifted away from drier parts of the transect toward greener valley-floor habitat, so the lower counts mostly reflect changing distribution.',
      'Lower soil moisture reduced Bluecrest Grass and likely affected both Ridgeback food availability and where Ridgebacks were concentrated; the transect data alone cannot separate those effects completely.'
    ]
  },
  {
    id: 'brillig', name: 'Brillig', code: 'BR', baseCamp: 'Tulgey Station', focalSpecies: 'Canopy Glider', environment: 'Warm rainforest ecosystem',
    mystery: 'Canopy Glider detections dropped after a severe storm. JCEC has several possible explanations, but only some match the timing of the evidence.',
    investigationQuestion: 'What changed first, what changed next, and which cause-and-effect explanation is most defensible?',
    timeLabels: weeks,
    series: [
      { key: 'gliders', label: 'Canopy Glider detections', unit: 'per canopy camera route', values: [38,40,42,40,32,24,22,25], note: 'Standardized canopy-camera route.' },
      { key: 'fruit', label: 'Ripe Glowfruit index', unit: 'fruit units per survey', values: [76,80,82,70,45,28,25,35], note: 'Same marked vines monitored weekly.' },
      { key: 'rain', label: 'Rainfall', unit: 'mm per survey period', values: [25,26,28,95,80,45,30,35], note: 'Week 4 included the strongest storm of the monitoring period.' }
    ],
    evidence: [
      { source: 'Canopy damage survey', observation: 'Many fruiting Glowfruit branches were broken during the Week 4 storm.' },
      { source: 'Predator cameras', observation: 'Vine Stalker detections did not increase during Weeks 4–6.' },
      { source: 'Nest-cavity checks', observation: 'Most monitored Hollowstem shelter cavities remained intact.' }
    ],
    possibleClaims: [
      'Storm damage reduced usable shelter enough that many Canopy Gliders shifted away from the monitored camera route.',
      'Storm damage reduced Glowfruit availability, and the Canopy Glider decline followed the loss of a major food resource.',
      'The storm caused a short-term change in Canopy Glider behaviour or distribution, while food loss may also have contributed to the lower detections.'
    ]
  },
  {
    id: 'manxome', name: 'Manxome', code: 'MA', baseCamp: 'Calloo Island', focalSpecies: 'Tide Skipper', environment: 'Coastal island ecosystem',
    mystery: 'Tide Skipper counts collapsed at an exposed shoreline, then began to recover. JCEC wants a mechanism, not just a matching graph shape.',
    investigationQuestion: 'How could wave conditions change producer abundance and then affect Tide Skipper detections?',
    timeLabels: weeks,
    series: [
      { key: 'skippers', label: 'Tide Skipper detections', unit: 'per shoreline transect', values: [52,50,49,29,18,17,31,42], note: 'Same exposed-shore transect.' },
      { key: 'algae', label: 'Tidefilm Algae cover', unit: '% rock cover', values: [72,70,68,34,20,18,40,58], note: 'Percent cover from marked intertidal rocks.' },
      { key: 'waves', label: 'Mean wave height', unit: 'm', values: [0.8,1.0,1.2,3.8,4.1,2.5,1.3,1.0], note: 'Wave buoy beside the monitored cove.' }
    ],
    evidence: [
      { source: 'Shoreline photos', observation: 'After Weeks 4–5, exposed rocks had large scraped patches with little green film.' },
      { source: 'Sheltered-cove check', observation: 'Tide Skipper detections at a protected cove changed much less than at the exposed transect.' },
      { source: 'Predator survey', observation: 'Cove Hunter detections were similar before and after the high-wave period.' }
    ],
    possibleClaims: [
      'High waves directly reduced Tide Skipper survival at the exposed shoreline, making mortality the main cause of the lower counts.',
      'Tide Skippers mainly moved from the exposed transect into more sheltered shoreline habitat during the high-wave period.',
      'High waves stripped Tidefilm Algae from exposed rocks and likely changed both food availability and Tide Skipper use of the exposed shoreline; recovery of algae and detections supports a linked response.'
    ]
  },
  {
    id: 'slithy-toves', name: 'Slithy Toves', code: 'ST', baseCamp: 'Borogove Station', focalSpecies: 'Dune Runner', environment: 'Desert ecosystem',
    mystery: 'Midday Dune Runner detections fell during the hottest week, but another monitoring method tells a different story.',
    investigationQuestion: 'Did the population crash, or did the animals change when and where they were active?',
    timeLabels: weeks,
    series: [
      { key: 'midday', label: 'Midday Dune Runner detections', unit: 'per surface route', values: [18,17,16,9,5,4,7,14], note: 'Surface route surveyed at the same midday time.' },
      { key: 'night', label: 'Night-camera detections', unit: 'per camera night', values: [21,22,20,22,21,22,23,21], note: 'Fixed cameras operating after sunset.' },
      { key: 'temperature', label: 'Midday air temperature', unit: '°C', values: [36,38,40,44,47,46,42,38], note: 'Temperature recorded during the surface route.' }
    ],
    evidence: [
      { source: 'Burrow temperature probes', observation: 'Burrows stayed 13–18°C cooler than the surface during Weeks 4–6.' },
      { source: 'Track timing', observation: 'Most fresh tracks during the hottest period appeared between sunset and sunrise.' },
      { source: 'Carcass survey', observation: 'No unusual increase in Dune Runner remains was found along the route.' }
    ],
    possibleClaims: [
      'Extreme heat caused substantial Dune Runner mortality, and the population declined during Weeks 4–6.',
      'Dune Runners shifted activity away from hot midday conditions and used cooler burrows or nighttime periods more often, lowering midday detections without strong evidence of a population crash.',
      'Dune Runners moved permanently away from the monitored area during the hot period, so both midday and nighttime monitoring should eventually show lower detections.'
    ]
  },
  {
    id: 'wabe', name: 'Wabe', code: 'WA', baseCamp: 'Beamish Station', focalSpecies: 'Snow Burrower', environment: 'Arctic ecosystem',
    mystery: 'Snow Burrower activity signs declined during a late-snow season. The team must decide whether reduced plant availability is a reasonable limiting-factor explanation.',
    investigationQuestion: 'How strongly do the resource and seasonal data support a food-limitation explanation?',
    timeLabels: weeks,
    series: [
      { key: 'burrowers', label: 'Snow Burrower activity signs', unit: 'per fixed transect', values: [35,36,34,32,29,25,21,19], note: 'Tracks, fresh tunnels, and feeding signs combined into one standardized index.' },
      { key: 'tundra', label: 'Green Tundra Mat cover', unit: '% plot cover', values: [45,47,46,35,28,22,19,18], note: 'Same sheltered plant plots monitored weekly.' },
      { key: 'snow', label: 'Snow-covered ground', unit: '% of plant plots', values: [88,85,82,70,60,48,35,28], note: 'Persistent snow remained longer than the previous seasonal average.' }
    ],
    evidence: [
      { source: 'Food-cache checks', observation: 'Average fresh plant material in sampled Snow Burrower caches declined after Week 4.' },
      { source: 'Pale Hunter cameras', observation: 'Predator detections remained low and did not show a matching increase.' },
      { source: 'Body-condition observations', observation: 'A small sample of captured-and-released Snow Burrowers had lower average mass late in the survey.' }
    ],
    possibleClaims: [
      'Snow Burrowers became less detectable because persistent snow caused them to remain below the surface longer, without strong evidence that food conditions changed their condition.',
      'Persistent snow delayed plant availability, reducing a food resource and likely contributing to lower Snow Burrower activity and body condition.',
      'Low Pale Hunter abundance caused Snow Burrowers to spread farther across the habitat, which reduced signs along the fixed transect.'
    ]
  },
  {
    id: 'bandersnatch', name: 'Bandersnatch', code: 'BA', baseCamp: 'Jubjub Station', focalSpecies: 'Plains Strider', environment: 'Prairie ecosystem',
    mystery: 'Plains Strider detections near Jubjub Station fell sharply, but detections at another water source rose at almost the same time.',
    investigationQuestion: 'Does the evidence show a population decline, a change in distribution, or both?',
    timeLabels: weeks,
    series: [
      { key: 'station', label: 'Jubjub-area Strider detections', unit: 'per route', values: [70,68,65,49,35,26,22,20], note: 'Fixed route around the station-side grassland.' },
      { key: 'east', label: 'East Waterhole Strider detections', unit: 'per route', values: [12,15,18,31,48,60,68,72], note: 'Fixed route around a second water source.' },
      { key: 'water', label: 'Jubjub-area surface water depth', unit: 'cm', values: [48,45,40,30,18,11,8,7], note: 'Depth at the main station-side watering area.' }
    ],
    evidence: [
      { source: 'Track corridor survey', observation: 'Fresh Strider tracks increasingly connected the Jubjub area to the East Waterhole after Week 4.' },
      { source: 'Carcass survey', observation: 'No unusual increase in Strider deaths was detected.' },
      { source: 'East Waterhole measurement', observation: 'The East Waterhole retained substantially more water than the Jubjub-area pool.' }
    ],
    possibleClaims: [
      'Many Plains Striders shifted toward the more reliable East Waterhole as local water declined, changing their distribution without clear evidence of a continent-wide population crash.',
      'Water stress caused a major regional population decline, and the East Waterhole increase represents a separate group rather than movement from Jubjub.',
      'Both movement toward the East Waterhole and some decline in the Jubjub-area population may have occurred; the current route data cannot determine exact continent-wide population size.'
    ]
  },
  {
    id: 'gimble', name: 'Gimble', code: 'GI', baseCamp: 'Galumph Station', focalSpecies: 'Barkclimber', environment: 'Temperate forest ecosystem',
    mystery: 'Barkclimber detections fell after a short cold snap. JCEC suspects the change may have moved through the food web rather than acting directly on the Barkclimbers.',
    investigationQuestion: 'Can a change in prey abundance explain the Barkclimber trend better than a direct cold effect?',
    timeLabels: weeks,
    series: [
      { key: 'barkclimbers', label: 'Barkclimber detections', unit: 'per forest route', values: [48,47,46,41,34,29,28,31], note: 'Standardized mature-forest route.' },
      { key: 'grubs', label: 'Bark Grub index', unit: 'grubs per sampled trunk', values: [81,80,78,64,48,37,35,42], note: 'Average from the same marked trunks.' },
      { key: 'temperature', label: 'Minimum overnight temperature', unit: '°C', values: [5,4,2,-7,-10,-4,1,3], note: 'Cold snap began in Week 4.' }
    ],
    evidence: [
      { source: 'Foraging observations', observation: 'Barkclimbers spent longer searching each trunk during Weeks 5–7.' },
      { source: 'Shelter checks', observation: 'Tree-cavity shelter availability did not change during the survey.' },
      { source: 'Forest Prowler cameras', observation: 'Predator detections stayed within the normal range.' }
    ],
    possibleClaims: [
      'The cold snap directly reduced Barkclimber activity or survival, so temperature itself was the main cause of the lower detections.',
      'Barkclimbers shifted into different forest patches after the cold snap, making the fixed route less representative of their distribution.',
      'The cold snap was followed by fewer Bark Grubs, and reduced prey availability likely contributed to lower Barkclimber detections through the food web.'
    ]
  },
  {
    id: 'mimsy', name: 'Mimsy', code: 'MI', baseCamp: 'Mome Station', focalSpecies: 'Reedcrawler', environment: 'Wetland ecosystem',
    mystery: 'Reedcrawler detections fell at one shoreline site while rising at another as water levels changed. JCEC needs the team to separate population size from population distribution.',
    investigationQuestion: 'What does the two-site evidence suggest about where Reedcrawlers moved as the wetland changed?',
    timeLabels: weeks,
    series: [
      { key: 'site-a', label: 'Reedcrawler detections — Site A', unit: 'per edge transect', values: [44,46,48,36,25,18,15,16], note: 'Original shallow-water edge beside Mome Station.' },
      { key: 'site-b', label: 'Reedcrawler detections — Site B', unit: 'per edge transect', values: [12,14,15,22,31,40,45,46], note: 'A second edge transect farther inland.' },
      { key: 'water', label: 'Wetland water level', unit: 'cm above reference', values: [38,40,42,55,68,76,80,78], note: 'Water level measured at the central gauge.' }
    ],
    evidence: [
      { source: 'Habitat mapping', observation: 'As water rose, the shallow reed-water boundary shifted away from Site A and toward Site B.' },
      { source: 'Combined detections', observation: 'The total number of Reedcrawler detections across Sites A and B stayed much more stable than either site alone.' },
      { source: 'Mud Stalker cameras', observation: 'Predator detections did not show a major increase during the shift.' }
    ],
    possibleClaims: [
      'Rising water shifted the shallow-edge habitat, and Reedcrawler distribution moved from Site A toward Site B without clear evidence of a major total decline.',
      'Higher water reduced survival at Site A, causing a local population decline that happened at the same time as an unrelated increase at Site B.',
      'Reedcrawlers responded to both habitat movement and changing predator pressure, so the two-site pattern likely reflects several causes acting together.'
    ]
  }
];

export const operation05ById = Object.fromEntries(operation05Cases.map((item) => [item.id, item]));

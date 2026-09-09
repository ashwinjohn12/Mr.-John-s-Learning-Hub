export type EvidenceKind = 'biotic' | 'abiotic';

export interface Operation02Evidence {
  text: string;
  kind: EvidenceKind;
}

export interface Operation02Site {
  id: string;
  name: string;
  code: string;
  baseCamp: string;
  environment: string;
  teamIdExample: string;
  telemetry: {
    airTemperature: string;
    moisture: string;
    light: string;
    wind: string;
    ground: string;
  };
  evidence: Operation02Evidence[];
  investigationQuestion: string;
}

export const operation02Sites: Operation02Site[] = [
  {
    id: 'gyre', name: 'Gyre', code: 'GY', baseCamp: 'Frumious Basin', environment: 'Alpine valley and high-elevation terrain', teamIdExample: 'P1-GY-01',
    telemetry: { airTemperature: '9°C', moisture: 'Moderate near valley stream', light: 'High in open valley', wind: 'Moderate; stronger above ridge', ground: 'Rocky soil, grasses, low shrubs' },
    evidence: [
      { text: 'A cold stream flows through the valley floor.', kind: 'abiotic' },
      { text: 'Low green plants form dense patches beside the stream.', kind: 'biotic' },
      { text: 'Small pellet-like droppings were recorded near a trail.', kind: 'biotic' },
      { text: 'Snow remains on the upper slopes even during the warm season.', kind: 'abiotic' },
      { text: 'Several stems show fresh bite or scrape marks.', kind: 'biotic' },
      { text: 'The exposed ridge is colder, drier, and windier than the valley.', kind: 'abiotic' }
    ],
    investigationQuestion: 'Which part of the landing zone appears most capable of supporting life, and which abiotic factor may limit where organisms can live?'
  },
  {
    id: 'brillig', name: 'Brillig', code: 'BR', baseCamp: 'Tulgey Station', environment: 'Warm rainforest and river basin', teamIdExample: 'P1-BR-01',
    telemetry: { airTemperature: '28°C', moisture: 'Very high / saturated', light: 'Low beneath canopy; high in clearings', wind: 'Low beneath canopy', ground: 'Thick leaf litter over wet soil' },
    evidence: [
      { text: 'Large amounts of dead leaf material cover the forest floor.', kind: 'biotic' },
      { text: 'The soil remains wet after frequent rainfall.', kind: 'abiotic' },
      { text: 'Repeated calls are detected from the upper canopy.', kind: 'biotic' },
      { text: 'A river channel has overflowed onto nearby low ground.', kind: 'abiotic' },
      { text: 'Fresh chewing damage appears on several broad leaves.', kind: 'biotic' },
      { text: 'A cleared patch has exposed soil and visible erosion channels.', kind: 'abiotic' }
    ],
    investigationQuestion: 'How might Brillig’s water, light, vegetation, and soil conditions affect where organisms are most abundant?'
  },
  {
    id: 'manxome', name: 'Manxome', code: 'MA', baseCamp: 'Calloo Island', environment: 'Coastal island habitat', teamIdExample: 'P1-MA-01',
    telemetry: { airTemperature: '19°C', moisture: 'Moderate', light: 'High near coast', wind: 'Strong along exposed shoreline', ground: 'Rock, sand, low coastal vegetation' },
    evidence: [
      { text: 'Salt spray regularly reaches the exposed shoreline.', kind: 'abiotic' },
      { text: 'Small burrow openings occur above the high-water line.', kind: 'biotic' },
      { text: 'Low flexible plants grow in sheltered cracks between rocks.', kind: 'biotic' },
      { text: 'Wave action is much stronger on the windward side of the island.', kind: 'abiotic' },
      { text: 'Tracks cross damp sand between the water and vegetation.', kind: 'biotic' },
      { text: 'Fresh water collects in a protected inland depression.', kind: 'abiotic' }
    ],
    investigationQuestion: 'Which island conditions appear to create safer habitat, and how might wind and water shape where organisms live?'
  },
  {
    id: 'slithy-toves', name: 'Slithy Toves', code: 'ST', baseCamp: 'Borogove Station', environment: 'Hot desert and rare freshwater zones', teamIdExample: 'P1-ST-01',
    telemetry: { airTemperature: '38°C daytime / 1°C overnight', moisture: 'Very low', light: 'Very high', wind: 'Gusty', ground: 'Dry sand, gravel, scattered low growth' },
    evidence: [
      { text: 'Surface sand becomes extremely hot during the afternoon.', kind: 'abiotic' },
      { text: 'Small openings lead into shaded burrows beneath the surface.', kind: 'biotic' },
      { text: 'A few thick-stemmed plants occur near a rare spring.', kind: 'biotic' },
      { text: 'Humidity is much higher within a few metres of the spring.', kind: 'abiotic' },
      { text: 'Fine tracks appear mainly during the cooler morning period.', kind: 'biotic' },
      { text: 'Strong winds move loose sand across exposed ground.', kind: 'abiotic' }
    ],
    investigationQuestion: 'What evidence suggests that water and temperature control where and when organisms can survive in this landing zone?'
  },
  {
    id: 'wabe', name: 'Wabe', code: 'WA', baseCamp: 'Beamish Station', environment: 'Cold Arctic plain', teamIdExample: 'P1-WA-01',
    telemetry: { airTemperature: '-12°C', moisture: 'Water mostly frozen', light: 'Low-angle daylight', wind: 'Strong and persistent', ground: 'Snow, ice, exposed dark rock' },
    evidence: [
      { text: 'Wind-packed snow covers most of the open ground.', kind: 'abiotic' },
      { text: 'A line of small tracks disappears beneath a snow bank.', kind: 'biotic' },
      { text: 'Dark crust-like growth occurs on several sun-facing rocks.', kind: 'biotic' },
      { text: 'The air temperature drops quickly when cloud cover increases.', kind: 'abiotic' },
      { text: 'Plant-like material is concentrated in sheltered depressions.', kind: 'biotic' },
      { text: 'Exposed areas experience much stronger wind than depressions.', kind: 'abiotic' }
    ],
    investigationQuestion: 'Which microhabitats may offer protection from Wabe’s cold and wind, and what evidence supports your conclusion?'
  },
  {
    id: 'bandersnatch', name: 'Bandersnatch', code: 'BA', baseCamp: 'Jubjub Station', environment: 'Open prairie', teamIdExample: 'P1-BA-01',
    telemetry: { airTemperature: '22°C', moisture: 'Moderate in topsoil', light: 'Full sun', wind: 'Moderate', ground: 'Deep soil beneath dense grass cover' },
    evidence: [
      { text: 'Dense grasses cover most undisturbed ground.', kind: 'biotic' },
      { text: 'The open site receives direct sunlight for most of the day.', kind: 'abiotic' },
      { text: 'Hoof-like tracks cross the same route in several locations.', kind: 'biotic' },
      { text: 'Topsoil is darker and moister beneath dense vegetation.', kind: 'abiotic' },
      { text: 'Small pieces of partially decomposed plant material occur at the soil surface.', kind: 'biotic' },
      { text: 'Wind speed is greater in exposed areas with little vegetation.', kind: 'abiotic' }
    ],
    investigationQuestion: 'How might prairie vegetation, soil moisture, sunlight, and wind interact to create habitat across this landing zone?'
  },
  {
    id: 'gimble', name: 'Gimble', code: 'GI', baseCamp: 'Galumph Station', environment: 'Temperate forest and freshwater edge', teamIdExample: 'P1-GI-01',
    telemetry: { airTemperature: '12°C', moisture: 'Moist', light: 'Filtered beneath forest canopy', wind: 'Low in forest', ground: 'Leaf litter, soil, roots, nearby freshwater' },
    evidence: [
      { text: 'A thick layer of fallen plant material covers the forest floor.', kind: 'biotic' },
      { text: 'The soil beneath the canopy is cool and moist.', kind: 'abiotic' },
      { text: 'Fungal-looking growth is present on several fallen branches.', kind: 'biotic' },
      { text: 'Light levels are much higher at the lake edge than inside the forest.', kind: 'abiotic' },
      { text: 'Small tracks and disturbed leaf litter occur near the water.', kind: 'biotic' },
      { text: 'The nearby lake moderates temperature at the shoreline.', kind: 'abiotic' }
    ],
    investigationQuestion: 'Where would you expect the greatest variety of organisms—forest interior, forest edge, or shoreline—and what evidence supports your prediction?'
  },
  {
    id: 'mimsy', name: 'Mimsy', code: 'MI', baseCamp: 'Mome Station', environment: 'Warm wetland and marsh', teamIdExample: 'P1-MI-01',
    telemetry: { airTemperature: '29°C', moisture: 'Saturated', light: 'High in open marsh', wind: 'Low to moderate', ground: 'Standing water, mud, floating and rooted vegetation' },
    evidence: [
      { text: 'Shallow standing water covers much of the survey area.', kind: 'abiotic' },
      { text: 'Tall rooted plants rise above the water surface.', kind: 'biotic' },
      { text: 'Repeated splashes and calls are detected near dense vegetation.', kind: 'biotic' },
      { text: 'The mud contains very little firm, dry ground.', kind: 'abiotic' },
      { text: 'Small moving organisms are visible near the water surface.', kind: 'biotic' },
      { text: 'Water depth changes noticeably after heavy rainfall.', kind: 'abiotic' }
    ],
    investigationQuestion: 'How do water depth, saturated ground, warm temperatures, and vegetation shape where organisms can live in Mimsy’s wetlands?'
  }
];

export const operation02ById = Object.fromEntries(operation02Sites.map((site) => [site.id, site]));

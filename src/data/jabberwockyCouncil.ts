export interface CouncilEvidenceCard {
  id: 'ecosystem' | 'plant' | 'thermal' | 'structural' | 'geology';
  phase: string;
  title: string;
  evidence: string;
  ruleLabel: string;
  rule: string;
}

export interface CouncilContinent {
  id: string;
  name: string;
  code: string;
  icon: string;
  subtitle: string;
  cards: [CouncilEvidenceCard, CouncilEvidenceCard, CouncilEvidenceCard, CouncilEvidenceCard, CouncilEvidenceCard];
}

export const councilContinents: CouncilContinent[] = [
  {
    id: 'gyre', name: 'Gyre', code: 'GY', icon: '⛰️', subtitle: 'Alpine Frontier',
    cards: [
      { id:'ecosystem', phase:'PHASE 1 · ECOSYSTEMS', title:'ECOSYSTEM EVIDENCE', evidence:'Valley vegetation supports alpine food-web connections, while thin mountain soils and exposed slopes recover slowly after disturbance.', ruleLabel:'ECOLOGICAL SAFEGUARD', rule:'Protect erosion-prone slopes, thin soils and important valley habitat; disturbance must stay small and carefully monitored.' },
      { id:'plant', phase:'PHASE 2 · PLANT RESOURCES', title:'PLANT RESOURCE EVIDENCE', evidence:'Skyroot can provide starchy food and coarse fibre and can survive a short growing season where useful flat land is limited.', ruleLabel:'SUSTAINABILITY RULE', rule:'Do not expand use through large-scale digging or cultivation that loosens thin alpine soil or increases erosion.' },
      { id:'thermal', phase:'PHASE 3 · THERMAL SURVIVAL', title:'THERMAL EVIDENCE', evidence:'Cold, exposed alpine conditions create prolonged habitat heat-loss risk; useful passive solar gain is possible only where site conditions allow.', ruleLabel:'SURVIVAL / ENERGY RULE', rule:'Reduce heat loss first, use passive solar gain when available, and do not solve the thermal problem by expanding onto fragile slopes.' },
      { id:'structural', phase:'PHASE 4 · STRUCTURES & FORCES', title:'STRUCTURAL EVIDENCE', evidence:'Useful building ground is limited and may be uneven or sloped, while snow and exposure create structural loading concerns.', ruleLabel:'SAFETY / SITE RULE', rule:'Use stable support on limited ground and design for established snow/exposure loads while minimizing soil and slope disturbance.' },
      { id:'geology', phase:'PHASE 5 · GEOLOGY', title:'GEOLOGICAL EVIDENCE', evidence:'Layered exposed rock, angular fragments and thin discontinuous sediment record geological change, but no exact age, fossil record or active fault is confirmed.', ruleLabel:'LIMIT / UNCERTAINTY / PROTECTION RULE', rule:'Keep thin erosion-prone soil and useful geological exposures protected; treat the deeper history as partly unresolved.' }
    ]
  },
  {
    id: 'brillig', name: 'Brillig', code: 'BR', icon: '🌿', subtitle: 'Emerald Basin',
    cards: [
      { id:'ecosystem', phase:'PHASE 1 · ECOSYSTEMS', title:'ECOSYSTEM EVIDENCE', evidence:'The rainforest canopy supports many organisms and helps retain nutrients; exposed soil erodes quickly when vegetation is removed.', ruleLabel:'ECOLOGICAL SAFEGUARD', rule:'Use existing openings where possible and avoid large clearing that increases erosion, nutrient loss and habitat damage.' },
      { id:'plant', phase:'PHASE 2 · PLANT RESOURCES', title:'PLANT RESOURCE EVIDENCE', evidence:'Rainspout Tree can provide fruit, seeds and flexible fibre without requiring open farmland.', ruleLabel:'SUSTAINABILITY RULE', rule:'Resource use must avoid replacing diverse forest with large cleared or uniform plantations.' },
      { id:'thermal', phase:'PHASE 3 · THERMAL SURVIVAL', title:'THERMAL EVIDENCE', evidence:'Warm, humid conditions create unwanted heat-gain and cooling challenges, while the existing canopy already provides useful shade.', ruleLabel:'SURVIVAL / ENERGY RULE', rule:'Use shade, measured ventilation and efficient control before active cooling; do not clear canopy simply to simplify thermal control.' },
      { id:'structural', phase:'PHASE 4 · STRUCTURES & FORCES', title:'STRUCTURAL EVIDENCE', evidence:'A frequently wet rainforest site must carry normal habitat loads while fitting into a limited cleared footprint.', ruleLabel:'SAFETY / SITE RULE', rule:'Keep support and connections reliable in wet conditions without solving structural problems through a much larger clearing.' },
      { id:'geology', phase:'PHASE 5 · GEOLOGY', title:'GEOLOGICAL EVIDENCE', evidence:'Strongly weathered surfaces, rounded stream sediment and fine deposits show active surface change, while buried bedrock history remains incomplete.', ruleLabel:'LIMIT / UNCERTAINTY / PROTECTION RULE', rule:'Protect forest cover and stream-edge ground; prefer low-disturbance evidence collection rather than clearing to expose more geology.' }
    ]
  },
  {
    id: 'manxome', name: 'Manxome', code: 'MA', icon: '🏝️', subtitle: 'Vorpal Archipelago',
    cards: [
      { id:'ecosystem', phase:'PHASE 1 · ECOSYSTEMS', title:'ECOSYSTEM EVIDENCE', evidence:'Island, shore and sheltered-bay food webs are closely connected, and introduced organisms can move between islands.', ruleLabel:'ECOLOGICAL SAFEGUARD', rule:'Protect freshwater catchments and sensitive coastal connections; control disturbance and introduced-organism pathways.' },
      { id:'plant', phase:'PHASE 2 · PLANT RESOURCES', title:'PLANT RESOURCE EVIDENCE', evidence:'Storm Palm can provide fruit, oil-rich seeds and long fibres while surviving established coastal wind conditions.', ruleLabel:'SUSTAINABILITY RULE', rule:'Avoid large uniform groves that replace diverse island habitat or increase vulnerability to one storm or pest.' },
      { id:'thermal', phase:'PHASE 3 · THERMAL SURVIVAL', title:'THERMAL EVIDENCE', evidence:'Most island conditions are mild, but storm-season changes in wind, cloud and exposure make a fixed year-round thermal strategy unreliable.', ruleLabel:'SURVIVAL / ENERGY RULE', rule:'Use passive control and measured ventilation when conditions allow, with adaptive controls that continue to protect catchments and coastal habitat.' },
      { id:'structural', phase:'PHASE 4 · STRUCTURES & FORCES', title:'STRUCTURAL EVIDENCE', evidence:'Established storm-season exposure can apply changing loads to walls, roofs and connections, while island habitat limits where construction can spread.', ruleLabel:'SAFETY / SITE RULE', rule:'Design secure structural connections for changing loads and keep construction away from sensitive freshwater and coastal connections.' },
      { id:'geology', phase:'PHASE 5 · GEOLOGY', title:'GEOLOGICAL EVIDENCE', evidence:'Coastal rock exposures, rounded pebbles and sediment bands show repeated transport and deposition; no confirmed fossil evidence or crustal deformation is established.', ruleLabel:'LIMIT / UNCERTAINTY / PROTECTION RULE', rule:'Do not treat the shoreline as fixed ground; protect catchments and coastal habitat while monitoring continuing sediment movement.' }
    ]
  },
  {
    id: 'slithy-toves', name: 'Slithy Toves', code: 'ST', icon: '🏜️', subtitle: 'Sunscar Desert',
    cards: [
      { id:'ecosystem', phase:'PHASE 1 · ECOSYSTEMS', title:'ECOSYSTEM EVIDENCE', evidence:'Most organisms depend on a small number of productive areas near scarce fresh-water sources.', ruleLabel:'ECOLOGICAL SAFEGUARD', rule:'Human water use and ground disturbance must not damage the limited productive habitat clustered around water.' },
      { id:'plant', phase:'PHASE 2 · PLANT RESOURCES', title:'PLANT RESOURCE EVIDENCE', evidence:'Reservoir Thorn can provide edible tissue, oil-rich seeds and fibre while surviving with very little water.', ruleLabel:'SUSTAINABILITY RULE', rule:'Do not expand production through water-heavy irrigation that competes with native ecosystems or worsens salt buildup.' },
      { id:'thermal', phase:'PHASE 3 · THERMAL SURVIVAL', title:'THERMAL EVIDENCE', evidence:'Established conditions can swing from about 40°C days to about −5°C nights, creating both daytime heat-gain and nighttime heat-loss problems.', ruleLabel:'SURVIVAL / ENERGY RULE', rule:'Use shade and reduced radiant gain by day plus heat-retention strategies at night; scarce fresh water cannot become the main cooling resource.' },
      { id:'structural', phase:'PHASE 4 · STRUCTURES & FORCES', title:'STRUCTURAL EVIDENCE', evidence:'The habitat must remain reliable on an exposed dry site with established storms and large thermal changes while using materials efficiently.', ruleLabel:'SAFETY / SITE RULE', rule:'Account for established external loads and thermal requirements without relying on water-heavy construction or spreading into scarce productive areas.' },
      { id:'geology', phase:'PHASE 5 · GEOLOGY', title:'GEOLOGICAL EVIDENCE', evidence:'Fractured exposed rock and sorted loose sediment show breakdown and movement, but the observed fracture is not confirmed as a fault and no fossil evidence is confirmed.', ruleLabel:'LIMIT / UNCERTAINTY / PROTECTION RULE', rule:'Keep the fracture classified as unresolved evidence, conserve fresh water during investigation and limit disturbance near scarce water sources.' }
    ]
  },
  {
    id: 'wabe', name: 'Wabe', code: 'WA', icon: '❄️', subtitle: 'White Frontier',
    cards: [
      { id:'ecosystem', phase:'PHASE 1 · ECOSYSTEMS', title:'ECOSYSTEM EVIDENCE', evidence:'Short-season vegetation supports native organisms, and damaged plant mats can take years to recover.', ruleLabel:'ECOLOGICAL SAFEGUARD', rule:'Protect slow-recovering natural vegetation and avoid repeated disturbance of the same ground.' },
      { id:'plant', phase:'PHASE 2 · PLANT RESOURCES', title:'PLANT RESOURCE EVIDENCE', evidence:'Ember Moss, a flowering seed plant, can provide oil-rich seeds and insulating fibre during Wabe’s short growing season.', ruleLabel:'SUSTAINABILITY RULE', rule:'Do not harvest natural mats faster than they regrow; any managed production must protect slow-recovering habitat.' },
      { id:'thermal', phase:'PHASE 3 · THERMAL SURVIVAL', title:'THERMAL EVIDENCE', evidence:'Very cold conditions and long storms can create prolonged habitat heat loss and high heating demand.', ruleLabel:'SURVIVAL / ENERGY RULE', rule:'Prioritize a strong thermal barrier and measured heating control, using passive gain when available without disturbing natural plant mats.' },
      { id:'structural', phase:'PHASE 4 · STRUCTURES & FORCES', title:'STRUCTURAL EVIDENCE', evidence:'Snow and long storms create structural loading concerns while construction and repairs must avoid repeated ground disturbance.', ruleLabel:'SAFETY / SITE RULE', rule:'Design stable support and connections for established snow/storm loading while keeping the site footprint and repeated disturbance low.' },
      { id:'geology', phase:'PHASE 5 · GEOLOGY', title:'GEOLOGICAL EVIDENCE', evidence:'Fractured rock, angular debris and seasonal meltwater deposits record breakdown and short-distance sediment movement; exact age, fossil evidence and active faults are not established.', ruleLabel:'LIMIT / UNCERTAINTY / PROTECTION RULE', rule:'Use low-disturbance monitoring and avoid repeated excavation or trampling of slow-recovering ground.' }
    ]
  },
  {
    id: 'bandersnatch', name: 'Bandersnatch', code: 'BA', icon: '🌾', subtitle: 'Golden Plains',
    cards: [
      { id:'ecosystem', phase:'PHASE 1 · ECOSYSTEMS', title:'ECOSYSTEM EVIDENCE', evidence:'Prairie roots, producers and grazers form an important food-web and soil system across productive grassland.', ruleLabel:'ECOLOGICAL SAFEGUARD', rule:'Keep native prairie connections intact and protect productive soil from fragmentation and erosion.' },
      { id:'plant', phase:'PHASE 2 · PLANT RESOURCES', title:'PLANT RESOURCE EVIDENCE', evidence:'Goldstem Grain can produce high-energy food and fibre efficiently across the productive prairie.', ruleLabel:'SUSTAINABILITY RULE', rule:'Avoid large monocultures and habitat conversion that reduce biodiversity or expose soil to erosion.' },
      { id:'thermal', phase:'PHASE 3 · THERMAL SURVIVAL', title:'THERMAL EVIDENCE', evidence:'Seasonal temperatures can range from about −30°C to +30°C, so one habitat must handle both winter heating and summer cooling.', ruleLabel:'SURVIVAL / ENERGY RULE', rule:'Use seasonal passive strategies and adaptive heating/cooling controls before increasing active energy use or development footprint.' },
      { id:'structural', phase:'PHASE 4 · STRUCTURES & FORCES', title:'STRUCTURAL EVIDENCE', evidence:'An exposed prairie structure must carry year-round loads and remain compact even though spreading out could simplify some structural problems.', ruleLabel:'SAFETY / SITE RULE', rule:'Keep a compact stable footprint and protect prairie habitat connections and productive soil.' },
      { id:'geology', phase:'PHASE 5 · GEOLOGY', title:'GEOLOGICAL EVIDENCE', evidence:'Productive soil overlies layered loose sediment and gravel, while limited rock exposure leaves the deeper bedrock history incomplete.', ruleLabel:'LIMIT / UNCERTAINTY / PROTECTION RULE', rule:'Protect productive prairie soil and prefer shallow or non-destructive evidence before deeper ground disturbance is considered.' }
    ]
  },
  {
    id: 'gimble', name: 'Gimble', code: 'GI', icon: '🌲', subtitle: 'Greatwood',
    cards: [
      { id:'ecosystem', phase:'PHASE 1 · ECOSYSTEMS', title:'ECOSYSTEM EVIDENCE', evidence:'Many native organisms depend on intact forest structure and connected habitat around lakes, rivers and forest interior.', ruleLabel:'ECOLOGICAL SAFEGUARD', rule:'Avoid extensive forest clearing, fragmentation and erosion near waterways.' },
      { id:'plant', phase:'PHASE 2 · PLANT RESOURCES', title:'PLANT RESOURCE EVIDENCE', evidence:'Ironwood can provide strong timber and durable fibre, but replacement takes many years.', ruleLabel:'SUSTAINABILITY RULE', rule:'Do not rely on large-scale logging; any use must account for slow replacement and connected forest habitat.' },
      { id:'thermal', phase:'PHASE 3 · THERMAL SURVIVAL', title:'THERMAL EVIDENCE', evidence:'Winter temperatures can reach about −40°C while summers can reach about +24°C, making winter heat retention the dominant thermal challenge.', ruleLabel:'SURVIVAL / ENERGY RULE', rule:'Use strong winter heat-retention and measured controls without clearing large forest areas for solar exposure or infrastructure.' },
      { id:'structural', phase:'PHASE 4 · STRUCTURES & FORCES', title:'STRUCTURAL EVIDENCE', evidence:'A compact forest structure must remain reliable through severe winter conditions without requiring a large cleared construction site.', ruleLabel:'SAFETY / SITE RULE', rule:'Design for established winter loading within a compact site and avoid clearing or fragmenting the surrounding forest.' },
      { id:'geology', phase:'PHASE 5 · GEOLOGY', title:'GEOLOGICAL EVIDENCE', evidence:'A weathered outcrop and rounded stream sediment provide a partial geological record, but forest cover and transported material limit site-wide certainty.', ruleLabel:'LIMIT / UNCERTAINTY / PROTECTION RULE', rule:'Use existing outcrops and stream evidence; do not clear or fragment forest simply to expose more rock.' }
    ]
  },
  {
    id: 'mimsy', name: 'Mimsy', code: 'MI', icon: '🪷', subtitle: 'Endless Wetlands',
    cards: [
      { id:'ecosystem', phase:'PHASE 1 · ECOSYSTEMS', title:'ECOSYSTEM EVIDENCE', evidence:'Wetland vegetation supports native organisms and the intact wetland stores water as part of its natural function.', ruleLabel:'ECOLOGICAL SAFEGUARD', rule:'Do not drain or destroy wetland vegetation and water-storage function to make human activity easier.' },
      { id:'plant', phase:'PHASE 2 · PLANT RESOURCES', title:'PLANT RESOURCE EVIDENCE', evidence:'Floatroot can provide edible seeds and flexible fibre while growing in saturated conditions where ordinary crops struggle.', ruleLabel:'SUSTAINABILITY RULE', rule:'Use the plant without converting the wetland into drained conventional fields or damaging wetland habitat.' },
      { id:'thermal', phase:'PHASE 3 · THERMAL SURVIVAL', title:'THERMAL EVIDENCE', evidence:'Warm, humid conditions create unwanted heat-gain and cooling challenges on saturated ground.', ruleLabel:'SURVIVAL / ENERGY RULE', rule:'Use shade, ventilation and measured control where useful; cooling cannot depend on draining or heavily altering the wetland.' },
      { id:'structural', phase:'PHASE 4 · STRUCTURES & FORCES', title:'STRUCTURAL EVIDENCE', evidence:'Saturated ground makes stable support and foundation behaviour a major structural question.', ruleLabel:'SAFETY / SITE RULE', rule:'Use limited, stable support that does not depend on draining, filling or destroying the wetland to create dry-ground conditions.' },
      { id:'geology', phase:'PHASE 5 · GEOLOGY', title:'GEOLOGICAL EVIDENCE', evidence:'Fine saturated sediment layers record repeated deposition, while very little bedrock is exposed and deeper crustal history remains highly uncertain.', ruleLabel:'LIMIT / UNCERTAINTY / PROTECTION RULE', rule:'Keep wetland hydrology intact; accept remaining uncertainty rather than drain or excavate the site simply to expose deeper material.' }
    ]
  }
];

export const councilContinentMap = Object.fromEntries(councilContinents.map((continent) => [continent.id, continent]));

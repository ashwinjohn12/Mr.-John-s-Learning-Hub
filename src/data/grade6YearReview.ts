import { yearBanksA } from './grade6YearBanksA';
import { yearBanksB } from './grade6YearBanksB';
import { yearBanksC } from './grade6YearBanksC';

export const grade6YearBanks={...yearBanksA,...yearBanksB,...yearBanksC};

export const grade6UnitMeta=[
 {slug:'positive-negative-numbers',label:'Unit 1 · Positive & Negative Numbers',href:'/courses/grade-6-math/positive-negative-numbers/unit-review/'},
 {slug:'coordinates-design',label:'Unit 2 · Coordinates & Design',href:'/courses/grade-6-math/coordinates-design/unit-review/'},
 {slug:'number-operations',label:'Unit 3 · Number Operations',href:'/courses/grade-6-math/number-operations/unit-review/'},
 {slug:'decimals-fractions',label:'Unit 4 · Decimals & Fractions',href:'/courses/grade-6-math/decimals-fractions/unit-review/'},
 {slug:'ratios-rates',label:'Unit 5 · Ratios & Rates',href:'/courses/grade-6-math/ratios-rates/unit-review/'},
 {slug:'algebra',label:'Unit 6 · Algebra',href:'/courses/grade-6-math/algebra/unit-review/'},
 {slug:'measurement',label:'Unit 7 · Measurement',href:'/courses/grade-6-math/measurement/unit-review/'},
 {slug:'patterns',label:'Unit 8 · Patterns',href:'/courses/grade-6-math/patterns/unit-review/'},
 {slug:'statistics',label:'Unit 9 · Statistics',href:'/courses/grade-6-math/statistics/unit-review/'}
];

export const yearSupportedGroups=grade6UnitMeta.map(unit=>({label:unit.label,questions:grade6YearBanks[unit.slug],count:3,href:unit.href}));
export const yearDiagnosticGroups=grade6UnitMeta.map(unit=>({label:unit.label,questions:grade6YearBanks[unit.slug],count:2,href:unit.href}));

export const patPartAGroups=[
 {label:'Integers',questions:grade6YearBanks['positive-negative-numbers'],count:4},
 {label:'Decimals & powers',questions:[...grade6YearBanks['number-operations'].slice(3),...grade6YearBanks['decimals-fractions'].slice(3)],count:4},
 {label:'Fractions',questions:grade6YearBanks['decimals-fractions'].slice(0,3),count:3},
 {label:'Rates, ratios & percent',questions:grade6YearBanks['ratios-rates'],count:4}
];

const partBCounts:Record<string,number>={
 'positive-negative-numbers':4,
 'coordinates-design':5,
 'number-operations':4,
 'decimals-fractions':5,
 'ratios-rates':4,
 'algebra':4,
 'measurement':5,
 'patterns':4,
 'statistics':5
};
export const patPartBGroups=grade6UnitMeta.map(unit=>({label:unit.label,questions:grade6YearBanks[unit.slug],count:partBCounts[unit.slug],href:unit.href}));

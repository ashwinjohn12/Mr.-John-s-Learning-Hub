export type MarsSystemId =
  | 'science'
  | 'navigation'
  | 'transportation'
  | 'landing'
  | 'survival'
  | 'operations'
  | 'presence';

export type MarsStatusId =
  | 'demonstrated'
  | 'developing'
  | 'challenge'
  | 'insufficient';

export const marsStatuses = [
  {
    id: 'demonstrated',
    label: 'Demonstrated',
    icon: '◆',
    short: 'Strong evidence shows this part of Mars readiness is well established.'
  },
  {
    id: 'developing',
    label: 'Developing',
    icon: '◒',
    short: 'Evidence is promising, but important gaps remain.'
  },
  {
    id: 'challenge',
    label: 'Major Challenge',
    icon: '▲',
    short: 'Evidence shows a major gap that must still be solved.'
  },
  {
    id: 'insufficient',
    label: 'Insufficient Evidence',
    icon: '○',
    short: 'We do not yet have enough evidence to make a defensible call.'
  }
] as const;

export const marsSystems = [
  { id: 'science', label: 'Science Knowledge', question: 'Do we understand Mars well enough?', icon: '◉' },
  { id: 'navigation', label: 'Navigation', question: 'Can we locate, track, and guide missions reliably?', icon: '⌖' },
  { id: 'transportation', label: 'Transportation', question: 'Can we move people and large cargo to Mars?', icon: '↗' },
  { id: 'landing', label: 'Landing', question: 'Can we safely place human-scale payloads on the surface?', icon: '▽' },
  { id: 'survival', label: 'Survival', question: 'Can we keep a crew alive and supplied?', icon: '◎' },
  { id: 'operations', label: 'Operations', question: 'Can humans, robots, and Earth work together effectively?', icon: '⌁' },
  { id: 'presence', label: 'Long-Term Presence', question: 'Could humans remain on Mars sustainably?', icon: '∞' }
] as const;

export const marsPhases = [
  {
    id: 'understand',
    number: '01',
    title: 'UNDERSTAND',
    question: 'What do we know—and how do we know it?',
    status: 'current'
  },
  {
    id: 'travel',
    number: '02',
    title: 'TRAVEL',
    question: 'Can we actually get there?',
    status: 'planned'
  },
  {
    id: 'survive',
    number: '03',
    title: 'SURVIVE',
    question: 'Can humans stay alive?',
    status: 'planned'
  },
  {
    id: 'operate',
    number: '04',
    title: 'OPERATE & DECIDE',
    question: 'Could the mission work—and what should happen next?',
    status: 'planned'
  }
] as const;

export const understandOperations = [
  { number: '01', id: 'locate-mars', title: 'Locate Mars', question: 'Where exactly are we trying to go?' },
  { number: '02', id: 'trust-evidence', title: 'Trust the Evidence', question: 'Why has our explanation of space changed?' },
  { number: '03', id: 'read-light', title: 'Read the Light', question: 'How can scientists learn about something they cannot touch?' },
  { number: '04', id: 'profile-mars', title: 'Profile Mars', question: 'What have robots taught us before humans arrive?' }
] as const;

export type JabberwockyPhaseAccess = 'active' | 'locked' | 'complete';
export type JabberwockyArchiveStatus = 'empty' | 'complete' | 'locked';
export type JabberwockyRatingTone = 'green' | 'yellow' | 'orange' | 'red';

/**
 * Canonical start-of-year state for Jabberwocky: Mission 2190.
 *
 * Student choices/progress are intentionally NOT stored here. They remain
 * device-local in the student's browser. This object represents only the
 * shared class storyline baseline that the site should return to for a new
 * expedition year.
 */
export const DEFAULT_EXPEDITION_STATE = {
  stateVersion: 1,
  missionStatus: 'ACTIVE',
  missionDay: 1,
  surveyCompletionPercent: 7,
  permanentHumanPopulation: 0,
  safeSettlementRegions: 'UNKNOWN',
  activePhase: 1,
  activeOperation: 1,
  phases: {
    1: 'active',
    2: 'locked',
    3: 'locked',
    4: 'locked',
    5: 'locked'
  } as Record<number, JabberwockyPhaseAccess>,
  continents: {
    gyre: { name: 'Gyre', rating: 'Promising', tone: 'yellow' },
    brillig: { name: 'Brillig', rating: 'Very Promising', tone: 'green' },
    manxome: { name: 'Manxome', rating: 'Promising', tone: 'yellow' },
    'slithy-toves': { name: 'Slithy Toves', rating: 'Difficult', tone: 'orange' },
    wabe: { name: 'Wabe', rating: 'Challenging', tone: 'orange' },
    bandersnatch: { name: 'Bandersnatch', rating: 'Excellent', tone: 'green' },
    gimble: { name: 'Gimble', rating: 'Very Promising', tone: 'green' },
    mimsy: { name: 'Mimsy', rating: 'Poor', tone: 'red' }
  } as Record<string, { name: string; rating: string; tone: JabberwockyRatingTone }>,
  archives: {
    gyre: defaultArchive(),
    brillig: defaultArchive(),
    manxome: defaultArchive(),
    'slithy-toves': defaultArchive(),
    wabe: defaultArchive(),
    bandersnatch: defaultArchive(),
    gimble: defaultArchive(),
    mimsy: defaultArchive()
  }
} as const;

function defaultArchive() {
  return {
    arrivalData: 'complete' as JabberwockyArchiveStatus,
    ecologicalSurvey: 'empty' as JabberwockyArchiveStatus,
    botanicalSurvey: 'empty' as JabberwockyArchiveStatus,
    thermalSystemsReport: 'empty' as JabberwockyArchiveStatus,
    engineeringReport: 'empty' as JabberwockyArchiveStatus,
    geologicalReport: 'empty' as JabberwockyArchiveStatus,
    finalJcecStatus: 'locked' as JabberwockyArchiveStatus
  };
}

/** Prefixes reserved for student-side Jabberwocky browser data. */
export const JABBERWOCKY_STUDENT_STORAGE_PREFIXES = ['jcec-', 'jabberwocky-'] as const;

/**
 * Return a fresh mutable copy for future teacher/class-state features.
 * This keeps the default object pristine so a new expedition can always
 * start from the same known baseline.
 */
export function createDefaultExpeditionState() {
  return JSON.parse(JSON.stringify(DEFAULT_EXPEDITION_STATE));
}

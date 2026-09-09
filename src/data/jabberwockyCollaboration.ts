export const jabberwockyWorkModes = {
  individual: {
    id: 'individual',
    label: 'Individual Pathfinder',
    icon: '👤',
    purpose: 'Personal prediction, reflection, reasoning, or accountability.',
    storage: 'Student device and/or Pathfinder Log.'
  },
  team: {
    id: 'team',
    label: 'Team Investigation',
    icon: '👥',
    purpose: 'Collaborative evidence gathering, discussion, analysis, and decision-making.',
    storage: 'Shared during class; not treated as submitted merely because it appears on a student device.'
  },
  archive: {
    id: 'archive',
    label: 'Continental Archive',
    icon: '🗂️',
    purpose: 'One official team finding that becomes part of the continent’s inherited scientific record.',
    storage: 'Teacher-managed or shared class archive when that workflow is implemented.'
  }
} as const;

export const jabberwockyTeamProtocol = [
  'Explore together',
  'Discuss the evidence',
  'Reach a team decision',
  'Record the official finding in the Continental Archive',
  'Update your individual Pathfinder Log'
] as const;

export const jabberwockyCollaborationRule =
  'Everyone explores → Team discusses → One official team decision → Each student reflects';

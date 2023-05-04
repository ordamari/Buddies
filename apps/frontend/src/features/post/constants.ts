import { ReactionType } from './enums/reactionType.enum';

export const MOMENT_SHORT_FORMAT = 'MMM D, YYYY';

export const REACTION_TYPE_EMOJI = {
  [ReactionType.LIKE]: '👍',
  [ReactionType.LOVE]: '😍',
  [ReactionType.FUNNY]: '😂',
  [ReactionType.SAD]: '😢',
  [ReactionType.ANGRY]: '😡',
  [ReactionType.INTERESTING]: '🤨',
  [ReactionType.SURPRISED]: '😮',
};

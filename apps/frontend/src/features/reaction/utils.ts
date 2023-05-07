import { REACTION_TYPE_EMOJI } from './constants';
import { ReactionType } from './enums/reactionType.enum';

export function getEmojiFromReactionType(type: ReactionType) {
  return REACTION_TYPE_EMOJI[type];
}

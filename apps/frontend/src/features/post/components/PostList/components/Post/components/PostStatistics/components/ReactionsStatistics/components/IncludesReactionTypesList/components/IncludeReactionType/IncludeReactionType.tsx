import { REACTION_TYPE_EMOJI } from '@/features/post/constants';
import { ReactionType } from '@/features/post/enums/reactionType.enum';
import { getEmojiFromReactionType } from '@/features/post/utils';
import { User } from '@/features/user/types/user.type';

type privateProps = {
  type: ReactionType;
  users: User[];
};

function IncludeReactionType({ type, users }: privateProps) {
  return <li className="reaction-type">{getEmojiFromReactionType(type)}</li>;
}
export default IncludeReactionType;

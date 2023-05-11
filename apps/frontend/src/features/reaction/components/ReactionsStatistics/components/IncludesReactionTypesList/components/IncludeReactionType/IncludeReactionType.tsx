import { ReactionType } from '@/features/reaction/enums/reactionType.enum';
import { getEmojiFromReactionType } from '@/features/reaction/utils';
import { User } from '@/features/user/types/user.type';

type privateProps = {
  type: ReactionType;
  users: User[];
};

function IncludeReactionType({ type, users }: privateProps) {
  const emoji = getEmojiFromReactionType(type);
  return <li className="reaction-type">{emoji}</li>;
}
export default IncludeReactionType;

import { globalUtil } from '@/common/utils/global.util';
import { ReactionType } from '@/features/reaction/enums/reactionType.enum';
import { Reaction } from '@/features/reaction/types/reaction.type';
import IncludeReactionType from './components/IncludeReactionType/IncludeReactionType';

type PrivateProps = {
  reactions: Reaction[];
};

function IncludesReactionTypesList({ reactions }: PrivateProps) {
  const includesReactionsTypes = globalUtil.getUniqueStringArray(
    reactions.map((reaction) => reaction.type),
  ) as ReactionType[];

  return (
    <ul className="includes-reaction-types-list">
      {includesReactionsTypes.map((type) => {
        const reactedThisReactionUsers = reactions
          .filter((reactions) => reactions.type === type)
          .map((reaction) => reaction.creator);
        return (
          <IncludeReactionType
            key={type}
            type={type}
            users={reactedThisReactionUsers}
          />
        );
      })}
    </ul>
  );
}
export default IncludesReactionTypesList;

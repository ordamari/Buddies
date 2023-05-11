import { Reaction } from '@/features/reaction/types/reaction.type';
import IncludesReactionTypesList from './components/IncludesReactionTypesList/IncludesReactionTypesList';
import NoReactions from './components/NoReactions/NoReactions';

type PrivateProps = {
  reactions: Reaction[];
};
function ReactionsStatistics({ reactions }: PrivateProps) {
  if (!reactions.length) return <NoReactions />;
  return (
    <div className="reactions-statistics">
      <IncludesReactionTypesList reactions={reactions} />
      <span className="amount">{reactions.length}</span>
    </div>
  );
}
export default ReactionsStatistics;

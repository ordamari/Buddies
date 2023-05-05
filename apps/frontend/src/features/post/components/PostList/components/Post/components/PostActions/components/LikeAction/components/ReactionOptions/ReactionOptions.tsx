import Lotties from '@/common/components/Lotties';
import useClickOutside from '@/common/hooks/useClickOutside';
import { ReactionType } from '@/features/post/enums/reactionType.enum';
import { getEmojiFromReactionType } from '@/features/post/utils';
import { useRef } from 'react';

type PrivateProps = {
  isShow: boolean;
  onOptionClick: (type: ReactionType) => void;
  closeOptions: () => void | Promise<void>;
};
const reactionTypes = Object.values(ReactionType);
function ReactionOptions({
  isShow,
  closeOptions,
  onOptionClick,
}: PrivateProps) {
  const containerRef = useRef<HTMLUListElement>(null);
  useClickOutside(containerRef, closeOptions.bind(null));

  function handleOptionClick(type: ReactionType) {
    onOptionClick(type);
    closeOptions();
  }

  return (
    <ul
      ref={containerRef}
      className={`reaction-options ${isShow ? 'show' : 'hide'}`}
    >
      {reactionTypes.map((reactionType) => {
        return (
          <li key={reactionType}>
            <button
              onClick={handleOptionClick.bind(null, reactionType)}
              className="reaction-option"
            >
              <Lotties lottie={reactionType} />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
export default ReactionOptions;

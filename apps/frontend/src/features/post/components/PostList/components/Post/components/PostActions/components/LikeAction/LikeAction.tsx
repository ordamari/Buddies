import Condition from '@/common/components/Condition';
import Icon from '@/common/components/Icon';
import useLongHover from '@/common/hooks/useLongHover';
import { useToggle } from '@/common/hooks/useToggle';
import useTranslation from '@/common/hooks/useTranslation';
import { ReactionType } from '@/features/post/enums/reactionType.enum';
import {
  ADD_REACTION_TO_POST,
  EDIT_REACTION_TYPE,
  REMOVE_REACTION,
} from '@/features/post/graphQL';
import { getEmojiFromReactionType } from '@/features/post/utils';
import { Reaction } from '@/features/post/types/reaction.type';
import { useMutation } from '@apollo/client';
import { useRef } from 'react';
import ReactionOptions from './components/ReactionOptions/ReactionOptions';
import { ArrayActions } from '@/common/hooks/useArray';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

type PrivateProps = {
  postId: number;
  loggedInUserReaction: Reaction | null;
  reactionsActions: ArrayActions<Reaction>;
};

function LikeAction({
  postId,
  loggedInUserReaction,
  reactionsActions,
}: PrivateProps) {
  const t = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const loggedInUser = useSelector((state: RootState) => state.loggedInUser);
  const [addReaction, addReactionHandler] = useMutation(ADD_REACTION_TO_POST);
  const [editType, editTypeHandler] = useMutation(EDIT_REACTION_TYPE);
  const [removeReaction, removeReactionHandler] = useMutation(REMOVE_REACTION);
  const [isShowReactionOptions, toggleIsShowReactionOptions] = useToggle();
  useLongHover(containerRef, showReactionOptions);

  const isAddReactionDisabled =
    addReactionHandler.loading ||
    editTypeHandler.loading ||
    removeReactionHandler.loading;

  function showReactionOptions() {
    if (!isAddReactionDisabled) toggleIsShowReactionOptions(true);
  }

  async function handleAddReaction(type: ReactionType) {
    if (loggedInUserReaction) {
      if (loggedInUserReaction.type !== type) {
        editType({
          variables: {
            id: loggedInUserReaction.id,
            type: type,
          },
        });
        reactionsActions.updateById(loggedInUserReaction.id, { type });
      }
    } else {
      const { data } = await addReaction({
        variables: {
          postId,
          type: type,
        },
      });
      const reaction = {
        ...data.addReactionToPost,
        creator: loggedInUser,
      } as Reaction;
      reactionsActions.add(reaction);
    }
  }

  function openReactionOptionsMobile(event: React.MouseEvent) {
    event.preventDefault();
    showReactionOptions();
  }

  function handleRemoveReaction() {
    if (loggedInUserReaction) {
      removeReaction({
        variables: {
          id: loggedInUserReaction.id,
        },
      });
      reactionsActions.removeById(loggedInUserReaction.id);
    }
  }

  function handleButtonClicked() {
    if (loggedInUserReaction) {
      handleRemoveReaction();
    } else {
      handleAddReaction(ReactionType.LIKE);
    }
  }

  return (
    <div
      ref={containerRef}
      onContextMenu={openReactionOptionsMobile}
      className="action-button-container full"
    >
      <ReactionOptions
        onOptionClick={handleAddReaction}
        isShow={isShowReactionOptions}
        closeOptions={toggleIsShowReactionOptions.bind(null, false)}
      />
      <button
        onClick={handleButtonClicked}
        disabled={isAddReactionDisabled}
        className="action-button"
      >
        <Condition
          condition={!loggedInUserReaction}
          fallback={
            loggedInUserReaction && (
              <>
                {
                  <>
                    <span>
                      {getEmojiFromReactionType(loggedInUserReaction.type)}
                    </span>
                    <span className={`reaction ${loggedInUserReaction.type}`}>
                      {t(`post.reactionType.${loggedInUserReaction.type}`)}
                    </span>
                  </>
                }
              </>
            )
          }
        >
          <Icon icon="like" />
          {t('post.like')}
        </Condition>
      </button>
    </div>
  );
}

export default LikeAction;

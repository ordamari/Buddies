import { ArrayActions } from '@/common/hooks/useArray';
import useTranslation from '@/common/hooks/useTranslation';
import { ADD_COMMENT_TO_POST } from '@/features/comment/graphQL';
import { Comment } from '@/features/comment/types/comment.type';
import ProfileImage from '@/features/user/components/ProfileImage/ProfileImage';
import Textarea from '@/layout/ui/Textarea';
import { RootState } from '@/store/store';
import { useMutation } from '@apollo/client';
import { RefObject } from 'react';
import { useSelector } from 'react-redux';

type PrivateProps = {
  textareaRef: RefObject<HTMLTextAreaElement>;
  postId: number;
  commentsActions: ArrayActions<Comment>;
};

function CommentTextarea({
  textareaRef,
  postId,
  commentsActions,
}: PrivateProps) {
  const [addComment, addCommentHandler] = useMutation(ADD_COMMENT_TO_POST);
  const loggedInUser = useSelector((state: RootState) => state.loggedInUser);
  const fullName = `${loggedInUser.firstName} ${loggedInUser.lastName}`;
  const t = useTranslation();

  async function handleAddComment(commentText: string) {
    const res = await addComment({
      variables: {
        postId,
        text: commentText,
      },
    });
    const comment = res.data.addCommentToPost;
    comment.creator = loggedInUser;
    commentsActions.add(comment);
    if (!textareaRef.current) return;
    textareaRef.current.value = '';
  }

  function handleSubmit(e?: React.FormEvent<HTMLFormElement>) {
    if (e) e.preventDefault();
    if (!textareaRef.current) return;
    const comment = textareaRef.current.value.trim();
    if (!comment) return;
    handleAddComment(comment);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }

  const isAddCommentDisabled = addCommentHandler.loading;

  return (
    <div className="comment-textarea-container flex">
      <ProfileImage
        width={40}
        height={40}
        src={loggedInUser.profileImageUrl}
        alt={fullName}
      />
      <form onSubmit={handleSubmit} className="full">
        <Textarea
          onKeyDown={handleKeyDown}
          ref={textareaRef}
          disabled={isAddCommentDisabled}
          placeholder={t('comment.writeComment')}
        />
      </form>
    </div>
  );
}
export default CommentTextarea;

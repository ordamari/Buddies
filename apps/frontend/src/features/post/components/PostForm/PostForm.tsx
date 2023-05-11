import useTranslation from '@/common/hooks/useTranslation';
import ProfileImage from '@/features/user/components/ProfileImage/ProfileImage';
import Textarea from '@/layout/ui/Textarea';
import { RootState } from '@/store/store';
import { useMutation } from '@apollo/client';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { CREATE_POST } from '../../graphQL';
import { Post } from '../../types/post.type';

type PrivateProps = {
  afterSubmit?: (post: Post) => void;
};

function PostForm({ afterSubmit }: PrivateProps) {
  const loggedInUser = useSelector((state: RootState) => state.loggedInUser);
  const [createPost, createPostHandler] = useMutation(CREATE_POST);
  const t = useTranslation();
  const fullName = `${loggedInUser.firstName} ${loggedInUser.lastName}`;
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  async function handleSubmit(event?: React.FormEvent<HTMLFormElement>) {
    if (event) event.preventDefault();
    if (!textareaRef.current || createPostHandler.loading) return;
    const postText = textareaRef.current.value.trim();
    if (!postText) return;
    textareaRef.current.value = '';
    const res = await createPost({
      variables: {
        text: postText,
      },
    });
    const createdPost = {
      ...res.data.createPost,
      creator: loggedInUser,
      comments: [],
      reactions: [],
    } as Post;

    if (afterSubmit) afterSubmit(createdPost);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }

  return (
    <div className="post-form">
      <ProfileImage
        width={50}
        height={50}
        src={loggedInUser.profileImageUrl}
        alt={fullName}
      />
      <form onSubmit={handleSubmit}>
        <Textarea
          onKeyDown={handleKeyDown}
          ref={textareaRef}
          placeholder={t('post.postForm')}
        />
      </form>
    </div>
  );
}

export default PostForm;

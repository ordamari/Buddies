import FileInput from '@/layout/ui/FileInput';
import { useMutation } from '@apollo/client';
import Image from 'next/image';
import Icon from '@/common/components/Icon';
import { UPDATE_PROFILE_IMAGE } from '@/features/user/graphQL';

type PrivateProps = {
  profileImageUrl: string | null;
  isEditable: boolean;
};

function ProfileImage({ profileImageUrl, isEditable }: PrivateProps) {
  const [updateProfileImage, updateProfileImageHandler] =
    useMutation(UPDATE_PROFILE_IMAGE);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!event.target.files) return;
    const file = event.target.files[0];
    await updateProfileImage({ variables: { file: file } });
  };

  const getSrc = () => {
    if (updateProfileImageHandler.loading) return '/gifs/loader.gif';
    if (profileImageUrl) return profileImageUrl;
    return '/images/default-profile-image.jpg';
  };
  return (
    <div className="profile-image-container">
      <Image src={getSrc()} alt="profile-image" width={200} height={200} />
      {isEditable && (
        <FileInput onChange={handleFileChange} className="profile-image-input">
          <Icon icon="edit" />
        </FileInput>
      )}
    </div>
  );
}

export default ProfileImage;

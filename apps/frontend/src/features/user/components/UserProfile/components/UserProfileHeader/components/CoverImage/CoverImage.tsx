import useTranslation from '@/common/hooks/useTranslation';
import { UPDATE_COVER_IMAGE } from '@/features/user/graphQL';
import Button from '@/layout/ui/Button';
import FileInput from '@/layout/ui/FileInput';
import { useMutation } from '@apollo/client';
import Image from 'next/image';

type PrivateProps = {
  coverImageUrl: string | null;
  isEditable: boolean;
};

function CoverImage({ coverImageUrl, isEditable }: PrivateProps) {
  const t = useTranslation();
  const [updateCoverPhoto, updateCoverPhotoHandler] =
    useMutation(UPDATE_COVER_IMAGE);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!event.target.files) return;
    const file = event.target.files[0];
    await updateCoverPhoto({ variables: { file: file } });
  };

  const getSrc = () => {
    if (updateCoverPhotoHandler.loading) return '/gifs/loader.gif';
    if (coverImageUrl) return coverImageUrl;
    return '/images/default-cover-photo.jpg';
  };

  return (
    <div className="cover-photo-container">
      <Image src={getSrc()} alt="Cover photo" width={920} height={350} />
      {isEditable && (
        <FileInput onChange={handleFileChange} className="cover-photo-input">
          <Button asDiv={true} icon="edit" className="black-opacity small">
            {t('user.changeCoverPhoto')}
          </Button>
        </FileInput>
      )}
    </div>
  );
}
export default CoverImage;

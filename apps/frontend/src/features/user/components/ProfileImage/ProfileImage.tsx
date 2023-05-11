import Image from 'next/image';
type privateProps = {
  src: string;
  alt?: string;
  width: number;
  height: number;
  className?: string;
};

function ProfileImage({
  src,
  alt = '',
  className = '',
  ...otherProps
}: privateProps) {
  const getProfileImageSrc = () => {
    if (src) return src;
    return '/images/default-profile-image.jpg';
  };
  return (
    <Image
      className={className}
      src={getProfileImageSrc()}
      alt={alt}
      {...otherProps}
    />
  );
}

export default ProfileImage;

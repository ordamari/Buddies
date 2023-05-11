import Lottie from 'lottie-react';
import like from '../assets/lotties/like.json';
import love from '../assets/lotties/love.json';
import angry from '../assets/lotties/angry.json';
import sad from '../assets/lotties/sad.json';
import surprised from '../assets/lotties/surprised.json';
import interesting from '../assets/lotties/interesting.json';
import funny from '../assets/lotties/funny.json';

type LottieOptions =
  | 'LIKE'
  | 'LOVE'
  | 'ANGRY'
  | 'SAD'
  | 'SURPRISED'
  | 'FUNNY'
  | 'INTERESTING';
type PrivateProps = {
  lottie: LottieOptions;
};
function Lotties({ lottie }: PrivateProps) {
  switch (lottie) {
    case 'LIKE':
      return <Lottie animationData={like} />;
    case 'LOVE':
      return <Lottie animationData={love} />;
    case 'ANGRY':
      return <Lottie animationData={angry} />;
    case 'SAD':
      return <Lottie animationData={sad} />;
    case 'SURPRISED':
      return <Lottie animationData={surprised} />;
    case 'INTERESTING':
      return <Lottie animationData={interesting} />;
    case 'FUNNY':
      return <Lottie animationData={funny} />;
    default:
      return <span>?{lottie}?</span>;
  }
}
export default Lotties;

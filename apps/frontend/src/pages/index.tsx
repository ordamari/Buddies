import { RootState } from '@/store/store';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function Home() {
  const auth = useSelector((state: RootState) => state.auth);
  return (
    <>
      <div className="home-page page">
        <Link href={'/authentication'}>authentication</Link>
        <Link href={'/post'}>post</Link>
      </div>
    </>
  );
}

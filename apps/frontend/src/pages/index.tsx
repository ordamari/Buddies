import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="home-page page">
        <Link href={'/authentication'}>authentication</Link>
        <Link href={'/post'}>post</Link>
      </div>
    </>
  );
}

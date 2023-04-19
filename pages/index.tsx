import { CardData } from '@/pages/api/cards';
import Items from '@/components/Items';
import HomeImage from '@/components/HomeImage';

type Props = { posts: CardData[] };

export default function Home(props: Props) {
  return (
    <>
      <HomeImage />
      <Items posts={props.posts} />
    </>
  );
}
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/cards');
  const posts = await res.json();
  return { props: { posts: posts } };
}

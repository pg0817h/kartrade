import { CardData } from '@/pages/api/cards';
import Items from '@/components/Items';
import HomeImage from '@/components/HomeImage';
import Footer from '@/components/Footer';

type Props = { posts: CardData[] };

export default function Home(props: Props) {
  return (
    <>
      <HomeImage />
      <Items posts={props.posts} />
      <Footer />
    </>
  );
}
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/cards');
  const posts = await res.json();
  return { props: { posts: posts } };
}

import { CardData } from '@/pages/api/cards';
import Items from '@/components/Items';
import { GetServerSidePropsContext } from 'next';

type Props = { posts: CardData[] };

export default function Home(props: Props) {
  return (
    <>
      <Items posts={props.posts} />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { s: query } = context?.query;
  let res;
  if (query) {
    res = await fetch(`http://localhost:3000/api/cards/${query}`);
  } else {
    res = await fetch(`http://localhost:3000/api/cards`);
  }
  const posts = await res.json();
  return { props: { posts: posts } };
}

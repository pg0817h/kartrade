import { CardData } from '@/pages/api/cards';
import Items from '@/components/Items';
import { GetServerSidePropsContext } from 'next';

type Props = { posts: CardData[] };

export default function Home(props: Props) {
  return <Items posts={props.posts} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { s: sort, f: searchTerm } = context?.query;
  let res;
  //res = await fetch(`http://localhost:3000/api/cards/${query}`);
  // construct the URL of the API endpoint based on the values of the `source` and `category` query parameters
  let url = 'http://localhost:3000/api/sort/cards?';

  if (sort) {
    url += `sort=${sort}&`;
  }
  if (searchTerm) {
    url += `search=${searchTerm}&`;
  }
  //http://localhost:3000/sort?s=price_inc&f=team
  url = url.slice(0, -1);
  console.log('url', url);
  res = await fetch(url);
  const posts = await res.json();
  return { props: { posts: posts } };
}

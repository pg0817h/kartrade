import { CardData } from '@/pages/api/cards';
import Items from '@/components/Items';
import { GetServerSidePropsContext } from 'next';
import EmptyResult from '@/components/EmptyResult';
import SearhResult from '@/components/searchResult';

type Props = { posts: CardData[]; searchTerm: String };

export default function Home({ posts, searchTerm }: Props) {
  return (
    <>
      {posts.length ? (
        <SearhResult searchTerm={searchTerm} resultNum={posts.length} />
      ) : (
        <EmptyResult searchTerm={searchTerm} />
      )}
      <Items posts={posts} />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { s: sort, f: searchTerm } = context?.query;
  let res;
  let url = 'http://localhost:3000/api/sort/cards?';

  if (sort) {
    url += `sort=${sort}&`;
  }
  if (searchTerm) {
    url += `search=${searchTerm}&`;
  }
  //http://localhost:3000/sort?s=price_inc&f=team
  url = url.slice(0, -1);
  res = await fetch(url);
  const posts = await res.json();
  return { props: { posts: posts, searchTerm } };
}

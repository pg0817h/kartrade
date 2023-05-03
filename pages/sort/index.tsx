import { CardData } from '@/pages/api/cards';
import Items from '@/components/Items/Items';
import { GetServerSidePropsContext } from 'next';
import EmptyResult from '@/components/EmptyResult/EmptyResult';
import SearhResult from '@/components/SearchResult/SearchResult';
import { fetchCards } from '@/service/posts';

type Props = { posts: CardData[]; search: String };

interface CardSearchParams {
  sort: string | string[] | undefined;
  search: string | string[] | undefined;
}

export default function Home({ posts, search }: Props) {
  return (
    <>
      {search && (
        <>
          {posts.length ? (
            <SearhResult searchTerm={search} resultNum={posts.length} />
          ) : (
            <EmptyResult searchTerm={search} />
          )}
        </>
      )}
      <Items posts={posts} />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { s: sort, f: search } = context?.query;
  const params: CardSearchParams = { sort, search };
  const posts = await fetchCards(params);
  return {
    props: { posts: posts, search: search || null },
  };
}

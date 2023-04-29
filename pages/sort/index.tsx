import { CardData } from '@/pages/api/cards';
import Items from '@/components/Items';
import { GetServerSidePropsContext } from 'next';
import EmptyResult from '@/components/EmptyResult';
import SearhResult from '@/components/SearchResult';
import { fetchCards } from '@/service/posts';

type Props = { posts: CardData[]; searchTerm: String };

interface CardSearchParams {
  sort: string | string[] | undefined;
  search: string | string[] | undefined;
}

export default function Home({ posts, searchTerm }: Props) {
  return (
    <>
      {searchTerm && (
        <>
          {posts.length ? (
            <SearhResult searchTerm={searchTerm} resultNum={posts.length} />
          ) : (
            <EmptyResult searchTerm={searchTerm} />
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

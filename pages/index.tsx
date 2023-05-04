import HomeImage from '@/components/HomeImage/HomeImage';
import Footer from '@/components/Footer/Footer';
import { CardData } from '@/pages/api/cards';
import Items from '@/components/Items/Items';
import { GetServerSidePropsContext } from 'next';
import EmptyResult from '@/components/EmptyResult/EmptyResult';
import SearhResult from '@/components/SearchResult/SearchResult';
import { fetchCards } from '@/service/posts';
import { useRouter } from 'next/router';

type Props = { posts: CardData[]; search: string | null };

export default function Home({ posts, search }: Props) {
  const router = useRouter();

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
      {router.pathname === '/' &&
        Object.values(router.query).every((q) => q === undefined) && (
          <HomeImage />
        )}
      <Items posts={posts} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { search } = context.query;
  const posts = await fetchCards(context.query);
  return {
    props: { posts: posts, search: search ?? null },
  };
}

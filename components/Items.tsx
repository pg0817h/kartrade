import Item from './Item';
import { CardData } from '@/pages/api/get-cards';
type Props = { posts: CardData[] };

export default function Items({ posts }: Props) {
  return (
    <>
      {posts.map((post) => (
        <div>
          <Item key={post.id} post={post} />
        </div>
      ))}
    </>
  );
}

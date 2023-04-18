import React from 'react';
import { useRouter } from 'next/router';
import Item from './Item';
import { CardData } from '@/pages/api/cards';
import SortBar from './SortBar';
type Props = { posts: CardData[] };

const Items: React.FC<Props> = ({ posts }: Props) => {
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      router.push(`search/?s=${e.target.value}`);
    }
  };

  return (
    <>
      <SortBar handleChange={handleChange} />
      {posts.map((post) => (
        <div key={post.id}>
          <Item post={post} />
        </div>
      ))}
    </>
  );
};
export default Items;

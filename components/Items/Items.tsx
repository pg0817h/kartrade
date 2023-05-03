import React from 'react';
import Item from '../Item/Item';
import { CardData } from '@/pages/api/cards';
type Props = { posts: CardData[] };

const Items: React.FC<Props> = ({ posts }: Props) => {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <Item post={post} />
        </div>
      ))}
    </>
  );
};
export default Items;

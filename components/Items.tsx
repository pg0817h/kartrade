import React from 'react';
import Item from './Item';
import { CardData } from '@/pages/api/cards';
type Props = { posts: CardData[] };

const Items: React.FC<Props> = ({ posts }: Props) => {
  return (
    <>
      {posts.map((post) => (
        <div>
          <Item key={post.id} post={post} />
        </div>
      ))}
    </>
  );
};
export default Items;

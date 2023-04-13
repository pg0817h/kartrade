import React, { useEffect, useState } from 'react';
import Item from './Item';
import { CardData } from '@/pages/api/cards';
import SortBar from './SortBar';
type Props = { posts: CardData[] };

const Items: React.FC<Props> = ({ posts }: Props) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [sortedPosts, setSortedPosts] = useState(posts);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };
  useEffect(() => {
    const sorted = [...posts];
    if (selectedValue === 'price_inc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (selectedValue === 'price_dec') {
      sorted.sort((a, b) => b.price - a.price);
    }
    setSortedPosts(sorted);
  }, [selectedValue, posts]);
  return (
    <>
      <SortBar handleChange={handleChange} />
      {sortedPosts.map((post) => (
        <div key={post.id}>
          <Item post={post} />
        </div>
      ))}
    </>
  );
};
export default Items;

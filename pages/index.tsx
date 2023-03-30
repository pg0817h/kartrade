import { CardData } from '@/pages/api/get-cards';
import Items from '@/components/Items';
import { homeStyles } from '../styles/homeStyles';

type Props = { posts: CardData[] };

export default function Home(props: Props) {
  const { classes } = homeStyles();
  return (
    <div className={classes.pageWrapper}>
      <div className={classes.itemsContainer}>
        <Items posts={props.posts} />
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/get-cards');
  const posts = await res.json();
  return { props: { posts: posts } };
}

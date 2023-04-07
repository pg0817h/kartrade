import Details from '@/components/Details';
import { homeStyles } from '../../styles/homeStyles';
import { DetailData } from '@/pages/api/card/[id]';
import { CardData } from '@/pages/api/cards';
type CardProps = CardData;
type Props = { details: DetailData[] };
type PostParams = {
  id: string;
};

export default function Cards(props: Props) {
  const { classes } = homeStyles();
  return (
    <>
      <div className={classes.pageWrapper}>
        <div className={classes.itemsContainer}>
          <Details details={props.details} />
        </div>
      </div>
    </>
  );
}
export async function getStaticPaths() {
  // Fetch the list of all card IDs from an API
  const res = await fetch('http://localhost:3000/api/cards');
  const data = await res.json();
  // Map over the IDs and return an array of objects with `params` key and `id` value
  const paths = data.map((card: CardProps) => ({
    params: { id: card.id.toString() },
  }));

  // Return the object with `paths` key
  return { paths, fallback: false };
}
export async function getStaticProps({ params }: { params: PostParams }) {
  const postId = params.id;
  const res = await fetch(`http://localhost:3000/api/card/${postId}`);
  const details = await res.json();
  return { props: { details: details } };
}

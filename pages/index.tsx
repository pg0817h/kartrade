import { MantineProvider } from '@mantine/core';
import { CardData } from '@/pages/api/get-cards';
import Items from '@/components/Items';
import { homeStyles } from '../styles/homeStyles';

type Props = { posts: CardData[] };

export default function Home(props: Props) {
  const { classes } = homeStyles();
  return (
    <MantineProvider
      theme={{
        colors: {
          black: ['#1A1A1A'],
          white: ['#FFFFFF', '#F7F8FA'],
          gray: ['#777777', '#E5E5E5', '#515151'],
          green: ['#30BE76'],
          red: ['#F93737'],
          yellow: ['#FFBF43'],
        },
        fontFamily: 'NeueHaasUnica',
        headings: {
          sizes: {
            h1: { fontSize: '60px', fontWeight: '500', lineHeight: '60px' },
            h2: { fontSize: '35px', fontWeight: '500', lineHeight: '32px' },
            h3: { fontSize: '28px', fontWeight: '500', lineHeight: '32px' },
          },
          fontFamily: 'NeueHaasUnica',
        },
        shadows: {
          md: '0px 6px 20px rgba(13, 51, 32, 0.1)',
        },
      }}
    >
      <div className={classes.pageWrapper}>
        <div className={classes.itemsContainer}>
          <Items posts={props.posts} />
        </div>
      </div>
    </MantineProvider>
  );
}
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/get-cards');
  const posts = await res.json();
  return { props: { posts: posts } };
}

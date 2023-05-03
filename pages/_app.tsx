import { useState, useRef } from 'react';
import { MantineProvider } from '@mantine/core';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { homeStyles } from '../styles/homeStyles';
import Navbar from '@/components/Navigation/Navigation';
import SortBar from '@/components/SortBar/SortBar';
import SearchBar from '@/components/SearchBar/SearchBar';

export default function App({ Component, pageProps }: AppProps) {
  const { classes } = homeStyles();
  const { showSortBar } = pageProps || {};
  const [isSearchOpen, setSearchOpen] = useState(false);
  const searchIconRef = useRef(null);
  const handleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colors: {
          black: ['#1a1a1a'],
          white: ['#FFFFFF', '#F7F8FA'],
          gray: ['#777777', '#E5E5E5', '#515151'],
          green: ['#30BE76'],
          red: ['#F93737'],
          yellow: ['#FFBF43'],
        },
        fontFamily: 'NeueHaasUnica',
        headings: {
          sizes: {
            h1: {
              fontSize: '60px',
              fontWeight: 500,
              lineHeight: '60px',
            },
            h2: { fontSize: '35px', fontWeight: 500, lineHeight: '32px' },
            h3: {
              fontSize: '28px',
              fontWeight: 500,
              lineHeight: '32px',
            },
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
          <Navbar handleSearch={handleSearch} searchIconRef={searchIconRef} />
          {isSearchOpen && (
            <SearchBar
              setSearchClose={() => setSearchOpen(false)}
              searchIconRef={searchIconRef}
            />
          )}
          {!showSortBar && <SortBar />}
          <Component {...pageProps} />
        </div>
      </div>
    </MantineProvider>
  );
}

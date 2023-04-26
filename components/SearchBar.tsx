import React, { useState } from 'react';
import Image from 'next/image';
import { useStyles } from './SearchBarStyles';
import { useRouter } from 'next/router';
import searchIcon from '../public/SearchIcon.png';
import SearchHistory from './SearchHistory';

const SearchBar: React.FC = () => {
  const { classes } = useStyles();
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();
  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const url = router.asPath;
      const queryParams = new URLSearchParams(router.asPath.split('?')[1]);
      const fValue = queryParams.get('f');
      if (fValue) {
        queryParams.set('f', searchValue);
        router.push(`${router.pathname}?${queryParams.toString()}`);
      } else if (url.includes('sort?')) {
        router.push(`${router.asPath}f=${searchValue}&`);
      } else {
        router.push(`sort?f=${searchValue}&`);
      }
    }
  };

  return (
    <>
      <div className={classes.historyWrapper}>
        <div className={classes.searchContainer}>
          <div className={classes.searchBarContainer}>
            <div className={classes.searchBarBox}>
              <Image alt="logoIcon" height={24} src={searchIcon} />
              <input
                className={classes.searchBarText}
                placeholder="Search by card, person or group"
                onKeyDown={handleSubmit}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            <div className={classes.searchBarBorder}>&nbsp;</div>
          </div>

          <SearchHistory />
        </div>
      </div>
    </>
  );
};
export default SearchBar;

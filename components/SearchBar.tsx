import React from 'react';
import Image from 'next/image';
import { useStyles } from './SearchBarStyles';
import searchIcon from '../public/SearchIcon.png';
import SearchHistory from './SearchHistory';

const SearchBar: React.FC = () => {
  const { classes } = useStyles();

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

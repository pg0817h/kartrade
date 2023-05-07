import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useStyles } from './styles';
import { useRouter } from 'next/router';
import searchIcon from '../../public/SearchIcon.png';
import SearchHistory from '../SearchHistory/SearchHistory';
import queryString from 'query-string';
import { useClickAway } from 'react-use';

interface Props {
  setSearchClose: () => void;
}

const SearchBar: React.FC<Props> = ({ setSearchClose }: Props) => {
  const { classes } = useStyles();
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();
  const searchBarRef = useRef<HTMLInputElement>(null);
  useClickAway(searchBarRef, () => {
    setSearchClose();
  });
  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const url = queryString.stringifyUrl({
        url: `${window.location.href}`,
        query: { ...router.query, search: searchValue },
      });
      router.push(url);
      setSearchClose();
    }
  };

  return (
    <>
      <div className={classes.historyWrapper} ref={searchBarRef}>
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

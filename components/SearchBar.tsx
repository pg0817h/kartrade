import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useStyles } from './SearchBarStyles';
import { useRouter } from 'next/router';
import searchIcon from '../public/SearchIcon.png';
import SearchHistory from './SearchHistory';

interface Props {
  setSearchClose: () => void;
  searchIconRef: React.RefObject<HTMLInputElement>;
}

const SearchBar: React.FC<Props> = ({
  setSearchClose,
  searchIconRef,
}: Props) => {
  const { classes } = useStyles();
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();
  const searchBarRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchIconRef?.current &&
        searchBarRef.current &&
        !searchIconRef.current.contains(e.target as Node) &&
        !searchBarRef.current.contains(e.target as Node)
      ) {
        setSearchClose();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
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

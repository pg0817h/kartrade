import React from 'react';
import { useStyles } from './barStyles';
import { useRouter } from 'next/router';

const SortBar: React.FC = () => {
  const { classes } = useStyles();
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      const url = router.asPath;
      const queryParams = new URLSearchParams(router.asPath.split('?')[1]);
      const sValue = queryParams.get('s');
      if (sValue) {
        queryParams.set('s', e.target.value);
        router.push(`${router.pathname}?${queryParams.toString()}&`);
      } else if (url.includes('sort?')) {
        router.push(`${router.asPath}s=${e.target.value}&`);
      } else {
        router.push(`sort?s=${e.target.value}&`);
      }
    }
  };
  return (
    <div className={classes.sortBarWrapper}>
      <select
        name="price"
        className={classes.selectBox}
        onChange={handleChange}
      >
        <option value="">Price ($)</option>
        <option value="price_inc">Price: low to high</option>
        <option value="price_dec">Price: high to low</option>
      </select>
    </div>
  );
};

export default SortBar;

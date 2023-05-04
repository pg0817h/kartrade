import React from 'react';
import { useStyles } from './styles';
import { useRouter } from 'next/router';
import queryString from 'query-string';

const SortBar: React.FC = () => {
  const { classes } = useStyles();
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      const url = queryString.stringifyUrl({
        url: `${window.location.href}`,
        query: { ...router.query, sort: e.target.value },
      });
      router.push(url);
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

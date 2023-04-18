import React, { ChangeEvent } from 'react';
import { useStyles } from './barStyles';
type Props = {
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};
const SortBar: React.FC<Props> = ({ handleChange }: Props) => {
  const { classes } = useStyles();
  return (
    <>
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
    </>
  );
};

export default SortBar;

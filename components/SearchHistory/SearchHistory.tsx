import React from 'react';
import { useStyles } from './styles';

const SearchHistory: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div>
      <div className={classes.searchHistoryWapper}>
        <span className={classes.searchHistoryBar}>
          <div>History</div>
          <div className={classes.clearText}>Delete All</div>
        </span>
        <div className={classes.noHistoryContainer}>
          <span className={classes.noHistory}>No History</span>
        </div>
      </div>
    </div>
  );
};
export default SearchHistory;

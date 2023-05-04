import React from 'react';
import { useStyles } from '../EmptyResult/styles';

type Props = { searchTerm: String; resultNum: Number };

const SearhResult: React.FC<Props> = ({ searchTerm, resultNum }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.searchResultContainer}>
      <div>Searched</div>
      <div className={classes.searchTermResult}>{`'${searchTerm}'`}</div>
      <div className={classes.resultText}>
        {resultNum > 1 ? `${resultNum} Results` : `${resultNum} Result`}
      </div>
    </div>
  );
};
export default SearhResult;

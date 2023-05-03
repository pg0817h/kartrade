import React from 'react';
import { useStyles } from './styles';

type Props = { searchTerm: String };

const EmptyResult: React.FC<Props> = ({ searchTerm }: Props) => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <span>Sorry,</span>
      <span className={classes.searchTerm}> '{searchTerm}' </span>
      <span>
        returned no results. Please search another word or try checking the
        spelling
      </span>
    </div>
  );
};

export default EmptyResult;

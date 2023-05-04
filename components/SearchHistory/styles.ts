import { createStyles } from '@mantine/core';
export const useStyles = createStyles((theme) => ({
  searchHistoryWapper: {
    width: '100%',
    marginTop: '5%',
  },
  searchHistoryBar: {
    display: 'flex',
    fontSize: '14px',
    justifyContent: 'space-between',
  },
  clearText: {
    color: theme.colors.gray[0],
  },
  noHistoryContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '25vh',
  },
  noHistory: {
    color: theme.colors.gray[0],
    fontSize: '14px',
  },
}));

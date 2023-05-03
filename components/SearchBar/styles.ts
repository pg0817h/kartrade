import { createStyles } from '@mantine/core';
export const useStyles = createStyles((theme) => ({
  historyWrapper: {
    position: 'fixed',
    width: '100%',
    maxWidth: '420px',
    backgroundColor: theme.colors.white[0],
    height: '40vh',
    marginTop: '50px',
  },
  searchContainer: {
    display: 'flex',
    margin: '0 10% 0 10%',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  searchBarContainer: {
    height: '10%',
  },
  searchBarBorder: {
    marginTop: '2%',
    borderTop: '1px solid rgb(216, 216, 216)',
  },
  searchBarBox: {
    paddingTop: '10%',
    fontSize: '16px',
    color: theme.colors.gray[1],
    display: 'flex',
    alignItems: 'center',
  },
  searchBarText: {
    marginLeft: '1%',
    width: '100%',
    border: 'none',
  },
}));

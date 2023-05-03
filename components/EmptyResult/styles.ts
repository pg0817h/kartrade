import { createStyles } from '@mantine/core';
export const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.white,
    minHeight: '100vh',
    padding: '50% 20% 50% 20%',
    textAlign: 'center',
    fontSize: '1em',
    color: '#646464',
  },
  searchTerm: {
    color: theme.colors.black[0],
  },
  resultText:{
    color: theme.colors.black[0],
    fontSize: '1.2em'
  },
  searchTermResult: {
    fontSize: '2em',
    color: theme.colors.black[0],
  },
  searchResultContainer: {
    backgroundColor: theme.colors.white[0],
    paddingTop: '10%',
    textAlign: 'center',
    borderBottom: '1px solid rgb(216, 216, 216)',
    height: '200px',
    color: '#646464',
    fontSize: '1em',
  },
}));

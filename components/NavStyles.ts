import { createStyles,em } from '@mantine/core';
export const useStyles = createStyles((theme) => ({
  navWrapper: {
    width: '100%',
    maxWidth: '420px',
    height: '50px',
    borderBottom: '1px solid rgb(216, 216, 216)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1em 1.5em',
    position: 'fixed',
    backgroundColor: theme.colors.white[0],
    boxSizing: 'border-box'
  },
  logoContainer: {
    width: '141px',
    height: '29px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  },
  menuContainer: {
    width: '30%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
  }));
  
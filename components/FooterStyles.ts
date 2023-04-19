import { createStyles } from '@mantine/core';
export const useStyles = createStyles((theme) => ({
  footerWrapper: {
    width: '100%',
    height: '295px',
    padding: '35px 25px 25px',
    backgroundColor: theme.colors.white[0],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flexStart',
    color: theme.colors.black[0],
  },
  footerList: {
   padding: '0',
    li: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '34px',
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        listStyle: 'none',
        boxSizing: 'border-box'
    
    }
   
    
  },
  footerRightText: {
    height: '34px',
    fontSize: '0.6rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

import { createStyles } from '@mantine/core';
export const useStyles = createStyles((theme) => ({
    sortBarWrapper: {
        border: 'none',
        width: '100%',
        height: '50px',
        marginTop: '50px',
        display: 'flex',
        alignItems:'center',
        justifyContent: 'flex-start',
        padding: '0px 1.5em',
        borderBottom: '1px solid rgb(216, 216, 216)',
        boxSizing: 'border-box',
        backgroundColor: theme.colors.white[0],
    },
    selectBox: {
        display: 'inline-block',
        border: 'none',
        width:'auto',
        height: 'auto',
        fontSize: '0.8rem',
        padding: '1em 0px',
        color: theme.colors.gray[0],
    },
    pathBar: {
        display:'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: '0.8em'
    },
    icon:{
        marginLeft: '5px',
        marginRight: '5px',
        width: '0.8em',
        height: '0.8em'

    },
    pathBarhome: {
        color: theme.colors.gray[0],
        cursor: 'pointer'
    },
    pathBarDetail: {
        color:theme.colors.black,

    }

    
  }));
  
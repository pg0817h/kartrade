import { CSSProperties } from '@emotion/serialize';
import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
    container: {
        borderBottom: '1px solid rgb(216, 216, 216)',
        backgroundColor: theme.colors.white,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: '25px',
      },
    imgContainer: {
        width: '100%',
        padding: '1.5em 0px',
        backgroundColor: theme.colors.white,
        borderBottom: '1px solid rgb(216, 216, 216)',
        justifyContent: 'center'
      },
    contentContainer: {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileContainer: {
        display: 'flex',
        width: '100%',
        height: '81.41px',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: `1px solid rgb(216,216,216)`,
        color: theme.colors.gray[2]
    },
    profileBox: {
      display: 'flex',
      alignItems: 'center',
     
    },
    imgNickname: {
        width: '38px',
        height: '38px',
        borderRadius: '50%',
        marginRight: '9px'
      },
    messageBox: {
        display: 'flex',
        alignItems:'center',
        fontWeight: 'lighter'
       
    },
    infoContainer: {
        padding: '2em 0px 1em',
        borderBottom: '1px solid rgb(216,216,216)',

    },
    infoHeader: {
        margin: '0px 0px 0.1em',
        fontSize: theme.headings.sizes['h3'].fontSize,
        color: theme.colors.black,
        lineHeight: theme.headings.sizes['h3'].lineHeight
      
    },
    messageIcon: {
      width: '19px',
      height: '19px',
      marginRight: '9px',
    },
    infoDescription: {
      color: theme.colors.gray[0],
      fontWeight: 'lighter'
    },
    taxDescription: {
      color: theme.colors.gray[0],
      marginBottom: '2em',
      marginTop: '0',
      fontWeight: 300
    }
    
}));

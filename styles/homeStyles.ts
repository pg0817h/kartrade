import { createStyles,em } from '@mantine/core';

export const homeStyles = createStyles(() => ({
    pageWrapper: {
        backgroundColor: '#E5E5E5',
        width: '100%',
        height: '100vh',
        display:'flex',
        overflow: 'auto',
        flexDirection: 'column',
        backgroundSize: '400px',
        backgroundImage: 'url(/logo.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '15% 50%',
        boxSizing: 'border-box'
    },

  
    itemsContainer: {
        height: '100vh',
        fontStyle: 'normal',
      fontFamily: 'NeueHaasUnica,sans-serif',
     [`@media only screen and (min-width: ${em(800)})`]: {
        position: 'relative',
        width: '100%',
        maxWidth: '420px',
        minHeight: '100vh',
        margin: '0px 0px 0px calc(50%)',
        zoom: '1.25'
      },
    },
  }));

import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.white,
    display: 'flex',
    height: '470px',
    justifyContent: 'center',
    alignContent: 'center',
    borderBottom: '1px solid rgb(216, 216, 216)',
    flexWrap: 'wrap',
  },
  imageBox: {
    color: theme.colors.white[0],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundImage: 'url(/home.png)',
    width: '370px',
    height: '420px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  homeImgHeading: {
    margin: '0px',
    fontWeight: 'bold',
    fontSize: '35px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  homeP: {
    padding: '0px 20px 25px',
  },
}));

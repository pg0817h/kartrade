import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  container: {
    borderBottom: '1px solid rgb(216, 216, 216)',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: '25px',
  },
  descContainer: {
    boxSizing: 'border-box',
    color: '#1a1a1a',
  },
  imgContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    boxSizing: 'border-box',
  },
  imgNickname: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    marginRight: '2%',
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottom: '1px solid rgb(216,216,216)',
    paddingTop: '17px',
    paddingBottom: '15px',
  },
  priceDes: {
    fontSize: '22px',
    lineHeight: '34px',
  },
  descDetail: {
    height: '60px',
    lineHeight: '1.4em',
    color: 'rgb(119,119,119)',
    fontSize: '0.87rem',
    marginBottom: '3em',
  },
}));

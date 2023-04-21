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
  descContainer: {
    boxSizing: 'border-box',
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
  nickNameTxt: {
    color: theme.colors.gray[2]
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottom: '1px solid rgb(216,216,216)',
    paddingTop: '1.1rem',
    paddingBottom: '1rem',
  },
  descTitle: {
    fontSize: '1.3rem',
   fontWeight: 'normal'
  },
  priceDes: {
    fontSize: '22px',
    lineHeight: '34px',
  },
  descDetail: {
    lineHeight: '1.4rem',
    color: theme.colors.gray[0],
    fontSize: '14px',
    marginBottom: '1em',
    fontWeight: 'normal'
   
  },
  descPrice: {
    fontSize: '22px',
  
  }
}));

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-around',
  },

  view1: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },

  heading: {
    color: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },

  view2: {
    flex: 0.5,
    gap: 20,
    alignItems: 'center',
    // backgroundColor: 'green',
  },

  view2a: {},

  view2b: {
    width: '100%',
    gap: 20,
  },

  login: {
    color: '#001965',
    fontSize: 50,
    fontFamily: 'Poppins',
  },

  text: {
    color: '#484848',
    fontFamily: 'Poppins',
  },

  mail: {
    borderRadius: 50,
    width: '100%',
    borderColor: 'grey',
    fontFamily: 'Poppins',
    backgroundColor: '#F5F5F5',
    paddingLeft: '5%',
  },

  psw: {
    borderRadius: 50,
    width: '100%',
    borderColor: 'grey',
    fontFamily: 'Poppins',
    backgroundColor: '#F5F5F5',
    paddingLeft: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // position: 'relative'
  },

  img: {
    top: 15,
    // marginBottom: '0%',
    // paddingLeft: '10%',
  },

  forget: {
    textAlign: 'right',
    // marginTop: '20%',
    fontFamily: 'Poppins',
    color: '#556B2F',
  },

  view3: {
    flex: 0.3,
    // backgroundColor: 'orange',
  },

  btn: {
    width: '100%',
    alignSelf: 'center',
    // justifyContent: 'space-between',
  },

  info: {
    paddingTop: '30%',
  },

  info1: {
    alignSelf: 'center',
    fontFamily: 'Poppins',
    color: '#001965',
  },

  signUp: {
    color: '#4FA8D8',
  },
});

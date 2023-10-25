import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFF00',
    justifyContent: 'space-between',
  },

  subContainer1: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'black',
  },
  box1: {
    backgroundColor: '#FF0000',
    height: '100%',
    width: 90,
    borderRadius: 10,
  },

  subContainer2: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'pink',
  },
  box2: {
    width: 180,
    height: '100%',
    backgroundColor: '#FF0000',
    borderRadius: 10,
  },
  box2a: {
    width: 90,
    height: '100%',
    backgroundColor: '#FF0000',
    borderRadius: 10,
  },

  subContainer3: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 5,
    // backgroundColor: 'black',
  },

  box3: {
    width: 180,
    height: '100%',
    backgroundColor: '#FF0000',
    borderRadius: 10,
  },
  box3a: {
    width: 90,
    height: '100%',
    backgroundColor: '#FF0000',
    borderRadius: 10,
  },

  subContainer4: {
    flex: 0.3,
    backgroundColor: '#FF0000',
    width: '100%',
    height: 250,
    // backgroundColor: 'pink',
  },

  subContainer5: {
    flex: 0.25,
    backgroundColor: '#FF0000',
    width: '100%',
    height: 200,
    borderRadius: 10,
    // backgroundColor: 'red',
  },

  subContainer6: {
    flex: 0.1,
    backgroundColor: '#FF0000',
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});

import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import RootNavigator from './src/navigation/RootNavigator';
import PostDetails from './src/screens/PostDetails';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import Post from './src/screens/Post';


const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      {/* <RootNavigator /> */}
      {/* <DrawerNavigator/> */}
      <Post/>
      {/* <PostDetails/> */}
    </Provider>
  );
};

export default App;

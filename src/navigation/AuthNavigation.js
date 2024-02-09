import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
// import Welcome from '../screens/Welcome';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator}/>
    </Stack.Navigator>
  );
};

export default AuthNavigator;
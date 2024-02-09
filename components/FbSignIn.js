import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LoginButton, AccessToken, Profile} from 'react-native-fbsdk-next';

const UserProfile = Profile.getCurrentProfile().then(function (currentProfile) {
  if (currentProfile) {
    console.log(
      'The current logged user is: ' +
        currentProfile.name +
        '. His profile id is: ' +
        currentProfile.userID,
    );
  }
  console.log('User Profile:', currentProfile);
});

const FbSignIn = () => {
  return (
    <View style={styles.mainContainer}>
      <LoginButton
        onLoginFinished={(error, result) => {
          if (error) {
            console.log('login has error: ' + result.error);
          } else if (result.isCancelled) {
            console.log('login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              console.log(data.accessToken.toString());
            });
          }
        }}
        onLogoutFinished={() => console.log('LogOut')}
      />
    </View>
  );
};

export default FbSignIn;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

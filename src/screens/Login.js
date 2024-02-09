import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { logIn } from '../redux/reducer/authSlice';
import { loginUser } from '../redux/actions/actions';
import { fetchUsers } from '../Services/api';


const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [registeredUserData, setRegisteredUserData] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loadData, setLoadData] = useState(true);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://dummyapi.io/data/v1/user?created=1/',
  //         {
  //           headers: {
  //             'Content-Type': 'application/json',
  //             'app-id': '65b9f249af8a80c525603fda',
  //           },
  //         },
  //       );
  //       if (!response.ok) {
  //         console.error('Error fetching user data:', response.status);
  //         return;
  //       }

  //       const data = await response.json();
  //       console.log('API response:', data);
  //       setRegisteredUserData(data.data);
  //       setLoadData(false); // Set loading to false after updating the state
  //     } catch (error) {
  //       console.error('Error during API call:', error);
  //       setLoadData(false); // Set loading to false in case of an error
  //     }
  //   };

  //   fetchUserData();
  // }, []);

  // useEffect(() => {
  //   console.log('State after API call:', registeredUserData);
  // }, [registeredUserData]);










    const handleLogin=async()=>{

    // try{
    //   if(!firstName || !lastName){
    //     throw new Error('Please enter your first and last name');
    //   }
    //   setLoadData(true);
    //   await dispatch(logIn(firstName,lastName));
    //   setLoadData(false);
    //   // navigation.navigate('DrawerNavigator');
    //   // Alert.alert('You are now logged in!',`${firstName} ${lastName}`);
    // } catch(err) {
    //   console.log('Login failed:',err);
    //   setLoadData(false);
    //   Alert.alert('Login failed', err.message);
    // }
    
    
    //   console.log('Login Data:', registeredUserData);
    
    //   if (loadData) {
      //     // Optionally handle loading state
      //     Alert.alert('Please wait, data is still loading.');
      //     return;
      //   }
      
      //   if (!Array.isArray(registeredUserData)) {
        //     Alert.alert('Invalid user data format.');
        //     return;
        //   }
        
        // const matchingUsers = registeredUserData.filter(
          //   user => user.firstName === firstName && user.lastName === lastName,
          // );
          
          //  if (matchingUsers.length > 0) {
            //   Alert.alert('You are now logged in!',`${firstName} ${lastName}`);
            //   // console.log('Sign In Successful!', JSON.stringify(matchingUsers));
            //   navigation.navigate('DrawerNavigator');
            // } 
            // else {
              //   Alert.alert('Please check your credentials');
              //   // console.log('Login failed');
              //   // // setLoadData(false);
              //   // Alert.alert('Login failed');
              // }
              
              
              
              console.log('Login Data:', registeredUserData);
              
              if (!Array.isArray(registeredUserData)) {
                
                Alert.alert('Invalid user data format.');
                return;
                  const matchingUsers = registeredUserData.filter(
                      user => user.firstName === firstName && user.lastName === lastName,
                    );
              
                    if (matchingUsers.length > 0) {
                        Alert.alert('Sign In Successful!', JSON.stringify(matchingUsers));
                  // Navigate to the Home screen or perform other actions
                  navigation.navigate('Welcome');
                } else {
                  Alert.alert('Please Check your Credentials');
                }
              };
      }

  const handleSignUp = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerHeading}>
        <Text style={styles.signIn}>Sign In</Text>
        <Text style={styles.loginTxt}>Enter your credentials</Text>
      </View>

      <View style={styles.containerLogin}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>First Name</Text>
          <TextInput
            style={styles.txtInput}
            value={firstName}
            onChangeText={text => setFirstName(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Last Name</Text>
          <TextInput
            style={styles.txtInput1}
            value={lastName}
            onChangeText={text => setLastName(text)}
          />
        </View>
      </View>

      {/* {loadData ? (
        <ActivityIndicator size="large" color="#1C6758" />
      ) : ( */}
         <View style={styles.login_container}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.pressableLogin}>Login</Text>
        </TouchableOpacity>
      {/* )} */}

      <Text style={styles.act_signup}>
        Don't have an account? {''}
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUp}>SignUp</Text>
        </TouchableOpacity>
      </Text>
    </View>
     </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },

  containerHeading: {
    flex: 0.2,
    justifyContent: 'center',
    // backgroundColor:'yellow',
  },

  containerLogin: {
    flex: 0.7,
    // justifyContent: 'space-around',
    // backgroundColor:'green',
  },

  inputContainer: {
    marginBottom: 20,
  },

  loginTxt: {
    fontFamily: 'Poppins',
    color: 'black',
    fontSize: 16,
    marginTop: 10,
  },

  signIn: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    fontFamily: 'Poppins',
  },

  txtInput: {
    paddingLeft: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    color:"black",
    borderColor: '#006175',
    backgroundColor: '#F2F2F2',
  },

  txtInput1: {
    color:"black",
    paddingLeft: 10,
    borderRadius: 10,
    backgroundColor: '#F2F2F2',
  },

  login_container: {
    // flex: 0.1,
    alignItems: 'center',
  },

  loginBtn: {
    width: '100%',
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#1C6758',
  },

  pressableLogin: {
    fontSize: 20,
    paddingTop: 10,
    color: '#FFFFFF',
    paddingBottom: 10,
    textAlign: 'center',
  },

  inputText: {
    fontSize: 14,
    color: 'black',
    marginBottom: 10,
    fontWeight: '500',
    fontFamily: 'Poppins',
  },

  act_signup: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '500',
    fontFamily: 'Poppins',
    alignSelf: 'center',
  },

  signUp: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#1C6758',
  },
});

export default Login;

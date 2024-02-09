// RegistrationForm.js
import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  ActivityIndicator,
  Text,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from './action';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const {loading, error} = useSelector(state => state.auth);

  const handleRegister = () => {
    dispatch(registerUser(formData));
    Alert.alert('Register successfully!!');
    console.log('first', formData);
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={formData.username}
        onChangeText={text => setFormData({...formData, username: text})}
      />
      <TextInput
        placeholder="Email"
        value={formData.email}
        onChangeText={text => setFormData({...formData, email: text})}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={formData.password}
        onChangeText={text => setFormData({...formData, password: text})}
      />
      <Button title="Register" onPress={handleRegister} />
      {loading && <ActivityIndicator />}
      {error && <Text>{error}</Text>}
    </View>
  );
};

export default RegistrationForm;

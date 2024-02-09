import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';
import {CameraScreen} from 'react-native-camera-kit';
import { useDispatch,useSelector } from 'react-redux';
import { addImage } from '../redux/actions/actions';

const Post = ({navigation}) => {
  const dispatch=useDispatch();
  const user = useSelector(state => state.user);
  console.log('user:',user);
  const [isModalVisible, setModalVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const toggleModal = () => {
    // setCapturedImage(null);
    setModalVisible(!isModalVisible);
  };

  const handleImagePress = () => {
    toggleModal();
  };

  const handleCapture = event => {
    setCapturedImage(event.captureImages[0].uri);
    toggleModal();
  };

   const handleCancel = () => {
    setCapturedImage(null); // Clear the captured image
    toggleModal(); // Close the modal
  };

  const handleAdd=()=>{
    if (capturedImage) {
    dispatch(addImage(capturedImage)); // Replace addImage with your actual action creator
    toggleModal(); // Close the modal after adding the image
  } else {
    console.log('No image captured to add');
  }
  }

  const handlePosts = async () => {
    if (capturedImage && user.length > 0 && user[0].id) {
      try {
        await dispatch(postData(capturedImage, user[0].id));
        navigation.navigate('Feed');
      } catch (error) {
        console.error('Error posting data:', error);
      }
    } else {
      console.log('Selected image or user data is missing');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            color: '#000000',
            marginBottom: 10,
            fontFamily: 'Poppins',
          }}>
          Select Image
        </Text>
          <TouchableOpacity onPress={handleImagePress}>
        <View style={styles.inputStyle}>
          {capturedImage ? (
            <Image style={styles.imageIcon} source={{uri: capturedImage}} />
          ) : (
            <Image
              style={styles.imgIcon}
              source={require('../image/plus.png')}
              />
              )}
        </View>
              </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text
          style={{
            fontSize: 14,
            marginTop: 10,
            marginBottom: 10,
            fontWeight: '500',
            color: '#000000',
            fontFamily: 'Poppins',
          }}>
          Add Caption
        </Text>
        <TextInput
          style={styles.inputStyle2}
          multiline
          placeholder="Write a caption..."
        />
      </View>

      <TouchableOpacity style={styles.submitContainer} onPress={handlePosts}>
        <Text
          style={{
            width: '100%',
            fontSize: 18,
            color: '#FFFFFF',
            fontWeight: '600',
            textAlign: 'center',
            marginVertical: 10,
            fontFamily: 'Poppins',
          }}>
          Upload
        </Text>
      </TouchableOpacity>

      {/* Native Modal (Camera & Image Picker) */}
      <Modal animationType="slide" transparent={false} visible={isModalVisible}>
        {capturedImage ? (
          <View style={styles.imagePreviewContainer}>
            <Image style={styles.imagePreview} source={{uri: capturedImage}} />
            <Button title="Cancel" onPress={handleCancel} color="black" />
            <Button title="Add" onPress={handleAdd} color="black"/>
          </View>
        ) : (
          <CameraScreen
            actions={{rightButtonText: 'Done', leftButtonText: 'Cancel'}}
            onBottomButtonPressed={handleCapture}
            flashImages={{
              on: require('../image/flash-on.png'),
              off: require('../image/flash-off.png'),
              auto: require('../image/flash-auto.png'),
            }}
            cameraFlipImage={require('../image/camera-flip.png')}
            captureButtonImage={require('../image/capture-button.png')}
            torchOnImage={require('../image/flash-on.png')}
            torchOffImage={require('../image/flash-off.png')}
            hideControls={false}
            showCapturedImageCount={false}
            BottomView={
              <View style={styles.cameraBottomView}>
                <TouchableOpacity onPress={handlePosts}>
                  <Text style={styles.cameraButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            }
          />
        )}
      </Modal>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 20,
    // backgroundColor: '#FFF',
  },

  inputContainer: {
    marginBottom: 20,
  },

  inputStyle: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    borderColor: '#006175',
    borderWidth: 0.5,
    marginTop: 2,
    height: 150,
  },

  imgIcon: {
    margin: '3%',
  },

  imageIcon: {
    width: '100%',
    height: '100%',
    // alignSelf:'flex-start'
  },

  inputStyle2: {
    height: 100,
    width: '100%',
    color:'black',
    marginTop: 2,
    paddingLeft: 15,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: '#006175',
    textAlignVertical: 'top',
    backgroundColor: '#F2F2F2',
  },

  submitContainer: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#1C6758',
  },

  submitButtonText: {
    fontSize: 25,
    color: 'white',
  },

  imagePreviewContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imagePreview: {
    width: '80%',
    height: '80%',
  },
});

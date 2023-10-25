import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles2';

export default function Assignment2() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer1}>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
      </View>

      <View style={styles.subContainer2}>
        <View style={styles.box2}></View>
        <View style={styles.box2a}></View>
      </View>

      <View style={styles.subContainer3}>   
          <View style={styles.box3}></View>
          <View style={styles.box3a}></View>
      </View>

      <View style={styles.subContainer4}>
      </View>

          <View style={styles.subContainer5}>
        </View>      

      <View style={styles.subContainer6}>
      </View>
    </View>
  );
}

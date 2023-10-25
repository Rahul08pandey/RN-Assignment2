/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type {PropsWithChildren} from 'react';
import {styles} from './styles';
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
  Text,
  TextInput,
  TextComponent,
  Button,
  Alert,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {on} from 'events';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.heading}> BIOHACKER </Text>
      </View>

      <View style={styles.view2}>
        <View style={styles.view2a}>
          <Text style={styles.login}> Login </Text>
          <Text style={styles.text}> Login To Your Account </Text>
        </View>

        <View style={styles.view2b}>
          <TextInput
            style={styles.mail}
            // onChangeText={text => setState({email:text})}
            placeholder="Enter your email"></TextInput>

          <TextInput
            style={styles.psw}
            secureTextEntry={true}
            placeholder="Password"></TextInput>
          <TouchableOpacity>
            <Image style={styles.img} source={require('./images/eye.png')} />
          </TouchableOpacity>
          <Text style={styles.forget}> Forget Password? </Text>
        </View>
      </View>

      <View style={styles.view3}>
        <View style={styles.btn}>
          {/* <Pressable
            title="Login"
          onPress= {() => Alert.alert("Login Successful !")} ></Pressable> */}
          <Button
            title="Login"
            onPress={() => Alert.alert('Login Successful!')}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.info1}>
            If you don't have an account?
            <Text style={styles.signUp}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App();

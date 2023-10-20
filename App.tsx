import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Modal,
  View,
} from 'react-native';
import Navigator from './src/navigation/Navigator';
import Login from './src/components/screens/Login';
import Styles from './src/styles/Styles';
import Image from './src/res/images/screen1.svg';

const App = () => {
  return (
    // <SafeAreaView style={Styles.rootContainer}>
    //   <Modal animationType="slide" transparent={true} visible={true}>
    //     <View style={Styles.container}>
    //       <View style={styles.imageContainer}>
    //         {/* <Image /> */}
    //       </View>
    //       <Text>asdfsa</Text>
    //     </View>
    //   </Modal>
    // </SafeAreaView>
    // <Login />
    <Navigator />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    borderWidth: 1,
    height: '30%',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

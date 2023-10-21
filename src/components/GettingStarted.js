import React from 'react'
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Colors from '../styles/Colors';
import { FontStyles, getName } from '../styles/fonts';
import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Left from '../res/images/swipelight.svg';
import Right from '../res/images/swipedark.svg';
import Logo from '../res/images/screen2.svg';

const GettingStarted = ({navigation}) => {
  const headText = 'Empower Your Workforce';
  const description = `With TexlaCulture's Employee Management 
  System, unleash the true potential.`;
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={{flexDirection: 'row',}}>
        <Left />
        <Right style={{marginLeft: 1}}/>
      </View>
      <Logo width={250} height={250}/>
        <View style={styles.titleView}>
          <Text style={styles.heading}>{headText}</Text>
          <Text style={styles.textStyle}>{description}</Text>
        </View>
        <TouchableOpacity style={styles.btnStyle} onPress={()=> navigation.navigate("Login")}>
           <Text 
              allowFontScaling={false}
              style={styles.btnText}>
              Get Started
            </Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    backgroundColor: Colors.lightPinkShade,
  },
  heading: {
    fontFamily: getName(FontStyles.bold),
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.black, 
  },
  titleView: {
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  },
  textStyle: {
    color: "#4A4A4A",
    marginTop: 10,
    fontFamily: getName(FontStyles.normal),
    fontWeight: 'bold',
    fontSize: 14,
  },
  btnText: {
    fontFamily: getName(FontStyles.bold),
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnStyle: {
    height: hp('6.6%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: Colors.lightpurple,
    width: '60%',
    borderRadius: 10,
    paddingHorizontal: 20,
    elevation: 3,
  },
});

export default GettingStarted;
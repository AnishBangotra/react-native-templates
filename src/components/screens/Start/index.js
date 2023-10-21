import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import { FontStyles, getName } from '../../../styles/fonts';
import Colors from '../../../styles/Colors';
import Left from '../../../res/images/swipelight.svg';
import Right from '../../../res/images/swipedark.svg';
import Logo from '../../../res/images/screen1.svg';
import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Start = ({navigation}) => {
  const headText = 'Simplify HR Tasks';
  const description = `TexlaCulture's People Care System is
  designed to Manager your HR tasks.`;
  return (
    <SafeAreaView style={styles.container}>
        <View style={{flexDirection: 'row',}}>
          <Right />
          <Left style={{marginLeft: 1}}/>
        </View>
        <Logo width={280} height={280}/>
        <View style={styles.titleView}>
          <Text style={styles.heading}>{headText}</Text>
          <Text style={styles.textStyle}>{description}</Text>
        </View>
        <TouchableOpacity style={styles.btnStyle} onPress={()=> navigation.navigate("GettingStarted")}>
           <Text 
              allowFontScaling={false}
              style={styles.btnText}>
              Next
            </Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.lightPinkShade,
    height: '100%',
  },
  heading: {
    fontFamily: getName(FontStyles.bold),
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.black, 
  },
  titleView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: "#4A4A4A",
    marginTop: 10,
    fontFamily: getName(FontStyles.normal),
    fontWeight: 'bold',
    fontSize: 15,
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
    marginBottom: 10,
    backgroundColor: Colors.lightpurple,
    width: '60%',
    borderRadius: 10,
    paddingHorizontal: 20,
    elevation: 3,
  },
});

export default Start;
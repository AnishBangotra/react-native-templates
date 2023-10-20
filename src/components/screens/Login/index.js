import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import BackIcon from '../../../res/images/backIcon.svg';
import Flag from '../../../res/images/flag.svg';
import Logo from '../../../res/images/texlaLogo.svg';
import Colors from '../../../styles/Colors';
import { FontStyles, getName } from '../../../styles/fonts';
import {
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const Login = ({navigation}) => {
    const [enabled, setEnabled] = useState(false);
    const [phoneNum, setPhoneNum] = useState('');
    const [otpErrorMsg, setOTPErrorMsg] = useState('');

    const mobilevalidate = (number) => {
        let mobileNumber = number.replace(/[^\d+]/g, '');
        setPhoneNum(mobileNumber);
        setEnabled(false);
        if (number.length === 10) {
          setEnabled(true);
        }
      };

    const getOtp = () => {
        if (phoneNum.length === 10 && enabled) {
          setOTPErrorMsg('')
          navigation.navigate("OtpVerifyComponent", {mobNum: phoneNum});
        } else {
          setOTPErrorMsg('*This field must be at least 10 characters');
        }
    }

    return (
    <SafeAreaView style={styles.container}>
        <BackIcon />
        <View style={styles.titleView}>
            <Logo />
            <Text allowFontScaling={false} style={styles.titleText}>TexlaCulture</Text>
        </View>
        <View style={styles.headingView}>
            <Text allowFontScaling={false} style={styles.heading}>
                Mobile Number
            </Text>
            <Text
              allowFontScaling={false}
              style={
                styles.mobNumText}>
              We'll send you a one-time verification code.
            </Text>
        </View>
        <View
            style={styles.inputView}>
            <View style={styles.fixedView}>
                <Flag />
                <Text
                    allowFontScaling={false}
                    style={[styles.inputText, { paddingLeft: 5 }]}>
                    {'+91'}
                </Text>
            </View>
            <TextInput
              style={styles.inputNumber}
              autoFocus={true}
              placeholder="Enter your Mobile here"
              value={phoneNum}
              placeholderTextColor={Colors.grey}
              maxLength={10}
              returnKeyType={'done'}
              onChangeText={mobilevalidate}
              keyboardType="numeric"
            />
          </View>
          {otpErrorMsg.length > 0 ? <Text style={[styles.textStyle, {color: Colors.red, paddingTop: 2}]}>{otpErrorMsg}</Text> : ''}
        <Text style={[styles.textStyle, {paddingTop: 5, paddingBottom: 10}]}>
            By Continuing, I agree to the 
            <Text style={{color: Colors.primaryPurple}}> Terms of Use & Privacy Policy</Text></Text>
        <TouchableOpacity style={styles.btnStyle} onPress={()=>getOtp()}>
                <Text 
                    allowFontScaling={false}
                    style={styles.btnText}>
                    Get OTP
                </Text>
        </TouchableOpacity>
        <Text style={[styles.textStyle, {paddingTop: 8}]}>Having Trouble Logging in? 
            <Text style={{color: Colors.primaryPurple}}> Get Help</Text></Text>
    </SafeAreaView>  
    
  )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: Colors.white,
        padding: 25,
    },
    heading: {
        fontFamily: getName(FontStyles.bold),
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.black,
        
    },
    headingView: {
        marginTop: 10,
    },
    fixedView: {
        flexDirection: 'row',
        borderColor: '#919EAB',
        color: Colors.black,
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 10,
        padding: 5,
    },
    textStyle: {
        fontFamily: getName(FontStyles.regular),
        fontSize: 12,
        color: '#575757',
    },
    mobNumText: {
        color: Colors.black,
        marginTop:5,
        marginBottom:10,
        fontFamily: getName(FontStyles.regular),
        fontSize: 12,
    },
    inputText: {
        fontFamily: getName(FontStyles.regular),
        fontSize: 12,
        fontWeight: 'bold',
        color: Colors.black,
    },
    titleText: {
        color: Colors.primaryPurple,
        fontFamily: getName(FontStyles.bold),
        fontSize: 22,
        paddingLeft: 4,
        fontWeight:'bold'
    },
    titleView: {
        marginTop: 15,
        alignItems: 'center',
        flexDirection: 'row',
    },
    inputView: { 
        flexDirection: 'row',
        width: '100%',
      },
      inputNumber: {
        fontFamily: getName(FontStyles.bold),
        fontSize: 11,
        fontWeight: 'bold',
        width: '77%', 
        height: 40, 
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#919EAB',
        color: Colors.black,
        marginLeft: 14,
        overflow: 'hidden',
      },
      btnStyle: {
        height: hp('6.6%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primaryPurple,
        width: '100%',
        borderRadius: 10,
        paddingHorizontal: 20,
        elevation: 3,
      },
      btnText: {
        fontFamily: getName(FontStyles.bold),
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
      },
});


export default Login;
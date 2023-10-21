import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import BackIcon from '../res/images/backIcon.svg';
import Logo from '../res/images/texlaLogo.svg';
import Colors from '../styles/Colors';
import { FontStyles, getName } from '../styles/fonts';

const OtpVerifyComponent = ({navigation}) => {
    const inputs=[];
    const [otp, setOtp] = useState(['', '', '', '']);
    const phoneNum = '123456789';
    const verifyText = 'Verify your Mobile Number';
    const textlaTitle = 'TexlaCulture'
    const mobText = `Please enter code sent to your mobile number ending with 
******${phoneNum[phoneNum?.length-4]+phoneNum[phoneNum?.length-3]+phoneNum[phoneNum?.length-2]+phoneNum[phoneNum?.length-1]}`;

    const handleOtpChange = (value, index) => {
        let currentOtp = value.replace(/[^\d+]/g, '');
        const newOtp = [...otp];
        newOtp[index] = currentOtp;
        setOtp(newOtp);
        if (value && index < newOtp.length -1 ) {
            inputs[index+1].focus();
        }
      };

    return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
            <BackIcon />
        </TouchableOpacity>
        <View style={styles.titleView}>
            <Logo />
            <Text allowFontScaling={false} style={styles.titleText}>{textlaTitle}</Text>
        </View>
        <View style={styles.headingView}>
            <Text allowFontScaling={false} style={styles.heading}>
                {verifyText}
            </Text>
            <Text
              allowFontScaling={false}
              style={
                styles.mobNumText}>
                {mobText}
            </Text>
        </View>
        <View style={styles.inputView}>
        {otp.map((digit, index) => (
            <TextInput
                key={index}
                ref={(input) => {
                    inputs[index] = input;
                }}
                onChangeText={(value)=> handleOtpChange(value, index)}
                value={digit}
                style={styles.box}
                keyboardType="numeric"
                maxLength={1}
           />
        ))}
          </View>
        <Text style={[styles.textStyle, {paddingTop: 8}]}>Didn't reveive the code? 
        <Text style={{color: Colors.primaryPurple}}> Resend OTP 0.10sec</Text></Text>
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
    box: {
        borderWidth: 1,
        borderColor: 'black',
        width: 50,
        height: 40,
        margin: 9,
        alignItems: 'center',
        borderRadius: 10,
        borderColor: "#919EAB",
        textAlign: 'center',
        fontSize: 16,
      },
    headingView: {
        marginTop: 10,
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
        width: '70%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export default OtpVerifyComponent;
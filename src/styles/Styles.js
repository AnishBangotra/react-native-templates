import { StyleSheet, Platform } from 'react-native';
import Colors from './Colors';
// import DeviceInfo from 'react-native-device-info';
// import { normalize } from 'react-native-elements';

export default StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.lightPinkShade,
    height: '100%',
  },
  appContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    borderWidth: 1,
    width: '100%',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  inputStyle: {
    width: '100%',
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: Colors.borderColor,
    borderStyle: 'solid',
    borderRadius: 5,
    paddingStart: 10,
    paddingEnd: 10,
    textAlign: 'center',
    marginTop: 20
  },
  otpInputStyle: {
    width: '50%',
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: Colors.borderColor,
    borderStyle: 'solid',
    borderRadius: 5,
    paddingStart: 10,
    paddingEnd: 10,
    textAlign: 'center',
  },
  timeLeftStyle: {
    width: '20%',
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: Colors.borderColor,
    borderStyle: 'solid',
    borderRadius: 5,
    paddingStart: 10,
    paddingEnd: 10,
    textAlign: 'center',
  },
  rowContainer: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  },
  errorTextStyle: {
    fontSize: 14,
    color: Colors.red,
  },
  cornerRectangle: {
    width: 100,
    borderRadius: 10,
    backgroundColor: '#ffcc4d',
    alignItems: 'center',
  },
  headerRightTextStyle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
    fontStyle: 'normal',
  },
  itemDetailView: {
    height: 150,
    padding: 15,
    marginTop: 10,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderColor: '#d4d4d4',
    borderStyle: 'solid',
  },
  button: {
    backgroundColor: '#379733',
    width: '60%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 60,
  },
  btnText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 24,
  },
//   safeAreaStyle: {
//     backgroundColor: Colors.greenBilling,
//     flex: 1,
//     marginBottom:
//             Platform.OS === 'ios' && DeviceInfo.hasNotch() ? normalize(28) : 0,
//   },
});

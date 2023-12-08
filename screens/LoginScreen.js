import React, { useState ,useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [verificationCode, setVerificationCode] = useState('');
  const [countryCode, setCountryCode] = useState('+1'); 
  

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const handleSendOTP = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation)
    } catch (error) {
      console.log(error)
    }
  };


  const handleSubmit = async () => {
    try {
      await confirm.confirm(verificationCode);
      console.log('auth successfull')
    } catch (error) {
console.log('invalide code')
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <View style={styles.phoneInput}>
          <TextInput
            style={styles.countryCode}
            placeholder="Country Code"
            value={countryCode}
            onChangeText={(text) => setCountryCode(text)}
          />
          <TextInput
            style={styles.phoneNumber}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            keyboardType="phone-pad"
          />
        </View>
        <TouchableOpacity style={styles.sendOTPButton} onPress={handleSendOTP}>
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          value={verificationCode}
          onChangeText={(text) => setVerificationCode(text)}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
  },
  phoneInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  countryCode: {
    width: '25%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  phoneNumber: {
    width: '75%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  sendOTPButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default LoginScreen;

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { LoginFunc } from './../../store/action';
import Button from '../../components/button';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Feather } from '@expo/vector-icons';

function LoginScreen(props: any) {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });
  const [eyeIcon, setEyeIcon] = useState(true);
  const [modalVisible, setModalVisible] = useState(
    props.loginError === 'userNotFound'
  );

  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleChange = (value: any, name: any) => {
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  const Login = () => {
    props.sendData(inputValues);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/background.png')}
        style={{ flex: 1 }}
      >
        <ScrollView>
          <Text style={styles.welcomeTxt}>Welcome Back</Text>
          <Text style={styles.welcomeDes}>
            This is the example of text which will use here this is genrated
            from Eng text generator
          </Text>
          <View style={styles.inputsSec}>
            <View style={styles.socialBtnSec}>
              <TouchableOpacity style={styles.socialBtn}>
                <Image
                  source={require('../../assets/google.png')}
                  style={{ width: 18, height: 18 }}
                />
                <Text style={styles.socialBtnTxt}>Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialBtn}>
                <AntDesign name="facebook-square" size={18} color="#4867aa" />
                <Text style={styles.socialBtnTxt}>Facebook</Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                props.loginError === 'invalidEmail'
                  ? styles.inputErrorView
                  : styles.inputView,
              ]}
            >
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(text) => handleChange(text, 'email')}
              />
              {re.test(inputValues.email) ? (
                <Feather name="check" size={20} color="gray" />
              ) : null}
            </View>
            <View
              style={[
                props.loginError === 'incorrectPassword'
                  ? styles.inputErrorView
                  : styles.inputView,
              ]}
            >
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={eyeIcon}
                onChangeText={(text) => handleChange(text, 'password')}
              />
              <TouchableOpacity onPress={() => setEyeIcon(!eyeIcon)}>
                {eyeIcon ? (
                  <Entypo name="eye-with-line" size={18} color="gray" />
                ) : (
                  <Entypo name="eye" size={18} color="gray" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <Button
            onPress={Login}
            btnDisabled={
              inputValues.email === '' || inputValues.password === ''
            }
            text="Login"
          />
          <TouchableOpacity style={styles.forgotBtn}>
            <Text style={styles.forgotTxt}>Forgot password</Text>
          </TouchableOpacity>
          <View style={styles.dontHaveAccountSec}>
            <Text style={styles.dontHaveAccountTxt}>
              Don't have an account?{' '}
            </Text>
            <TouchableOpacity>
              <Text style={styles.joinUsTxt}>Join us</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
      {/* modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        style={{ borderWidth: 3 }}
      >
        <View style={styles.centeredView}>
          <BlurView intensity={70} style={styles.blurContainer} tint="dark">
            <View style={styles.modalView}>
              <AntDesign name="exclamationcircleo" size={40} color="#B90000" />
              <Text style={styles.modalText}>No Email Found</Text>
              <Text style={styles.modalMiddleTxt}>
                No such Email is registered on our app
              </Text>
              <View style={styles.modalDontHaveAccountSec}>
                <Text style={styles.modalDontHaveAccountTxt}>
                  Don't have an account?{' '}
                </Text>
                <TouchableOpacity>
                  <Text style={styles.modalJoinUsTxt}>Join us</Text>
                </TouchableOpacity>
              </View>
            </View>
          </BlurView>
        </View>
      </Modal>
    </View>
  );
}

const mapStateToProps = (state: any) => {
  return {
    loginError: state.loginError,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    sendData: (data: any) => dispatch(LoginFunc(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputView: {
    borderWidth: 1,
    width: '90%',
    marginTop: 20,
    borderRadius: 12,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#677294',
    height: 54,
    paddingHorizontal: 10,
  },
  inputErrorView: {
    borderWidth: 1,
    width: '90%',
    marginTop: 20,
    borderRadius: 10,
    padding: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#B90000',
  },
  input: {
    flex: 1,
    color: '#677294',
    fontSize: 16,
    fontFamily: 'Rubik-Regular',
  },
  loginBtn: {
    backgroundColor: '#B90000',
    padding: 10,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  welcomeTxt: {
    fontSize: 24,
    marginTop: 100,
    textAlign: 'center',
    fontFamily: 'Rubik-Medium',
  },
  welcomeDes: {
    textAlign: 'center',
    fontSize: 14,
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    color: '#677294',
    fontFamily: 'Rubik-Regular',
  },
  inputsSec: {
    marginTop: '20%',
  },
  forgotBtn: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotTxt: {
    color: '#00CCCB',
    fontSize: 14,
    fontFamily: 'Rubik-Regular',
  },
  dontHaveAccountSec: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '35%',
  },
  modalDontHaveAccountSec: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  dontHaveAccountTxt: {
    color: '#00CCCB',
    fontSize: 14,
    fontFamily: 'Rubik-Regular',
  },
  modalDontHaveAccountTxt: {
    color: '#B90000',
    fontSize: 14,
    fontFamily: 'Rubik-Regular',
  },
  joinUsTxt: {
    color: '#00CCCB',
    fontSize: 14,
    fontFamily: 'Rubik-Regular',
  },
  modalJoinUsTxt: {
    color: '#B90000',
    fontSize: 14,
    fontFamily: 'Rubik-Regular',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 15,
    fontFamily: 'Rubik-Bold',
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 22,
    justifyContent: 'center',
  },
  modalMiddleTxt: {
    marginTop: 15,
    color: '#8D8D8D',
    fontSize: 15,
    fontFamily: 'Rubik-Regular',
  },
  blurContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  socialBtn: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    width: '47%',
    borderRadius: 12,
  },
  socialBtnSec: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  socialBtnTxt: {
    fontSize: 16,
    color: '#677294',
    marginLeft: 10,
    fontFamily: 'Rubik-Regular',
  },
});

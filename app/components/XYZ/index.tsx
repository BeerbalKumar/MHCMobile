import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function XYZ(props: any) {
  return (
    <LinearGradient
      colors={
        props.btnDisabled ? ['#D3D3D3', '#D3D3D3'] : ['#4DC6FD', '#00CCCB']
      }
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={{
        width: '80%',
        borderRadius: 12,
        alignSelf: 'center',
        marginTop: 30,
      }}
    >
      <TouchableOpacity
        disabled={props.btnDisabled}
        onPress={() => props.onPress()}
        style={styles.button}
      >
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Rubik-Regular',
  },
});

export default XYZ;

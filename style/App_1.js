import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class LostOfStyles extends Component{
  render(){
    return(
      <View style={{alignItems: 'center'}}>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>big blue</Text>
        <Text style={[styles.bigblue, styles.red]}>big blue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then big blue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red'
  }
});
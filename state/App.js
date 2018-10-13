import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class App extends Component{
  render(){
    return(
      <View style={{alignItems: 'center'}}>
        <Dev text="In a real application"/>
        <Dev text="When setState is called"/>
        <Dev text="React Native"/>
        <Dev text="In general, you should initialize state in the constructor"/>
        <Dev text="qwerty"/>
      </View>
    );
  }
}

class Dev extends Component{
  constructor(props){
    super(props);
    this.state = {isShowingText: true, count: 0};

    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
      if(this.state.isShowingText){
        this.setState(prevState => {
          return {count: prevState.count+1}
        });
      }
    }, 1000);
    
  }

  render(){
    let display = this.state.isShowingText ? this.props.text : this.state.count;
    return(
      <Text>{display}</Text>
    );
  }
}
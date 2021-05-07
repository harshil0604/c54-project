import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class RedButton extends Component {
  Display=()=>{
    alert("i am a alert box redbox")
  }
  render(){
    return(
      <Button title="Sound 1" color = {this.props.color} onPress={this.Display}/>
    )
  }
}
class YellowButton extends Component {
  Display=()=>{
    alert("i am a alert box yellowbox")
  }
  render(){
    return(
      <View
      style={{width:340 , height:100 , marginTop:70}}>
      <Button color="gold" title="Sound 2" onPress={this.Display}/>
      </View>
    )
  }
}
class BlueButton extends Component {
  Display=()=>{
    alert("i am a alert box bluebox")
  }
  render(){
    return(
      <View
      style={{width:340 , height:100 , marginTop:70}}>
      <Button color="blue" title="Sound 3" onPress={this.Display}/>
      </View>
    )
  }
}
class GreenButton extends Component {
  Display=()=>{
    alert("i am a alert box greenbox")
  }
  render(){
    return(
      <View
      style={{width:340 , height:100 , marginTop:70}}>
      <Button color="green" title="Sound 4" onPress={this.Display}/>
      </View>
    )
  }
}
class WhiteButton extends Component {
  Display=()=>{
    alert("i am a alert box whitebox")
  }
  render(){
    return(
      <View
      style={{width:340 , height:100 , marginTop:70}}>
      <Button color="silver" title="Sound 5" onPress={this.Display}/>
      </View>
    )
  }
}
export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <RedButton color = "red" />
        <YellowButton />
        <BlueButton />
        <GreenButton />
        <WhiteButton />
        <Text>My First React Component</Text>
      </View>
    );
  }
}
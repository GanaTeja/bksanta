import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import firebase from 'firebase';
import db from '../config'

export default class ReceiverDetails  extends React.Component {
    constructor(props){

        super(props)
        this.state={
            userId:firebase.auth().currntUser.email,
            receiverId:this.props.navigation.getParam("details")['userId'],
            requestId:this.props.navigation.getParam("details")['requestId'],
            bookName:this.props.navigation.getParam("details")['book_name'],
            Reason:this.props.navigation.getParam("details")['Reason'],
            receiverName:'',
            receiverContact:'',
            receiverAdress:'',
            receiverRequestDocId:''
        }}
        componentDidMount(){this.getReceiverDetails()}
  render() {
    return (
      <View>
        <Text>ReadStory</Text>
      </View>
    );
  }
}

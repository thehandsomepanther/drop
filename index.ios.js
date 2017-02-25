import React, { Component } from 'react'
import * as firebase from 'firebase'
const styles = require('./styles')

const firebaseConfig = {
  apiKey: "AIzaSyDymk2BxeDqac22_419ILoplYSXddM2uzc",
  authDomain: "drop-c01ad.firebaseapp.com",
  databaseURL: "https://drop-c01ad.firebaseio.com",
  storageBucket: "drop-c01ad.appspot.com",
  messagingSenderId: "941829890151"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class DropApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('DropApp', () => DropApp)

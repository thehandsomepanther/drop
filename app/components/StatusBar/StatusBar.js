import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import styles from './styles'

export default class StatusBar extends Component {
  render() {
    return (
      <View>
        <View style={ styles.statusBar } />
      </View>
    )
  }
}

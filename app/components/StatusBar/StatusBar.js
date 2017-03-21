import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

export default class StatusBar extends Component {
  render() {
    return (
      <View style={ styles.statusBarContainer }>
        <TouchableOpacity
          onPress={this.props.onBack}>
          <Text style={styles.statusBarBack}>Back</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

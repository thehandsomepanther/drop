import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import styles from './styles'

export default class FeedItem extends Component {
  constructor(props) {
    super(props)
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps)
  }

  render() {
    return(
      <View
        style={styles.feedItemContainer}
        ref={component => this._root = component}>
        <View style={styles.feedItemTitleContainer}>
          <Text style={styles.feedItemTitle}>{this.props.feed.title}</Text>
        </View>
        <View style={styles.feedItemPreviewContainer}>
          <View style={styles.feedItemPreview}>
          </View>
        </View>
      </View>
    )
  }
}

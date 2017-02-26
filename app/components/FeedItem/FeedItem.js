import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import styles from './styles'

export default class FeedItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.feedItemContainer}>
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

import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import styles from './styles'

export default class MessageItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.messageItemContainer}>
        <View style={styles.messageItemContent}>
          <View style={styles.messageItemTitleContainer}>
            <Text style={styles.messageItemTitle}>{ this.props.message.url }</Text>
          </View>
          <View style={styles.messageItemPreviewContainer}>
            <View style={styles.messageItemPreview}>
            </View>
          </View>
        </View>
        <View style={styles.messageItemInfoContainer}>
          <View style={styles.messageItemSenderContainer}>
            <Text style={styles.messageItemSender}>{ this.props.message.sender }</Text>
          </View>
          <View style={styles.messageItemRepliesContainer}>
            <Text style={styles.messageItemReplies}>{ getRepliesText(this.props.message.replies) }</Text>
          </View>
        </View>
      </View>
    )
  }
}

function getRepliesText(replies) {
  if (replies.length) {
    let text = replies[0].sender
    if (replies.length == 1) {
      return text
    }

    return `${text} + ${replies.length-1}`
  } else {
    return '+'
  }
}

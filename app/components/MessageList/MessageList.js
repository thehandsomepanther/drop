import React, { Component } from 'react'
import { StyleSheet, ListView, View, Text } from 'react-native'
import styles from './styles'
import MessageItem from './../MessageItem'

export default class MessageList extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          sender: 'Kevin',
          url: 'http://keithdodds.com',
          replies: [
            {
              sender: 'Dan',
              message: 'That\'s a spicy meme, kev'
            },
            {
              sender: 'Drew',
              message: 'good bird'
            }
          ]
        },
        {
          sender: 'Josh',
          url: 'http://keithdodds.com',
          replies: [
          ]
        },
        {
          sender: 'Sam',
          url: 'http://keithdodds.com',
          replies: [
            {
              sender: 'Jay',
              message: 'That\'s a spicy meme, kev'
            },
            {
              sender: 'Drew',
              message: 'good bird'
            }
          ]
        },
      ])
    }
  }

  render() {
    return(
      <View style={styles.messageListContainer}>
        <ListView
          removeClippedSubviews={false}
          style={styles.messageList}
          dataSource={this.state.dataSource}
          renderRow={(messageData) => <MessageItem message={messageData} />}
        />
      </View>
    )
  }
}

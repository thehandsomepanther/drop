import React, { Component } from 'react'
import { StyleSheet, ListView, View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import FeedItem from './../FeedItem'

export default class FeedList extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          title: 'Boxworld'
        },
        {
          title: 'RateMyBanana.com'
        }
      ])
    }
  }

  render() {
    return(
      <ListView
        style={styles.feedList}
        dataSource={this.state.dataSource}
        renderRow={(feedData) => {
          return (
            <TouchableOpacity
            onPress={this.props.onForward}>
              <FeedItem feed={feedData} />
            </TouchableOpacity>
          )
        }}
      />
    )
  }
}

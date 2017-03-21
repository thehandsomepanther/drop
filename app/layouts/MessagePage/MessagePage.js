import React, { Component } from 'react'
import styles from './styles'
import MessageList from '../../components/MessageList'

export default class MessagePage extends Component {
  render() {
    return (
      <MessageList
        style={styles.messageList}
        onForward={this.props.onForward}
      />
    )
  }
}

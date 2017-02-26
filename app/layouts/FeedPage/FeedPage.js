import React, { Component } from 'react'
import styles from './styles'
import FeedList from '../../components/FeedList'

export default class FeedPage extends Component {
  render() {
    return (
      <FeedList
        onForward={this.props.onForward}
      />
    )
  }
}

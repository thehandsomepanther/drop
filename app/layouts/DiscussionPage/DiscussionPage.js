import React, { Component } from 'react'
import styles from './styles'
import DiscussionList from '../../components/DiscussionList'

export default class FeedPage extends Component {
  static get defaultProps() {
    return {
      title: "Discussion Page"
    }
  }

render() {
    return (
      <DiscussionList />
    )
  }
}

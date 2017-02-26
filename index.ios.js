import React, { Component } from 'react'
import * as firebase from 'firebase'
import { AppRegistry, View, Text, Navigator } from 'react-native'
import { styles, colors } from './app/config/styles'
import FeedPage from './app/layouts/FeedPage'
import MessagePage from './app/layouts/MessagePage'
import DiscussionPage from './app/layouts/DiscussionPage'

import { firebaseConfig } from './app/config/firebase'
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default class DropApp extends Component {
  render() {
    const routes = [
      {title: 'Feed', index: 0},
      {title: 'Messages', index: 1}
    ]

    return (
      <Navigator
        style={styles.container}
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={this.renderScene}
      />
    )
  }

  renderScene(route, navigator) {
    if (route.title == 'Feed') {
      return (
        <FeedPage
          title={route.title}
          navigator={navigator}
          onForward={() => {
            const nextIndex = route.index + 1
            navigator.push(navigator.state.routeStack[nextIndex])
          }}

          onBack={() => {
            if (route.index > 0) {
              navigator.pop()
            }
          }}
        />
      )
    }

    if (route.title == 'Messages') {
      return (
        <MessagePage
          title={route.title}
          navigator={navigator}
          onForward={() => {
            const nextIndex = route.index + 1
            navigator.push(navigator.state.routeStack[nextIndex])
          }}

          onBack={() => {
            if (route.index > 0) {
              navigator.pop()
            }
          }}
        />
      )
    }
  }
}

AppRegistry.registerComponent('DropApp', () => DropApp)

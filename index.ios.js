import React, { Component } from 'react'
import * as firebase from 'firebase'
import { AppRegistry, View, Text, Navigator, TouchableHighlight } from 'react-native'
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
        style={styles.rootScene}
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) =>
          <TouchableHighlight onPress={() => {
            if (route.index === 0) {
              navigator.push(routes[1]);
            } else {
              navigator.pop();
            }
          }}>
          <Text>Hello {route.title}!</Text>
          </TouchableHighlight>
        }
      />
    )
  }
}

AppRegistry.registerComponent('DropApp', () => DropApp)

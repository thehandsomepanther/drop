import React, { Component } from 'react'
import * as firebase from 'firebase'
import { AppRegistry, View, Text } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import { styles, colors } from './app/config/styles'
import FeedPage from './app/layouts/FeedPage'
import MessagePage from './app/layouts/MessagePage'
import DiscussionPage from './app/layouts/DiscussionPage'

import { firebaseConfig } from './app/config/firebase'
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default class DropApp extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" style={styles.rootScene}>
          <Scene key="feedPage" component={ FeedPage } title="FeedPage" initial={ true } />
          <Scene key="MessagePage" component={ MessagePage } title="MessagePage" />
          <Scene key="DiscussionPage" component={ DiscussionPage } title="DiscussionPage" />
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('DropApp', () => DropApp)

import React, { PropTypes } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Provider } from 'react-redux'
import { Router, Actions } from 'react-native-router-flux'
import scenes from '../routes'
import Button from 'react-native-button'
import { Container, Header, Title, Content } from 'native-base';
var Beacons = require('react-native-ibeacon');

Beacons.requestWhenInUseAuthorization();

const Root = ({ store, history }) => (
  <Provider store={store}>
      <Container>
          <Router scenes={scenes}/>
          <Content>
              <Button onPress={Actions.repoPage}>Repo Page</Button>
          </Content>
      </Container>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  //history: PropTypes.object.isRequired
}

export default Root

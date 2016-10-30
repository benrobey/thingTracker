import React, { PropTypes } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    DeviceEventEmitter,
    ListView
} from 'react-native';
import { Provider } from 'react-redux'
import { Router, Actions } from 'react-native-router-flux'
import scenes from '../routes'
import Button from 'react-native-button'
import { Container, Header, Title, Content } from 'native-base';
import BeaconList from '../components/BeaconList'

var region = {
    identifier: 'Estimotes',
    uuid: '61687109-905F-4436-91F8-E602F514C96D'
};

var Root = ({ history }) => (
    <Container>
        <Router scenes={scenes}/>
        <Content>
            <BeaconList></BeaconList>
        </Content>
    </Container>
)

export default Root

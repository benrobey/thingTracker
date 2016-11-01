import React, { PropTypes, Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    Text,
    View,
    DeviceEventEmitter,
    ListView
} from 'react-native';
import { Provider } from 'react-redux'
import { Router, Scene } from 'react-native-router-flux'
import BeaconList from '../components/BeaconList'
import User from '../components/User'
import Home from '../components/Home'
import configureStore from '../store/configureStore'


const store = configureStore();

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}


class Root extends Component {
    render() {
        return (
            <RouterWrapper />
        )
    }
}

var RouterWrapper = React.createClass({
    render: function() {
        return (
            <Provider store={store}>
                <Router navigationBarStyle={{backgroundColor: '#1e2226', flex:1 ,alignSelf: 'stretch', clear:'both'}}  titleStyle={{color : "#FFF"}}>
                    <Scene key="root">
                        <Scene key="home" component={Home} title ="Home" initial />
                        <Scene key="pressUser" component={User} title="My Details" />
                        <Scene key="beaconList" component={BeaconList} title="Viewing Beacons" />
                    </Scene>
                </Router>
            </Provider>
        );
    }
});

export default Root

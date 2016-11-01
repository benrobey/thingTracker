import React, { PropTypes, Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    DeviceEventEmitter,
    ListView,
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import { List, ListItem, Card } from 'react-native-elements'

const list = [
    {
        title: 'Home',
        icon:   'av-timer',
        action: 'refresh'
    },
    {
        title: 'View nearby beacons',
        icon: 'av-timer',
        action: 'beaconList'
    },
    {
        title: 'View user details',
        icon: 'flight-takeoff',
        action: 'pressUser'
    },
    {
        title: 'View user details',
        icon: 'flight-takeoff',
        action: 'pressUser'
    }
]


var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:40
    },
});


class Home extends Component {
    render () {
        return (
            <View style={{marginTop: 80}}>
                <Card
                    title='NAVIGATE'>
                    {
                        list.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.title}
                                leftIcon={{name: item.icon}}
                                onPress={Actions[item.action]}
                            />
                        ))
                    }
                </Card>

            </View>
        )

    }
}


export default Home

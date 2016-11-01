import React, { PropTypes } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    DeviceEventEmitter,
    ListView,
    Image
} from 'react-native';
import { FormLabel, FormInput, Card, List, ListItem } from 'react-native-elements'

const list = [
        {
            title: 'Ben Robey',
            icon: 'av-timer'
        },
        {
            title: 'Web Developer',
            icon: 'flight-takeoff'
        }
    ];


const User = ({ user }) => {
  return (
    <View style={{marginTop: 80, marginLeft:20}}>
        <Card title='YOUR PROFILE'>
            <Image
                style={{width:300, height:300}}
                source={{uri: 'https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_hipster_guy-512.png'}}
            />
            <List>
                {
                    list.map((item, i) => (
                        <ListItem
                            key={i}
                            title={item.title}
                            leftIcon={{name: item.icon}}
                        />
                    ))
                }
            </List>
        </Card>
    </View>
  )
}


export default User

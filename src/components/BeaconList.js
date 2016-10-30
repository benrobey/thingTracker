import React, { Component, PropTypes } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    DeviceEventEmitter,
    ListView
} from 'react-native';
import configureStore from '../store/configureStore'
import { Actions } from 'react-native-router-flux';

import { createStore } from 'redux'
let store = createStore(configureStore)

var Beacons = require('react-native-ibeacon');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
      marginTop:50
  },
  headline: {
    fontSize: 20,
    paddingTop: 20
  },
  row: {
    padding: 8,
    paddingBottom: 16
  },
  smallText: {
    fontSize: 11
  }
});

// Create our dataSource which will be displayed in the data list
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

// The BeaconView
var BeaconView = React.createClass({
  render: function() {
    return (
        <View style={styles.row}>
          <Text style={styles.smallText}>UUID: {this.props.uuid}</Text>
          <Text style={styles.smallText}>Major: {this.props.major}</Text>
          <Text style={styles.smallText}>Minor: {this.props.minor}</Text>
          <Text>RSSI: {this.props.rssi}</Text>
          <Text>Proximity: {this.props.proximity}</Text>
          <Text>Distance: {this.props.accuracy.toFixed(2)}m</Text>
        </View>
    );
  }
});

// The BeaconList component listens for changes and re-renders the
// rows (BeaconView components) in that case
var BeaconList = React.createClass({
  getInitialState: function() {
    return {
        dataSource: ds.cloneWithRows([]),
        region: this.region,
        test: this.props.test
    };
  },


    componentDidMount: function() {
    // Request for authorization while the app is open
      Beacons.requestWhenInUseAuthorization();

    // Range for beacons inside the region
      Beacons.startRangingBeaconsInRegion({
          identifier: 'Estimotes',
          uuid: '61687109-905F-4436-91F8-E602F514C96D'
      });

      Beacons.startUpdatingLocation();

    var subscription = DeviceEventEmitter.addListener(
        'beaconsDidRange',
        (data) => {
          // Set the dataSource state with the whole beacon data
          // We will be rendering all of it through <BeaconView />
            this.setState({
                dataSource: ds.cloneWithRows(data.beacons),
                test: data.beacons
            });
        }
    );
  },

  renderRow: function(rowData) {
    return <BeaconView {...rowData} style={styles.row} />
  },

  render: function() {
    return (
        <View style={styles.container}>
          <Text style={styles.headline}>All beacons in the area</Text>
            <Text onPress={Actions.pressUser}>User Page</Text>
          <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow}
          />
        </View>
    );
  },
});

export default BeaconList
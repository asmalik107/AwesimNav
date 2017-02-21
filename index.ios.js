/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Contacts from './src/Contacts';
import Home from './src/Home';
import Settings from './src/Settings'


const MainNavigator = StackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        header: {
          visible: true
        }
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        header: {
          visible: false
        }
      }
    }
  },
  {
    mode: 'modal',
    headerMode: 'screen'
  }
);


const SimpleApp = StackNavigator({
    HomeMain: {
      screen: MainNavigator,
      navigationOptions: {
        header: {
          visible: false
        }
      }
    },
    Contacts: {screen: Contacts},
  },
  {
    initialRouteName: 'HomeMain',
    headerMode: 'screen'
  }
);


AppRegistry.registerComponent('AwesimNav', () => SimpleApp);

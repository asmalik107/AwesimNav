/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {CardStack, StackNavigator} from 'react-navigation';
import Contacts from './src/Contacts';
import Home from './src/Home';
import Message from './src/Message';
import Settings from './src/Settings';

const {BackButton} = CardStack.Header

const MainNavigator = StackNavigator({
    Home: {
      screen: Home,
    },
    Settings: {
      screen: Settings
    }
  },
  {
    initialRouteName: 'Home',
    mode: 'modal',
    headerMode: 'screen'
  }
);


const SecondNavigator = StackNavigator({
    Message: {
      screen: Message,
    },
    Settings: {
      screen: Settings
    }
  },
  {
    initialRouteName: 'Message',
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
    Second: {
      screen: SecondNavigator,
      navigationOptions: {
        header: {
          visible: false
        }
      }
    },
    Contacts: {
      screen: Contacts
    }
  },

  {
    initialRouteName: 'HomeMain',
    headerMode: 'screen'
  });


AppRegistry.registerComponent('AwesimNav', () => SimpleApp);

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
import Message from './src/Message';
import Settings from './src/Settings';


const MainNavigator = StackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        header: {
          visible: true
        }
      },
      cardStack: {
        gesturesEnabled: false
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        header: {
          visible: false
        },
        cardStack: {
          gesturesEnabled: false
        }
      }
    }
  },
  {
    mode: 'modal',
    headerMode: 'screen'
  }
);


const SecondNavigator = StackNavigator({
    Home: {
      screen: Message,
      navigationOptions: {
        header: {
          visible: true
        }
      },
      cardStack: {
        gesturesEnabled: false
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        header: {
          visible: false
        },
        cardStack: {
          gesturesEnabled: false
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
    Second: {
      screen: SecondNavigator,
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

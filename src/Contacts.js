import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

class Contacts extends Component {
  static navigationOptions = {
    title: 'Contacts',
    header: {
      right: <Button title="Info"/>
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Contacts</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


export default Contacts;
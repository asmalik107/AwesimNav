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
    const {navigate, goBack} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>Contacts</Text>
        <Button
          onPress={() => goBack(null)}
          title="Go back"
        />
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
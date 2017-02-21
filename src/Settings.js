import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    const navigation = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>Settings</Text>
        <Button
          onPress={() => navigation.goBack(null)}
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


export default Settings;
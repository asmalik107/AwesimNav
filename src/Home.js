import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          onPress={() => navigate('Contacts')}
          title="Contacts"
        />
        <Button
          onPress={() => navigate('Second')}
          title="Message"
        />
        <Button
          onPress={() => navigate('Settings')}
          title="Settings"
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


export default Home;
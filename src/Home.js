import React, {Component} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

import {CardStack} from 'react-navigation';

const {BackButton} = CardStack.Header

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    header: ({goBack}) => {
      let right = <Button title="Info"/>;
      let left = <BackButton onPress={() => goBack(null)}/>
      let style = {backgroundColor: 'white'};
      let title = <TextInput value="sdghsdghjsghjsdghjsd"
        style={{width: 200, height: 40, borderColor: 'gray', borderWidth: 1}}
      />


      return {right, left, style, title}

    },
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
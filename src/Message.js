import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {CardStack} from 'react-navigation';

const {BackButton} = CardStack.Header

class Message extends Component {
  static navigationOptions = {
    title: 'Message',
    header: ({goBack}) => {
      let right = <Button title="Info"/>;
      let left = <BackButton onPress={() => goBack(null)}/>
      let style = {backgroundColor: 'blue'};
      return {right, left, style}

    },
    cardStack: {
      gesturesEnabled: false
    }
  };

  render() {
    const {navigate, goBack} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>Message</Text>
        <Button
          onPress={() => navigate('Settings')}
          title="Settings"
        />
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


export default Message;
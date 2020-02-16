import React, { Component } from 'react';
import { Keyboard, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, View } from 'aws-amplify-react-native';
 
import Button from "./components/Button";

export default class LandingScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
        <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              //placeholder={i18n.t('settings.name_placeholder')}
              maxLength={20}
              onBlur={Keyboard.dismiss}
              value={this.state.name}
              onChangeText={this.handleNameChange}
            />
          </View>
          <View style={[styles.inputContainer, { flex: 1, justifyContent: 'flex-end' }]}>
            <Button onPress={this.handleSubmit}>
             
            </Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 45
    },
    inputContainer: {
      paddingTop: 15
    },
    textInput: {
      borderColor: '#CCCCCC',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      height: 50,
      fontSize: 25,
      paddingLeft: 20,
      paddingRight: 20
    }
  });
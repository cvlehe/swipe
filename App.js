import React from 'react';
import { StyleSheet } from 'react-native';
import Ball from "./src/Ball";

export default class App extends React.Component {
  render() {
    return (
      <Ball style={styles.container}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

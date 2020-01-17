import React, { Component } from 'react';
import { Button, View, StyleSheet } from 'react-native';

export default class BarcodeMenu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={'Read Barcode'}
          style={styles.input}
          onPress={() => {this.props.navigation.navigate('BarcodeRead')}}
        />
        <Button
          title={'Add Barcode'}
          style={styles.input}
          onPress={() => {this.props.navigation.navigate('BarcodeAdd')}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

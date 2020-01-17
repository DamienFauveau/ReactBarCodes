import React, { Component } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

export default class BarcodeAdd extends Component {

  constructor(props) {
    super(props);
    this.state = {
        name: '',
    };
  }

  onAdd() {
    const { name } = this.state;
    alert(name);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
          placeholder={'name'}
          style={styles.input}
        />
        <Button
          title={'Add Barcode'}
          style={styles.input}
          onPress={this.onAdd.bind(this)}
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

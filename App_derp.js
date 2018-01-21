import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
	_onPress() {
		console.log('Pressed!');
	}
  render() {
    return (
    <View style={styles.container1}>
		<View style={{flex: 1, backgroundColor: 'white'}} />
		<View style={styles.buttonContainer}>
			<Button onPress={this._onPress} title="+   Add item" color="#000000" accessibilityLabel="Tap on Me"/>
		</View>
		<View style={styles.container2}>
			<View>
				<Text>What do you want to do today?</Text>
				<Text>Start adding items to your to do list.</Text>
			</View>
		</View>
    </View>
	  

    );
  }
}


const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#DDD',
    alignItems: 'center',
    justifyContent: 'center',
	alignSelf: 'stretch',
  },
  buttonContainer: {
    backgroundColor: '#000000',
    borderRadius: 50,
	width: 200,
    padding: 10
  }
});

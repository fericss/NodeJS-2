import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
	_onPress() {
		console.log('Pressed!');
	}
  render() {
	var date = new Date();
    return (
    <View style={styles.body}>
		<View style={styles.container1}>
			<View>
				<Text style={styles.headline}>todo</Text>
				<Text style={styles.smallText}>{date.toDateString()}</Text>
			</View>
		</View>
		<View style={styles.container2}>
			<View>
				<Text style={styles.smallText}>What do you want to do today?</Text>
				<Text style={styles.smallText}>Start adding items to your to do list.</Text>
			</View>
		</View>
		<View style={styles.absolute}>
			<View style={styles.buttonContainer}>
				<Button onPress={this._onPress} title="+   Add item" color="#000000" accessibilityLabel="Tap on Me"/>
			</View>
		</View>
    </View>
	   

    ); 
  }
}


const styles = StyleSheet.create({
	body: {
		flex: 1,
	},
	smallText: {
		textAlign: 'center',
		color: "#828282",
	},
	absolute: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        alignContent: 'center',
		alignItems: 'center',
        justifyContent: 'center',
		zIndex: 50000
    },
	container1: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'stretch'
	},
	container2: {
		flex: 1,
		backgroundColor: '#f6f6f6',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'stretch'
	},
	buttonContainer: {
		backgroundColor: '#000000',
		borderRadius: 50,
		width: 200,
		padding: 10
	},
	headline: {
		textAlign: 'center', // <-- the magic
		fontWeight: 'bold',
		fontSize: 24,
		marginTop: 0,
	}
});

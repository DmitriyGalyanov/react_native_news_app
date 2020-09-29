/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'; // to index.js?
import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
	Header,
	Colors
} from 'react-native/Libraries/NewAppScreen';

import AllNewsListScreen from 'screens/AllNewsListScreen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
	return (
		<NavigationContainer>
			{/* <SafeAreaView> */}
				{/* <StatusBar barStyle="dark-content" /> */}
				{/* <AllNewsListScreen /> */}
				<Stack.Navigator>
					<Stack.Screen name="AllNewsList" component={AllNewsListScreen} />
				</Stack.Navigator>
			{/* </SafeAreaView> */}
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter,
	},
	engine: {
		position: 'absolute',
		right: 0,
	},
	body: {
		backgroundColor: Colors.white,
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: Colors.black,
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
		color: Colors.dark,
	},
	highlight: {
		fontWeight: '700',
	},
	footer: {
		color: Colors.dark,
		fontSize: 12,
		fontWeight: '600',
		padding: 4,
		paddingRight: 12,
		textAlign: 'right',
	},
});

export default App;

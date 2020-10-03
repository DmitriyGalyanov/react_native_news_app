import React from 'react';

import {View, Dimensions, StyleSheet} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import SearchBar from 'components/SearchBar';

import HomeMainScreen from './home/HomeMainScreen';

import NewsPieceWebView from 'components/NewsPieceWebView';

import themeColors from 'theme/colors';


const HomeScreenStack = createStackNavigator();

export default function HomeScreen() {
	return (
		<HomeScreenStack.Navigator initialRouteName="HomeMainScreen">
			<HomeScreenStack.Screen name="HomeMainScreen" component={HomeMainScreen}
				options={{
					title: 'Home',
					headerStyle: {
						backgroundColor: themeColors.main
					},
					headerTintColor: themeColors.accent,
					headerRight: () => {
						return (
							<View style={styles.searchBar}>
								<SearchBar />
							</View>
						)
					}
				}}
			/>
			<HomeScreenStack.Screen name="NewsPieceWebView" component={NewsPieceWebView}
				options={{
					title: 'News Web View (HOME)',
					headerStyle: {
						backgroundColor: themeColors.main
					},
					headerTintColor: themeColors.accent
				}}
			/>
		</HomeScreenStack.Navigator>
	)
}

const {width: windowWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
	searchBar: {
		marginRight: windowWidth * 0.075,
		// alignSelf: "center"
		// why it centers only after first animation?
	}
});
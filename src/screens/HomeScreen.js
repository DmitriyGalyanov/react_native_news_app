import React, {useState, useEffect} from 'react';

import {View, Dimensions, StyleSheet} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import SearchBar from 'components/SearchBar';

import HomeMainScreen from './home/HomeMainScreen';

import NewsPieceWebView from 'components/NewsPieceWebView';

import {useSelector} from 'react-redux';
import {selectLanguageData} from 'state_slices/languageSlice';

// import themeColors from 'theme/colors';

import topBarStyleOptions from 'theme/topBarStyleOptions';


const HomeScreenStack = createStackNavigator();

export default function HomeScreen() {

	const [localization, setLocalization] = useState({});

	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	useEffect(() => {
		import(`localization`)
		.then(data => {
			setLocalization(data[interfaceLanguage].screensTitles);
		});
	}, [interfaceLanguage]);

	const {homeScreenTitle,
		newsPieceWebViewScreenTitle} = localization;

	return (
		<HomeScreenStack.Navigator initialRouteName="HomeMainScreen"
			screenOptions={topBarStyleOptions}
			headerMode='screen'
		>
			<HomeScreenStack.Screen name="HomeMainScreen" component={HomeMainScreen}
				options={{
					title: homeScreenTitle,
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
					title: `${newsPieceWebViewScreenTitle}`,
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
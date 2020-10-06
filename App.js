/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


if(__DEV__) {
	import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
};
import Reactotron from 'reactotron-react-native';

import 'react-native-gesture-handler'; // to index.js?
import React from 'react';

import { Provider } from 'react-redux';
import store from 'app_redux/store';

import { NavigationContainer } from '@react-navigation/native';

// import BottomNavTab from 'navs/BottomNavTab';
import MainDrawerNav from 'navs/MainDrawerNav';


const App: () => React$Node = () => {
	Reactotron.log('hello rendering world'); //e.g
	return (
		<Provider store={store}>
			<NavigationContainer>
				<MainDrawerNav />
			</NavigationContainer>
		</Provider>
	);
};

export default App;

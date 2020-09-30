/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'; // to index.js?
import React from 'react';


import { NavigationContainer } from '@react-navigation/native';

import BottomNavTab from 'navs/BottomNavTab';

const App: () => React$Node = () => {
	return (
		<NavigationContainer>
			<BottomNavTab />
		</NavigationContainer>
	);
};

export default App;

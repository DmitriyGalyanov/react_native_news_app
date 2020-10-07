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

import {Provider} from 'react-redux';
import {store,
	persistor} from 'app_redux/store';
import {PersistGate} from 'redux-persist/integration/react';

import LoadingIndicator from 'components/LoadingIndicator';

import { NavigationContainer } from '@react-navigation/native';

import MainDrawerNav from 'navs/MainDrawerNav';


const App: () => React$Node = () => {
	Reactotron.log('hello rendering world'); //e.g

	return (
		<Provider store={store}>
			<PersistGate loading={<LoadingIndicator target='App State'/>}
				persistor={persistor}
			>
				<NavigationContainer>
					<MainDrawerNav />
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
};

export default App;

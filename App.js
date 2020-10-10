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

import CenteredAlert from 'components/CenteredAlert';

import {NavigationContainer} from '@react-navigation/native';

import RootDrawerNav from 'navs/RootDrawerNav';

import {LocalizationProvider} from 'localization/LocalizationContext';


export default function App() {
	Reactotron.log('hello rendering world'); //e.g

	return (
		<Provider store={store}>
			<LocalizationProvider>
				<PersistGate loading={<CenteredAlert alertText='appstateisloading'/>}
					persistor={persistor}
				>
					<NavigationContainer>
						<RootDrawerNav />
					</NavigationContainer>
				</PersistGate>
			</LocalizationProvider>
		</Provider>
	);
};

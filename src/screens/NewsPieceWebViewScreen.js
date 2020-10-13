import React from 'react';
import PropTypes from 'prop-types';

import Reactotron from 'reactotron-react-native';

import {Linking} from 'react-native';

import {WebView} from 'react-native-webview';


NewsPieceWebViewScreen.propTypes = {
	navigation: PropTypes.object.isRequired,

	route: PropTypes.shape({
		key: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		params: PropTypes.shape({
			uri: PropTypes.string.isRequired,
			parentStackName: PropTypes.string.isRequired //
		})
	}).isRequired,
};
export default function NewsPieceWebViewScreen(props) {
	Reactotron.log(props)
	const {navigation} = props;
	Reactotron.log(navigation.canGoBack())

	const {uri,
		parentStackName
	} = props?.route?.params;
	if (uri === undefined) {
		navigation.navigate(parentStackName);
	}

	const handleOpenUrl = async () => {
		const isSupported = await Linking.canOpenURL(uri);
		if (isSupported) {
			await Linking.openURL(uri);
		} else {
			alert("Don't know how to open this URL")
		}
	}

	const handleError = () => {
		navigation.navigate(parentStackName);
		// console.log('test')
		// navigation.goBack();
		handleOpenUrl();
	}

	return (
		<WebView
			source={{
			uri: uri
			// uri: 'https://edition.cnn.com/2020/09/12/politics/mcenany-trump-election-night-results/index.html'
			}}
			onError={() => {
				handleError();
			}}
		/>
	)
}
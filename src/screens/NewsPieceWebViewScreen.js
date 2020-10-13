import React from 'react';
import PropTypes from 'prop-types';

import {Linking} from 'react-native';

import {WebView} from 'react-native-webview';


NewsPieceWebViewScreen.propTypes = {
	navigation: PropTypes.object.isRequired,

	route: PropTypes.shape({
		key: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		params: PropTypes.shape({
			uri: PropTypes.string.isRequired,
		})
	}).isRequired,
};
export default function NewsPieceWebViewScreen(props) {
	const {navigation} = props;

	const {uri} = props?.route?.params;
	if (uri === undefined) {
		navigation.goBack();
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
		navigation.goBack(null);
		handleOpenUrl();
	}

	return (
		<WebView
			source={{
			uri: uri
			}}
			onError={() => {
				handleError();
			}}
		/>
	)
}
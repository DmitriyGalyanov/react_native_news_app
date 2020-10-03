import React from 'react';

import {Button, Linking} from 'react-native'

import { useNavigation } from '@react-navigation/native';


import { WebView } from 'react-native-webview';

export default function NewsPieceWebView(props) {
	const navigation = useNavigation();

	const {uri,
		parentTabName,
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
		navigation.navigate(parentStackName); //navigation.goBack() and navigation.pop() throw errors
		handleOpenUrl();
	}

	return (
		<>
		{/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
			<WebView
				source={{
				uri: uri
				}}
				onError={() => {
						handleError();
				}}
			/>
		</>
	)
}
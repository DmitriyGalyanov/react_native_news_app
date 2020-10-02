import React from 'react';

// import {Text} from 'react-native';

// import BookmarksScreenStack from ...

import { WebView } from 'react-native-webview';

export default function NewsPieceWebView(props) {
	const {uri} = props?.route?.params;
	// if (uri === undefined) {
	// 	//navigate back
	// }
	return (
		<>
			<WebView
				source={{
				uri: uri
				}}
				onError={(syntheticEvent) => {
					// const { nativeEvent } = syntheticEvent;
					// console.log('WebView error: ', nativeEvent);
					// return;
					console.log(syntheticEvent.nativeEvent, 'native event')
					// Linking.canOpenURL(uri).then(supported => {
					// 	if (supported) {
					// 		Linking.openURL(uri);
					// 	} else {
					// 		console.log("Don't know how to open URI: " + uri);
					// 	}
					// });
				}}
			/>
		</>
	)
}
import React from 'react';

import {View, Text} from 'react-native';

export default function NewsPiece(props) {
	console.log(props);
	return (
		<View>
			<Text>News Piece Header</Text>
			<Text>News Piece Cont</Text>
		</View>
	)
}

/*
img
author and bookmark icon
title
content (cut if needed)
publisher       link to source   link to news piece page
publishedAt
*/
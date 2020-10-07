import React from 'react';

import DrawerCallButton from 'components/DrawerCallButton';

import {HeaderBackButton} from '@react-navigation/stack';

import themeColors from 'theme/colors';

const headerLeft = (props) => {
	const {canGoBack} = props;

	if (!canGoBack) return <DrawerCallButton {...props}/>
	else return <HeaderBackButton {...props}/>;
};


export default {
	headerStyle: {
		backgroundColor: themeColors.main
	},
	headerTintColor: themeColors.accent,
	headerLeft: props => headerLeft(props)
}
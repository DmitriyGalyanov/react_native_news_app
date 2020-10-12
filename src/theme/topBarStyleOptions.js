import React from 'react';

import DrawerCallButton from 'components/DrawerCallButton';

import {HeaderBackButton} from '@react-navigation/stack';

export const headerLeft = (props) => {
	const {canGoBack} = props;

	if (!canGoBack) return <DrawerCallButton {...props}/>
	else return <HeaderBackButton {...props}/>;
};


export default {
	headerLeft: props => headerLeft(props)
}
import React, {useState, useEffect} from 'react';

import {StyleSheet,
	TouchableNativeFeedback
} from 'react-native';

import {Divider} from 'react-native-paper';

import {DrawerContentScrollView,
	DrawerItemList
} from '@react-navigation/drawer';

import ParametersButtonsGroup from 'components/ParametersButtonsGroup';

import {useSelector, useDispatch} from 'react-redux';
import {selectLanguageData} from 'state_slices/languageSlice';
import {setLanguage} from 'state_slices/languageSlice';


export default function MainDrawerContent(props) {
	const dispatch = useDispatch();
	// const ripple = TouchableNativeFeedback.Ripple('#adacac', false);

	const [localization, setLocalization] = useState({
		parametersTitles: {},
		buttonsTitles: {
			interfaceLanguageButtonsTitles: {}
		}
	});

	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	useEffect(() => {
		import(`localization`)
		.then(data => {
			setLocalization(data[interfaceLanguage]);
		});
	}, [interfaceLanguage]);

	const {interfaceLanguageTitle} = localization.parametersTitles;

	const {interfaceLanguageButtonsTitles} = localization.buttonsTitles;

	const {ru, en} = interfaceLanguageButtonsTitles;

	const interfaceLanguageButtons = [
		{
			title: ru ?? '',
			value: 'ru'
		},
		{
			title: en ?? '',
			value: 'en'
		}
	];

	return (
		<DrawerContentScrollView {...props}>
			<DrawerItemList {...props} />
			<Divider />
			<ParametersButtonsGroup wrapStyle={styles.languageButtonsWrap}
				row
				buttonsStyle={styles.button}
				header={interfaceLanguageTitle}
				parameterValue={interfaceLanguage}
				buttonsData={interfaceLanguageButtons}
				onPress={value => dispatch(setLanguage(value))}
			/>
		</DrawerContentScrollView>
	);
}

const styles = StyleSheet.create({
	languageButtonsWrap: {
		paddingHorizontal: 10,
	},
	button: {
		minWidth: 110
	}
})
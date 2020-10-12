import React, {useContext} from 'react';

import {StyleSheet} from 'react-native';

import {Divider} from 'react-native-paper';

import {DrawerContentScrollView,
	DrawerItemList} from '@react-navigation/drawer';

import ParametersButtonsGroup from 'components/ParametersButtonsGroup';
import ThemeButtonsGroup from 'components/ThemeButtonsGroup';

import {useSelector, useDispatch} from 'react-redux';
import {selectLanguageData,
	setLanguage} from 'state_slices/languageSlice';

import {LocalizationContext} from 'localization/LocalizationContext';


export default function MainDrawerContent(props) {
	const dispatch = useDispatch();

	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	const localization = useContext(LocalizationContext)[interfaceLanguage];

	const {interfaceLanguageTitle} = localization.parametersTitles;

	const {interfaceLanguageButtonsTitles} = localization.buttonsTitles;

	const {ru, en} = interfaceLanguageButtonsTitles;

	const interfaceLanguageButtons = [
		{
			title: ru ?? 'Русский',
			value: 'ru'
		},
		{
			title: en ?? 'English',
			value: 'en'
		}
	];

	return (
		<DrawerContentScrollView {...props}>
			<DrawerItemList {...props} />
			<Divider
				style={{marginHorizontal: 10,}}
			/>
			<ParametersButtonsGroup wrapStyle={styles.languageButtonsWrap}
				row
				buttonsStyle={styles.button}
				header={interfaceLanguageTitle}
				parameterValue={interfaceLanguage}
				buttonsData={interfaceLanguageButtons}
				onPress={value => dispatch(setLanguage(value))}
			/>
			<ThemeButtonsGroup
				groupWrapStyles={{paddingHorizontal: 10}}
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
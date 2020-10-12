import React, {useContext} from 'react';

import {View,
	TouchableHighlight,
	StyleSheet} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useNavigation } from '@react-navigation/native';

import {useSelector} from 'react-redux';
import {selectThemeData} from 'state_slices/themeSlice';

import themeColors from 'theme/colors';

import {ThemeContext} from 'theme/ThemeContext';


export default function DrawerCallButton(props) {
	const themeName = useSelector(selectThemeData).entries.value;

	const theme = useContext(ThemeContext);
	console.log(theme, 'theme')
	console.log(themeName, 'themeName')

	const navigation = useNavigation();

	return (
		<View style={styles.wrap}>
			<TouchableHighlight
				underlayColor={themeColors.main}
				onPress={() => navigation.openDrawer()}
			>
				<MaterialCommunityIcons name="menu"
					size={26}
					color={props.tintColor}
				/>
			</TouchableHighlight>
		</View>
	)
}


const styles = StyleSheet.create({
	wrap: {
		flexDirection: 'row',
		alignContent: 'center',
		alignItems: "center",
		marginVertical: 3,
		marginHorizontal: 11
	},
})
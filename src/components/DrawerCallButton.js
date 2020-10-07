import React from 'react';

import {View,
	TouchableHighlight,
	StyleSheet} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useNavigation } from '@react-navigation/native';

import themeColors from 'theme/colors';


export default function DrawerCallButton(props) {
	const navigation = useNavigation();
	// const {tintColor} = props;

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
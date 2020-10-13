import React from 'react';
import PropTypes from 'prop-types';

import {View, TouchableHighlight,
	StyleSheet} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {selectThemeData, setTheme} from 'state_slices/themeSlice';

ThemeButtonsGroup.propTypes = {
	wrapStyle: PropTypes.oneOfType([
		PropTypes.arrayOf(
			PropTypes.objectOf(
				PropTypes.oneOfType([
					PropTypes.string,
					PropTypes.number,
				])
			)
		),
		PropTypes.objectOf(
			PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.number,
			])
		)
	])
};
export default function ThemeButtonsGroup(props) {
	const dispatch = useDispatch();

	const {groupWrapStyles} = props;

	const themesList = useSelector(selectThemeData).entries.themesList;
	const currentTheme = useSelector(selectThemeData).entries.value;

	const handlePress = (value) => {
		dispatch(setTheme(value));
	};

	return (
		<View 
			style={[
				styles.groupWrap,
				groupWrapStyles
			]}
		>
			{Object.entries(themesList).map(theme => {
				const themeData = theme[1];
				const {title: value, buttonColor} = themeData;
				return (
					<ThemeButton key={theme[0]}
						onPress={() => handlePress(value)}
						color={buttonColor}
						chosen={value === currentTheme}
					/>
				)
			})}
		</View>
	)
}


function ThemeButton(props) {
	const {value,
		onPress: handlePress,
		color, chosen} = props;

	return (
		<TouchableHighlight
			style={{borderRadius: 28}}
			onPress={() => handlePress(value)}
			activeOpacity={0.7}
			underlayColor='white'
		>
			<View
				style={[
					styles.buttonWrap,
					{
						borderColor: chosen ? color : 'white'
					}
				]}
			>
				<View
					style={[
						styles.button,
						{
							backgroundColor: color,
						}
					]}
				/>
			</View>
		</TouchableHighlight>
	)
}


const styles = StyleSheet.create({
	groupWrap: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},

	buttonWrap: {
		padding: 6,
		borderWidth: 1,
		borderRadius: 30,
		backgroundColor: 'white',
	},
	button: {
		width: 27, height: 27,
		borderRadius: 15,
	},
});
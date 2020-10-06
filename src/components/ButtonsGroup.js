import React from 'react';

import {View, Text,
	StyleSheet} from 'react-native';

import {useDispatch} from 'react-redux';
import {changeEndpoint,
	changeCountry,
	changeCategory,
	changeLanguage,
	changeSortBy} from 'state_slices/searchParametersSlice';

import ParametersButton from 'components/ParametersButton';


export default function ButtonsGroup(props) {
	const dispatch = useDispatch();

	const {row, header,
		parameterType, parameterValue,
		disabled, disabledNote,
		buttonsData} = props;

	const handlePress = (value) => { //questionable solution
		switch(parameterType) {
			case 'endpoint': {
				dispatch(changeEndpoint(value));
				break;
			};
			case 'country': {
				dispatch(changeCountry(value));
				break;
			};
			case 'category': {
				dispatch(changeCategory(value));
				break;
			}
			case 'language': {
				dispatch(changeLanguage(value));
				break;
			};
			case 'sortBy': {
				dispatch(changeSortBy(value));
				break;
			};
		}
	};

	return (
		<View style={styles.wrap}>
			<Text style={[
					styles.header,
					{alignSelf: row ? 'flex-start' : 'center'}
				]}>
				{header}
			</Text>
			<View style={[
					styles.list,
					{flexDirection: row ? 'row' : 'column'}
				]}
			>
				{buttonsData.map((button, index) => {
					const {title, value} = button;
					return <ParametersButton key={index}
						parameterType={parameterType}
						title={title}
						value={value}
						onPress={handlePress}
						disabled={disabled}
						chosen={parameterValue === value}
					/>
				})}
			</View>
			{disabled && (
				<View style={styles.disabledNoteWrap}>
					<Text style={styles.disabledNote}>
						{`${header} is ${disabledNote}`}
					</Text>
				</View>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		paddingHorizontal: 20
	},
	header: {
	},
	list: { //give it a border?
		justifyContent: "space-between",
		flexWrap: "wrap"
	},
	disabledNoteWrap: {
		flexDirection: "row",
	},
	disabledNote: {
		flex: 1,
		flexWrap: "wrap",
		textAlign: "center"
	}
});
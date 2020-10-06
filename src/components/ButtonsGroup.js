import React from 'react';

import {View, Text,
	StyleSheet} from 'react-native';

import {useDispatch} from 'react-redux';
import {changeEndpoint,
	changeCountry,
	changeLanguage,
	changeSortBy} from 'state_slices/searchParametersSlice';

import ParametersButton from 'components/ParametersButton';


export default function ButtonsGroup(props) {
	const dispatch = useDispatch();

	const {row,
		header,
		parameterType,
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
					/>
				})}
			</View>
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
});
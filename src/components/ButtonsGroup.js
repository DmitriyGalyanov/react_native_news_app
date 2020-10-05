import React from 'react';

import {View, Text,
	StyleSheet} from 'react-native';

// import {useDispatch} from 'react-redux';
// import {changeEndpoint,
// 	changeCountry} from 'state_slices/searchParametersSlice';

import ParametersButton from 'components/ParametersButton';


export default function ButtonsGroup(props) {
	// const dispatch = useDispatch();

	const {row,
		header,
		parameterType,
		buttonsData} = props;

	// const dispatchAction = () => {
	// 	switch(parameterType) {
	// 		case 'endpoint': {
	// 			return dispatch(changeEndpoint());
	// 		};
	// 		case 'country': {
	// 			return dispatch(changeCountry());
	// 		};
	// 		// case 'category': {
	// 		// 	return console.log('tes')
	// 		// }
	// 		// default: {
	// 		// 	return console.log('test');
	// 		// }
	// 	}
	// };

	return (
		<View>
			<Text style={styles.header}>
				{header}
			</Text>
			<View style={[
					styles.wrap,
					{flexDirection: row ? 'row' : 'column'}
				]}
			>
				{buttonsData.map((button, index) => {
					const {title, value} = button;
					return <ParametersButton key={index}
						parameterType={parameterType}
						title={title}
						value={value}
						
					/>
				})}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: { //give it a border?
		// flexDirection: "row",
		// paddingHorizontal: 10,
		paddingHorizontal: 20,
		justifyContent: "space-between",
		flexWrap: "wrap"
	},
	header: {
		alignSelf: 'center'
	}
	// buttonWrap: {
	// 	// flexGrow: 1,
	// 	// marginHorizontal: 10
		
	// 	// flexBasis: 80
	// 	// width: windowWidth * 0.2
	// 	// width: 100
	// }
});
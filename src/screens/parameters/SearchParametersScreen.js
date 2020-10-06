import React from 'react';

import {View} from 'react-native';

import ButtonsGroup from 'components/ButtonsGroup';

import {useSelector} from 'react-redux';
import {
	selectSearchParametersData} from 'state_slices/searchParametersSlice';


export default function SearchParametersScreen() {
	const searchParametersData = useSelector(selectSearchParametersData).entries;
	const {endpoint,
		country,
		language,
		category,
		sortBy
	} = searchParametersData;


	const endpointButtons = [
		{
			title: 'Top headlines',
			value: 'top-headlines'
		},
		{
			title: 'Everything',
			value: 'everything'
		}
	];
	const categoryButtons = [
		{
			title: 'Business',
			value: 'business'
		},
		{
			title: 'Entertainment',
			value: 'entertainment'
		},
		{
			title: 'General',
			value: 'general'
		},
		{
			title: 'Health',
			value: 'health'
		},
		{
			title: 'Science',
			value: 'science'
		},
		{
			title: 'Sports',
			value: 'sports'
		},
		{
			title: 'Technology',
			value: 'technology'
		},
		{
			title: 'Any',
			value: ''
		}
	];
	const countryButtons = [
		{
			title: 'USA',
			value: 'us'
		},
		{
			title: 'Russia',
			value: 'ru'
		},
		{
			title: 'UAE',
			value: 'ae'
		},
		{
			title: 'Belgium',
			value: 'be'
		},
		{
			title: 'Czech Republic', //shorten?
			value: 'cz'
		},
		{
			title: 'France',
			value: 'fr'
		},
		{
			title: 'South Korea',
			value: 'kr'
		},
		{
			title: 'Any',
			value: ''
		},
	];
	const languageButtons = [
		{
			title: 'English',
			value: 'en'
		},
		{
			title: 'Russian',
			value: 'ru'
		}
	];
	const sortByButtons = [
		{
			title: 'Relevancy',
			value: 'relevancy'
		},
		{
			title: 'Popularity',
			value: 'popularity'
		},
		{
			title: 'Published at',
			value: 'publishedAt'
		},
	];

	return (
		<View>
			<ButtonsGroup row
				header='Endpoint'
				parameterType='endpoint'
				parameterValue={endpoint}
				buttonsData={endpointButtons}
			/>
			<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
				<ButtonsGroup
					header='Country'
					parameterType='country'
					parameterValue={country}
					buttonsData={countryButtons}
					disabled={endpoint === 'everything'}
					disabledNote='only applicable with Top Headlines endpoint'
				/>
				<ButtonsGroup
					header='Category'
					parameterType='category'
					parameterValue={category}
					buttonsData={categoryButtons}
					disabled={endpoint === 'everything'}
					disabledNote='only applicable with Top Headlines endpoint'
				/>
			</View>
			<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
				<ButtonsGroup
					header='News Language'
					parameterType='language'
					parameterValue={language}
					buttonsData={languageButtons}
					disabled={endpoint === 'top-headlines'}
					disabledNote='only applicable with Everything endpoint'
				/>
				<ButtonsGroup
					header='Sort by'
					parameterType='sortBy'
					parameterValue={sortBy}
					buttonsData={sortByButtons}
					disabled={endpoint === 'top-headlines'}
					disabledNote='only applicable with Everything endpoint'
				/>
			</View>
			{/*large search bar*/}
		</View>
	)
}
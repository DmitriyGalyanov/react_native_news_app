import React from 'react';

import {View} from 'react-native';

import ButtonsGroup from 'components/ButtonsGroup';


export default function SearchParametersRoute() {
	const endpointButtons = [
		{
			title: 'Top headlines',
			value: 'top-headlines'
		},
		{
			title: 'Everything',
			value: 'everything'
		}
	]; //works with 'top-headlines'
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
			title: 'Business',
			value: 'business'
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
	]; //works with 'top-headlines'
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
	]; //works with 'top-headlines'
	const languageButtons = [
		{
			title: 'English',
			value: 'en'
		},
		{
			title: 'Russian',
			value: 'ru'
		}
	]; //works with 'everything'
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
	]; //works with 'everything'

	return (
		<View>
			<ButtonsGroup row
				header='Endpoint'
				parameterType='endpoint'
				buttonsData={endpointButtons}
			/>
			<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
				<ButtonsGroup
					header='Country'
					parameterType='country'
					buttonsData={countryButtons}
				/>
				<ButtonsGroup
					header='Category'
					parameterType='category'
					buttonsData={categoryButtons}
				/>
			</View>
			<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
				<ButtonsGroup
					header='News Language'
					parameterType='language'
					buttonsData={languageButtons}
				/>
				<ButtonsGroup
					header='Sort by'
					parameterType='sortBy'
					buttonsData={sortByButtons}
				/>
			</View>
			{/*large search bar*/}
		</View>
	)
}
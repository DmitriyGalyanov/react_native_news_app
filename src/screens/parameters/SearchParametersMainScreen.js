import React, {useState, useEffect} from 'react';

import {View, ScrollView} from 'react-native';

import EndpointButtonsGroup from 'components/EndpointButtonsGroup';
import ParametersButtonsGroup from 'components/ParametersButtonsGroup';


import {useSelector, useDispatch} from 'react-redux';
import {selectLanguageData} from 'state_slices/languageSlice';

import {
	selectSearchParametersData,
	changeEndpoint,
	changeCountry,
	changeCategory,
	changeLanguage,
	changeSortBy} from 'state_slices/searchParametersSlice';


export default function SearchParametersMainScreen() {
	const dispatch = useDispatch();

	const [localization, setLocalization] = useState({
		parametersTitles: {},
		buttonsTitles: {
			endpointButtonsTitles: {},
			categoryButtonsTitles: {},
			countryButtonsTitles: {},
			languageButtonsTitles: {},
			sortByButtonsTitles: {}
		}
	});

	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	useEffect(() => {
		import(`localization`)
		.then(data => {
			setLocalization(data[interfaceLanguage]);
		});
	}, [interfaceLanguage]);

	const {endpointTitle,
		countryTitle,
		categoryTitle,
		newsLanguageTitle,
		sortByTitle} = localization.parametersTitles;

	const {endpointButtonsTitles,
		categoryButtonsTitles,
		countryButtonsTitles,
		languageButtonsTitles,
		sortByButtonsTitles} = localization.buttonsTitles;

	const {topHeadlines,
		everything} = endpointButtonsTitles;

	const {business,
		entertainment,
		general,
		health,
		science,
		sports,
		technology,
		any: anyCategory} = categoryButtonsTitles;

	const {
		usa,
		russia,
		uae,
		belgium,
		czechRepublic,
		france,
		southKorea,
		any: anyCountry} = countryButtonsTitles;

	const {english,
		russian} = languageButtonsTitles;

	const {relevancy,
	popularity,
	publishedAt} = sortByButtonsTitles;

	const searchParametersData = useSelector(selectSearchParametersData).entries;
	const {endpoint,
		country,
		language,
		category,
		sortBy
	} = searchParametersData;

	const endpointButtons = [
		{
			title: topHeadlines ?? '',
			value: 'top-headlines'
		},
		{
			title: everything ?? '',
			value: 'everything'
		}
	];
	const categoryButtons = [
		{
			title: business ?? '',
			value: 'business'
		},
		{
			title: entertainment ?? '',
			value: 'entertainment'
		},
		{
			title: general ?? '',
			value: 'general'
		},
		{
			title: health ?? '',
			value: 'health'
		},
		{
			title: science ?? '',
			value: 'science'
		},
		{
			title: sports ?? '',
			value: 'sports'
		},
		{
			title: technology ?? '',
			value: 'technology'
		},
		{
			title: anyCategory ?? '',
			value: ''
		}
	];
	const countryButtons = [
		{
			title: usa ?? '',
			value: 'us'
		},
		{
			title: russia ?? '',
			value: 'ru'
		},
		{
			title: uae ?? '',
			value: 'ae'
		},
		{
			title: belgium ?? '',
			value: 'be'
		},
		{
			title: czechRepublic ?? '',
			value: 'cz'
		},
		{
			title: france ?? '',
			value: 'fr'
		},
		{
			title: southKorea ?? '',
			value: 'kr'
		},
		{
			title: anyCountry ?? '',
			value: ''
		},
	];
	const languageButtons = [
		{
			title: english ?? '',
			value: 'en'
		},
		{
			title: russian ?? '',
			value: 'ru'
		}
	];
	const sortByButtons = [
		{
			title: relevancy ?? '',
			value: 'relevancy'
		},
		{
			title: popularity ?? '',
			value: 'popularity'
		},
		{
			title: publishedAt ?? '',
			value: 'publishedAt'
		},
	];

	const applicableOnlyWithTopHeadlines = () => {
		switch(interfaceLanguage) {
			case 'ru': {
				return 'можно выбрать только с разделом "Главное"'
			};
			case 'en': {
				return 'is only applicable with Top Headlines endpoint'
			};
		}
	};
	const applicableOnlyWithEverything = () => {
		switch(interfaceLanguage) {
			case 'ru': {
				return 'можно выбрать только с разделом "Всё"'
			};
			case 'en': {
				return 'is only applicable with Everything endpoint'
			};
		}
	};

	return (
		<ScrollView>
			<EndpointButtonsGroup
				header={endpointTitle}
				parameterValue={endpoint}
				buttonsData={endpointButtons}
				onPress={(value) => dispatch(changeEndpoint(value))}
			/>
			<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
				<ParametersButtonsGroup
					header={countryTitle}
					parameterValue={country}
					buttonsData={countryButtons}
					onPress={(value) => dispatch(changeCountry(value))}
					disabled={endpoint === 'everything'}
					disabledNote={applicableOnlyWithTopHeadlines()}
				/>
				<ParametersButtonsGroup
					header={categoryTitle}
					parameterValue={category}
					buttonsData={categoryButtons}
					onPress={(value) => dispatch(changeCategory(value))}
					disabled={endpoint === 'everything'}
					disabledNote={applicableOnlyWithTopHeadlines()}
				/>
			</View>
			<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
				<ParametersButtonsGroup
					header={newsLanguageTitle}
					parameterValue={language}
					buttonsData={languageButtons}
					onPress={(value) => dispatch(changeLanguage(value))}
					disabled={endpoint === 'top-headlines'}
					disabledNote={applicableOnlyWithEverything()}
				/>
				<ParametersButtonsGroup
					header={sortByTitle}
					parameterValue={sortBy}
					buttonsData={sortByButtons}
					onPress={(value) => dispatch(changeSortBy(value))}
					disabled={endpoint === 'top-headlines'}
					disabledNote={applicableOnlyWithEverything()}
				/>
			</View>
		</ScrollView>
	)
}
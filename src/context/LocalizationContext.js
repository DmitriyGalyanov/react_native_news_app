import React from 'react';

import {localization} from 'localization';

export const LocalizationContext = React.createContext();

export function LocalizationProvider(props) {
	return (
		<LocalizationContext.Provider value={localization}>
			{props.children}
		</LocalizationContext.Provider>
	)
}
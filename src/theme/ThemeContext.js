import React from 'react';

import {theme} from 'theme';

export const ThemeContext = React.createContext();

export function ThemeProvider(props) {
	return (
		<ThemeContext.Provider value={theme}>
			{props.children}
		</ThemeContext.Provider>
	)
}
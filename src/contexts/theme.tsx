import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar, useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import Theme from '../theme';

import { THEME_KEY } from '@env';

interface ThemeContextData {
	toggleTheme(): void;
	theme: CustomThemeProps;
}

export interface CustomThemeProps {
	name: string;
	colors: {
		primary: string;
		primary2: string;
		secondary: string;
		tertiary: string;
		quaternary: string;
		quaternary2: string;
		quiternary: string;
		white: string;
		black: string;
	}
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const CustomThemeProvider: React.FC = ({ children }) => {
	const scheme = useColorScheme();
	const [theme, setTheme] = useState<CustomThemeProps>(Theme['dark']);
	useEffect(() => {
		async function loadStorageData() {
			const themeScheme = await AsyncStorage.getItem(THEME_KEY);
			if (themeScheme == 'dark' || themeScheme == 'light') {
				setTheme(Theme[themeScheme])
			}else if(scheme){
				setTheme(Theme[scheme])
			}
		}
		loadStorageData();
	}, []);

	const toggleTheme = useCallback(async () => {
		if (theme.name === 'dark') {
			await AsyncStorage.setItem(THEME_KEY, 'light');
			setTheme(Theme['light']);
		}
		else if (theme.name === 'light') {
			await AsyncStorage.setItem(THEME_KEY, 'dark');
			setTheme(Theme['dark']);
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ toggleTheme, theme }} >
			<ThemeProvider theme={theme}>
				<StatusBar 
					barStyle={'light-content'} 
					// barStyle={theme.name == 'light' ? 'dark-content' : 'light-content'} 
					backgroundColor="transparent"
					translucent
				/>
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	)
}

export const useTheme = () => useContext(ThemeContext);
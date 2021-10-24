import React from 'react';
import { CustomThemeProvider } from './contexts/theme';
import UserLayout from './layouts/UserLayout';

const App: React.FC = () => {
	return (
		<CustomThemeProvider>
			<UserLayout />
		</CustomThemeProvider>
	);
}

export default App;
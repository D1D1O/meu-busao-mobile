import React from 'react';
import { StatusBar } from 'react-native';

import App from './src';

const Index: React.FC = () => {
	return (
		<>
			<StatusBar
				translucent
				backgroundColor="transparent"
				barStyle="dark-content"
			/>
			<App />
		</>
	);
}

export default Index;
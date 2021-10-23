import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';

const { Navigator: StackNavigator, Screen: StackScreen } = createStackNavigator();
const { Navigator: DrawerNavigator, Screen: DrawerScreen } = createDrawerNavigator();


const UserLayout: React.FC = () => {

	const DrawerStack = useCallback(() => {
		return (
			<DrawerNavigator screenOptions={{ headerShown: false }}>
				<DrawerScreen name="Home" component={Home} />
			</DrawerNavigator>
		);
	}, []);

	return (
		<NavigationContainer>
			<StackNavigator>
				<StackScreen 
					name="DrawerStack" 
					component={DrawerStack}
					options={{ headerShown: false }}
				/>
			</StackNavigator>
		</NavigationContainer>
	);
}

export default UserLayout;
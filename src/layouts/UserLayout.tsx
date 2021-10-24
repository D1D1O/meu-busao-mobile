import React, { useCallback } from 'react';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import { useTheme } from '../contexts/theme';

const { Navigator: StackNavigator, Screen: StackScreen } = createStackNavigator();
const { Navigator: DrawerNavigator, Screen: DrawerScreen } = createDrawerNavigator();
const { Navigator: TabsNavigator, Screen: TabsScreen } = createBottomTabNavigator();

const UserLayout: React.FC = () => {

	const { theme } = useTheme();

	const TabsStack = useCallback(() => {
		return (
			<TabsNavigator
				initialRouteName="Home"
				screenOptions={({ route }) => ({
					headerShown: false,
					tabBarIcon: ({ focused, color, size }) => {
						if (route.name === 'Home') {
							return <FontAwesome5 name="route" size={24} color={focused ? theme.colors.quaternary2 : theme.colors.quiternary } />;
						} else if (route.name === 'Route') {
							return <MaterialCommunityIcons name="bus-clock" size={24} color={focused ? theme.colors.quaternary2 : theme.colors.quiternary } />;
						}
					},
					tabBarStyle: {
						borderTopWidth: 0,
						backgroundColor: theme.colors.primary,
					},
					tabBarActiveTintColor: theme.colors.quaternary2,
					tabBarInactiveTintColor: theme.colors.quiternary,
					tabBarLabelStyle: {
						fontSize: 12,
						fontWeight: 'bold'
					}
				})}
			>
				<TabsScreen
					name="Home"
					component={Home}
					options={{ tabBarLabel: 'Home' }}
				/>
				<TabsScreen
					name="Route"
					component={Home}
					options={{ tabBarLabel: 'Rotas' }}
				/>
			</TabsNavigator>
		);
	}, []);

	return (
		<NavigationContainer>
			<DrawerNavigator screenOptions={{ headerShown: false }}>
				<DrawerScreen name="TabsStack" component={TabsStack} />
			</DrawerNavigator>
		</NavigationContainer>
	);
}

export default UserLayout;
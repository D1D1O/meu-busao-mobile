import React, { useCallback } from 'react';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Routes from '../pages/Routes';
import LocaleDetails from '../pages/LocaleDetails';
import { useTheme } from '../contexts/theme';

const { Navigator: StackNavigator, Screen: StackScreen } = createNativeStackNavigator();
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
							return <FontAwesome5 name="route" size={24} color={focused ? theme.colors.quaternary2 : theme.colors.quiternary} />;
						} else if (route.name === 'Routes') {
							return <MaterialCommunityIcons name="bus-clock" size={24} color={focused ? theme.colors.quaternary2 : theme.colors.quiternary} />;
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
					name="Routes"
					component={Routes}
					options={{ tabBarLabel: 'Rotas' }}
				/>
			</TabsNavigator>
		);
	}, []);

	return (
		<NavigationContainer>
			<StackNavigator
				initialRouteName="TabsStack"
				screenOptions={{ headerShown: false }}
			>
				<StackScreen name="TabsStack" component={TabsStack} />
				<StackScreen 
					name="LocaleDetails" 
					component={LocaleDetails}
					options={{
						headerShown: true,
						headerTitle: 'Direção',
						headerTitleAlign: 'center',
						headerBackTitleVisible: false,
						headerStyle: {
							backgroundColor:  theme.colors.primary
						},
						headerTintColor: theme.colors.quiternary
					}}
				/>
			</StackNavigator>
		</NavigationContainer>
	);
}

export default UserLayout;
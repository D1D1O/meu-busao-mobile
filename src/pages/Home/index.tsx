import React, { useState, useEffect, useRef } from 'react';
import MapView, { Marker, Region } from 'react-native-maps';
import * as Location from 'expo-location';
import { Modalize } from 'react-native-modalize';
import { View, Dimensions, StyleSheet } from 'react-native';
import MiniIcon from '../../assets/mini-icon.png';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

import {
	Container,
	IconButton,
	NotificationButton,
	IconButtonImage,
	BottomCardButton,
	ButtonOpenModalize,
	ButtonOpenModalizeText
} from './styles';

const { width, height } = Dimensions.get('window');

const Home: React.FC = () => {

	const mapViewRef = useRef<any>();
	const modalizeRef = useRef<Modalize>(null);
	const [location, setLocation] = useState<Location.LocationObject>();
	const [region, setRegion] = useState<Region>({
		latitude: -22.956461,
		longitude: -43.176269,
		latitudeDelta: 0.0343,
		longitudeDelta: 0.0334
	});
	const navigation = useNavigation();

	useEffect(() => {
		async function initialLoading() {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status === 'granted') {
				Location.getCurrentPositionAsync({
					timeInterval: 2000,
					accuracy: 3,
					distanceInterval: 1000
				}).then((position) => {
					setLocation(position);
				});
			} else {
				// showMessage({
				// 	message: 'Precisamos do acesso da sua localização',
				// 	type: 'warning',
				// 	icon: 'warning'
				// });
			}
		}
		initialLoading();
	}, []);

	useEffect(() => {
		if (location) {
			setRegion({
				latitude: location?.coords.latitude,
				longitude: location?.coords.longitude,
				latitudeDelta: 0.007,
				longitudeDelta: 0.007,
			});
		}
	}, [location]);

	return (
		<>
			<Container>
				<MapView
					ref={mapViewRef}
					region={region}
					style={styles.map}
					showsMyLocationButton={false}
					userLocationAnnotationTitle={''}
					loadingEnabled
				/>
				<IconButton 
					style={styles.boxShadow} 
					activeOpacity={0.7}
					onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
				>
					<IconButtonImage source={MiniIcon} />
				</IconButton>
				<NotificationButton style={styles.boxShadow} activeOpacity={0.7}>
					<Ionicons name="notifications-outline" size={35} color="#00A5AB" />
				</NotificationButton>
				<BottomCardButton style={styles.boxShadow}>
					<ButtonOpenModalize activeOpacity={1} onPress={() => modalizeRef.current?.open()}>
						<Ionicons name="search-sharp" size={24} color="black" />
						<ButtonOpenModalizeText>Para onde vamos?</ButtonOpenModalizeText>
					</ButtonOpenModalize>
				</BottomCardButton>
			</Container>
			<Modalize
				ref={modalizeRef}
				modalHeight={height * 0.95}
			>
			</Modalize>
		</>
	);
}

const styles = StyleSheet.create({
	map: {
		width: width,
		height: height,
	},
	boxShadow: {
		shadowOpacity: 0.75,
		shadowRadius: 0,
		shadowColor: '#000',
		shadowOffset: { height: 12, width: 12 },
		elevation: 7
	}
});

export default Home;
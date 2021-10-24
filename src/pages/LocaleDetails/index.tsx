import React, { useState, useRef, useCallback } from 'react';
import MapView, { Marker, Region } from 'react-native-maps';
import * as Location from 'expo-location';
import { MaterialIcons, FontAwesome, Entypo } from '@expo/vector-icons';
import { useTheme } from '../../contexts/theme';
import GoogleMapsStyle from '../../utils/googleMapsStyleDark';

import { Dimensions, StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from 'react-native';

import {
	Container
} from './styles';

const { width, height } = Dimensions.get('window');

const LocaleDetails: React.FC = () => {

	const mapViewRef = useRef<any>();
	const { theme } = useTheme();
	const [location, setLocation] = useState<Location.LocationObject>();
	const [region, setRegion] = useState<Region>({
		latitude: -3.134099959847279,
		longitude: -60.02765164947337,
		latitudeDelta: 0.0343,
		longitudeDelta: 0.0334
	});

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Container>
				<MapView
					ref={mapViewRef}
					style={styles.map}
					region={region}
					provider="google"
					showsUserLocation
					zoomEnabled={false}
					rotateEnabled={false}
					scrollEnabled={false}
					loadingBackgroundColor={theme.colors.primary2}
					showsMyLocationButton={false}
					userLocationAnnotationTitle={''}
					loadingEnabled
					customMapStyle={GoogleMapsStyle}
				/>
				<View>
					<Text>Casa</Text>
					<Text>43 min</Text>
				</View>

			</Container>
			<View
				style={[styles.containerBottomButtons, {
					backgroundColor: theme.colors.primary,
				}]}
			>
				<TouchableOpacity style={{ alignItems: 'center' }} activeOpacity={0.6}>
					<MaterialIcons name="bus-alert" size={26} color={theme.colors.quaternary2} />
					<Text style={{ color: theme.colors.quaternary2 }}>Reportar</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{ alignItems: 'center' }} activeOpacity={0.6}>
					<FontAwesome name="share-square-o" size={26} color={theme.colors.quaternary2} />
					<Text style={{ color: theme.colors.quaternary2 }}>Compartilhar</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{ alignItems: 'center', position: 'relative' }} activeOpacity={0.6}>
					<View style={[styles.iconPlay, { backgroundColor: theme.colors.quaternary2 }]}>
						<Entypo name="controller-play" size={40} style={{ marginLeft: 5 }} color={theme.colors.primary} />
						{/* <Entypo name="controller-stop" size={40} color={theme.colors.primary} /> */}
					</View>
					<Text style={[styles.textGoTo, { color: theme.colors.quaternary2 }]}>Vai de Boa</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	containerBottomButtons: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: 60,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		shadowOpacity: 0.75,
		shadowRadius: 2,
		shadowColor: '#000',
		shadowOffset: { height: 0, width: 0 },
		elevation: 7
	},
	map: {
		width: width,
		height: height * 0.5,
	},
	iconPlay: {
		width: 65,
		height: 65,
		borderRadius: 35,
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		bottom: 22
	},
	textGoTo: {
		fontSize: 18,
		fontWeight: 'bold'
	}
})

export default LocaleDetails;
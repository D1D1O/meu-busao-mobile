import React, { useState, useEffect, useRef, useCallback } from 'react';
import MapView, { Marker, Region } from 'react-native-maps';
import * as Location from 'expo-location';
import { Modalize } from 'react-native-modalize';
import { View, Dimensions, StyleSheet, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native';
import MiniIcon from '../../assets/mini-icon.png';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, DrawerActions, StackActions } from '@react-navigation/native';
import { useTheme } from '../../contexts/theme';
import LocaleFavorited from '../../components/LocaleFavorited';
import LocaleSuggested from '../../components/LocaleSuggested';
import GoogleMapsStyle from '../../utils/googleMapsStyleDark';

import {
	Container,
	IconButton,
	NotificationButton,
	IconButtonImage,
	BottomCardButton,
	ButtonOpenModalize,
	ButtonOpenModalizeText,
	TitleLabel,
	TitleLabelText
} from './styles';

const { width, height } = Dimensions.get('window');

const Home: React.FC = () => {

	const mapViewRef = useRef<any>();
	const modalizeRef = useRef<Modalize>(null);
	const { theme } = useTheme();
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

	const navigatePush = useCallback((name: string) => {
		modalizeRef.current?.close();
		navigation.dispatch(StackActions.push(name));
	},[modalizeRef]);

	return (
		<>
			<Container>
				<MapView
					ref={mapViewRef}
					region={region}
					style={styles.map}
					provider="google"
					loadingBackgroundColor={theme.colors.primary2}
					showsMyLocationButton={false}
					userLocationAnnotationTitle={''}
					loadingEnabled
					customMapStyle={GoogleMapsStyle}
				/>
				<IconButton
					style={styles.boxShadow}
					activeOpacity={0.7}
					onPress={() => {}}
				>
					<IconButtonImage source={MiniIcon} />
				</IconButton>
				<NotificationButton style={styles.boxShadow} activeOpacity={0.7}>
					<Ionicons name="notifications" size={35} color={theme.colors.quiternary} />
				</NotificationButton>
				<BottomCardButton style={styles.boxShadow}>
					<ButtonOpenModalize activeOpacity={0.8} onPress={() => modalizeRef.current?.open()}>
						<FontAwesome name="search" size={20} color="#FF7010" />
						<ButtonOpenModalizeText>Para onde vamos?</ButtonOpenModalizeText>
					</ButtonOpenModalize>
					<TitleLabel>
						<TitleLabelText>
							Favoritos
						</TitleLabelText>
					</TitleLabel>
					<LocaleFavorited onPress={() => navigation.dispatch(StackActions.push('LocaleDetails'))}/>
					<LocaleFavorited onPress={() => navigation.dispatch(StackActions.push('LocaleDetails'))}/>
				</BottomCardButton>
			</Container>
			<Modalize
				ref={modalizeRef}
				modalHeight={height - 50}
				disableScrollIfPossible
				modalStyle={{
					backgroundColor: theme.colors.primary
				}}
			>
				<View style={[styles.headerModalize, { backgroundColor: theme.colors.primary2 }]}>
					<View style={styles.headerContainerModalize}>
						<TouchableOpacity style={styles.headerButtonClose} onPress={() => modalizeRef.current?.close()}>
							<FontAwesome name="chevron-left" size={24} color={theme.colors.quiternary} />
						</TouchableOpacity>
						<Text style={{ fontSize: 16, color: theme.colors.quiternary }}>Planejador de Viagens</Text>
						<View></View>
					</View>
					<View style={styles.groupTextInput}>
						<View style={[styles.containerTextInput, { backgroundColor: theme.colors.primary }]}>
							<MaterialIcons name="radio-button-unchecked" size={16} color={theme.colors.quiternary} />
							<TextInput
								style={[styles.textInputModalize, { color: theme.colors.quiternary }]}
								placeholderTextColor={theme.colors.quiternary}
								placeholder="Sua localização atual"
							/>
						</View>
						<View style={[styles.containerTextInput, { backgroundColor: theme.colors.primary }]}>
							<MaterialIcons name="radio-button-checked" size={16} color={theme.colors.tertiary} />
							<TextInput
								style={[styles.textInputModalize, { color: theme.colors.quiternary }]}
								placeholderTextColor={theme.colors.quiternary}
								placeholder="Casa"
							/>
						</View>
					</View>
				</View>
				<TitleLabel style={{ marginTop: 2 }}>
					<TitleLabelText>
						Rotas Sugeridas
					</TitleLabelText>
				</TitleLabel>
				<LocaleSuggested onPress={() => navigatePush('LocaleDetails')} />	
				<LocaleSuggested onPress={() => navigatePush('LocaleDetails')} />	
				<LocaleSuggested onPress={() => navigatePush('LocaleDetails')} />	
				<LocaleSuggested onPress={() => navigatePush('LocaleDetails')} />	
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
		shadowRadius: 4,
		shadowColor: '#000',
		shadowOffset: { height: 0, width: 0 },
		elevation: 7
	},
	headerModalize: {
		padding: 24,
	},
	headerContainerModalize: {
		marginTop: 24,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	headerButtonClose: {},
	headerTitle: {
		fontSize: 16,
	},
	groupTextInput: {

	},
	containerTextInput: {
		marginTop: 16,
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 10,
		paddingHorizontal: 24
	},
	textInputModalize: {
		marginLeft: 16,
		height: 35,
		width: '100%'
	}
});

export default Home;
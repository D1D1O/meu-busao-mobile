import React, { useState, useEffect, useRef, useCallback } from 'react';
import MapView, { Marker, Region } from 'react-native-maps';
import { useTheme } from '../../contexts/theme';
import GoogleMapsStyle from '../../utils/googleMapsStyleDark';

import {
	Container
} from './styles';

const LocaleDetails: React.FC = () => {
	const mapViewRef = useRef<any>();
	const { theme } = useTheme();
	return (
		<Container>
			<MapView
				ref={mapViewRef}
				provider="google"
				loadingBackgroundColor={theme.colors.primary2}
				showsMyLocationButton={false}
				userLocationAnnotationTitle={''}
				loadingEnabled
				customMapStyle={GoogleMapsStyle}
			/>
		</Container>
	);
}

export default LocaleDetails;
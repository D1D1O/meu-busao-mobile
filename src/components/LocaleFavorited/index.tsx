import React from 'react';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../contexts/theme';

import { Container } from './styles';

interface Props {
	onPress?: () => void;
}

const LocaleFavorited: React.FC<Props> = ({ onPress }) => {

	const { theme } = useTheme();

	return (
		<Container onPress={onPress}>
			<View style={{ flexDirection: 'row' }}>
				<View style={styles.containerImage}>
					<FontAwesome name="home" size={24} color={theme.colors.quiternary} />
				</View>
				<View>
					<Text style={{ color: theme.colors.white }}>Casa</Text>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<View style={[styles.containerNumberBuss, { backgroundColor: theme.colors.quiternary }]}>
							<FontAwesome name="bus" size={14} color={theme.colors.primary2} />
							<Text style={{ marginLeft: 5, fontWeight: 'bold' }}>
								412
							</Text>
						</View>
						<Text style={{ marginLeft: 10, color: theme.colors.white }}>Chega às 19:34</Text>
					</View>
				</View>
			</View>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<View>
					<FontAwesome5 name="clock" size={24} color={theme.colors.quiternary} />
				</View>
				<View style={{ marginLeft: 7 }}>
					<Text style={{ color: theme.colors.white }}>Tempo Percurso</Text>
					<Text style={{ color: theme.colors.white }}>10 min</Text>
				</View>
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	containerImage: {
		paddingRight: 10,
		alignItems: 'center',
		justifyContent: 'center'
	},
	containerNumberBuss: {
		padding: 5,
		borderRadius: 5,
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 5
	}
});

export default LocaleFavorited;
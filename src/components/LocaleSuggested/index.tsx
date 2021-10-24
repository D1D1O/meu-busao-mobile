import React from 'react';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../contexts/theme';

import { Container } from './styles';

interface Props {
	onPress?: () => void;
}

const LocaleSuggested: React.FC<Props> = ({ onPress }) => {

	const { theme } = useTheme();

	return (
		<Container onPress={onPress}>
			<View>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<View style={[styles.containerNumberBuss, { backgroundColor: theme.colors.quiternary }]}>
						<FontAwesome name="bus" size={14} color={theme.colors.primary2} />
						<Text style={{ marginLeft: 5, fontWeight: 'bold' }}>
							412
						</Text>
						<FontAwesome name="chevron-right" style={{ marginLeft: 5 }} size={16} color={theme.colors.quiternary2} />
						<Text
							style={{
								marginLeft: 5,
								fontWeight: 'bold',
								backgroundColor: theme.colors.primary,
								color: theme.colors.quiternary,
								padding: 3,
								borderRadius: 5
							}}
						>
							10
						</Text>
					</View>
					<Text style={{ marginLeft: 16, color: theme.colors.white }}>Chega às 19:34</Text>
				</View>
			</View>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<View>
					<FontAwesome5 name="clock" size={24} color={theme.colors.quiternary} />
				</View>
				<View>
					<Text style={{ marginLeft: 16, color: theme.colors.white }}>Tempo Percurso</Text>
					<Text style={{ marginLeft: 18, color: theme.colors.white }}>10 min</Text>
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

export default LocaleSuggested;
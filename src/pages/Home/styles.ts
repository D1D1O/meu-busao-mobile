import styled, { ThemeProps } from 'styled-components/native';
import { CustomThemeProps } from '../../contexts/theme';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
// ${({ theme }: ThemeProps<CustomThemeProps>) => theme.colors.background};

export const Container = styled.View`
  	flex: 1;
    background-color: ${({ theme }: ThemeProps<CustomThemeProps>) => theme.colors.primary};
    align-items: center;
    justify-content: center;
`;

export const IconButton = styled.TouchableOpacity`
	width: 52px;
	height: 52px;
	position: absolute;
	top: 50px;
	left: 30px;
	background-color: ${({ theme }: ThemeProps<CustomThemeProps>) => theme.colors.primary};
	align-items: center;
	justify-content: center;
`;

export const NotificationButton = styled.TouchableOpacity`
	width: 52px;
	height: 52px;
	border-radius: 26px;
	position: absolute;
	top: 50px;
	right: 30px;
	background-color: ${({ theme }: ThemeProps<CustomThemeProps>) => theme.colors.primary};
	align-items: center;
	justify-content: center;
`;

export const IconButtonImage = styled.Image`
	width: 45px;
	height: 45px;
`;

export const BottomCardButton = styled.View`
	position: absolute;
	bottom: 0;
	width: ${width}px;
	/* height: ${height * 0.30}px; */
	background-color: ${({ theme }: ThemeProps<CustomThemeProps>) => theme.colors.primary};
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
`;

export const ButtonOpenModalize = styled.TouchableOpacity`
	border-radius: 20px;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }: ThemeProps<CustomThemeProps>) => theme.colors.primary2};
	padding: 16px;
	margin: 24px;
`;

export const ButtonOpenModalizeText = styled.Text`
	color: ${({ theme }: ThemeProps<CustomThemeProps>) => theme.colors.white};
	font-weight: 700;
	font-size: 16px;
	margin-left: 16px;
	line-height: 18px;
`;

export const TitleLabel = styled.View`
	padding: 7px 16px;
	background-color: ${({ theme }: ThemeProps<CustomThemeProps>) => theme.colors.primary2};
`;

export const TitleLabelText = styled.Text`
	color: ${({ theme }: ThemeProps<CustomThemeProps>) => theme.colors.white};
	font-weight: 700;
	font-size: 12px;
`;
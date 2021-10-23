import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const Container = styled.View`
  	flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export const IconButton = styled.TouchableOpacity`
	width: 52px;
	height: 52px;
	position: absolute;
	top: 50px;
	left: 30px;
	background-color: #fff;
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
	background-color: #fff;
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
	height: ${height * 0.35}px;
	background-color: #fff;
	padding: 16px;
`;

export const ButtonOpenModalize = styled.TouchableOpacity`
	height: 60px;
	width: 100%;
	border-radius: 30px;
	flex-direction: row;
	align-items: center;
	background-color: #f7f7f7;
	padding: 5px 15px;
`;

export const ButtonOpenModalizeText = styled.Text`
	color: #000;
	font-size: 16px;
`;
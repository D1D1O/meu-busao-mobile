import styled, { ThemeProps } from 'styled-components/native';
import { CustomThemeProps } from '../../contexts/theme';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const Container = styled.View`
  	flex: 1;
    background-color: ${({ theme }: ThemeProps<CustomThemeProps>) => theme.colors.primary};
    align-items: center;
    justify-content: center;
`;
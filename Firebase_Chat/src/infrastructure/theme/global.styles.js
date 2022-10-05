import {Text, View} from 'react-native';
import styled from 'styled-components';

export const MainContainer = styled(View)`
  flex: 1;
  margin: 20px;
`;

export const RowView = styled(View)`
  flex-direction: row;
`;

export const TopHeading = styled(Text)`
  font-family: ${props => props.theme.fonts.Poppins_Regular};
  font-weight: 600;
  font-size: 24px;
  color: ${props => props.theme.colors.ui.black};
`;

export const SuezHeading = styled(Text)`
  font-family: ${props => props.theme.fonts.suez_one};
  color: ${props => props.theme.colors.ui.black};
  font-size: 41px;
  font-weight: 400;
`;

export const BlueLabel = styled(Text)`
  color: ${props => props.theme.colors.ui.blue};
`;

export const LightBlueLabel = styled(Text)`
  color: ${props => props.theme.colors.ui.lightBlue};
`;

export const BlackLabel = styled(Text)`
  color: ${props => props.theme.colors.ui.black};
`;

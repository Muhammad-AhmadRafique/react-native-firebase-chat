import React from 'react';
import {Image, Text, View} from 'react-native';
import styled from 'styled-components';
import {Images} from '../../../../utilities/constants/constants';

const MainContainer = styled(View)`
  justify-content: center;
  align-items: center;
  width: 80px;
`;

const ImageContainer = styled(View)`
  height: 45px;
  width: 45px;
  border-radius: 23px;
  background-color: ${props => props.theme.colors.ui.lightGray};
  border-color: ${props => props.theme.colors.ui.lightGrayTextfield};
  border-width: 0.5px;
`;

const ImageComponent = styled(Image)`
  height: 45px;
  width: 45px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const Name = styled(Text)`
  font-family: ${props => props.theme.fonts.Poppins_Regular};
  font-size: 12px;
  margin-top: 5px;
  color: ${props => props.theme.colors.ui.gray};
  text-align: center;
`;

function ContactItem({item}) {
  return (
    <MainContainer>
      <ImageContainer>
        <ImageComponent
          source={Images.profilePlaceholder}
          resizeMode="contain"
        />
      </ImageContainer>
      <Name> Ahmad</Name>
    </MainContainer>
  );
}

export default ContactItem;

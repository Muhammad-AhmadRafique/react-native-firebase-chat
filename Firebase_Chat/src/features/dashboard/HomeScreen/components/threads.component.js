import React from 'react';
import {Image, Text, View} from 'react-native';
import styled from 'styled-components';
import {Spacer} from '../../../../utilities/components/spacer.component';
import {Images} from '../../../../utilities/constants/constants';

const MainContainer = styled(View)`
  height: 70px;
  align-items: center;
  flex-direction: row;
`;

const ImageContainer = styled(View)`
  height: 55px;
  width: 55px;
  border-radius: 28px;
  background-color: ${props => props.theme.colors.ui.lightGray};
  border-color: ${props => props.theme.colors.ui.gray};
  border-width: 0.5px;
`;

const ImageComponent = styled(Image)`
  height: 55px;
  width: 55px;
  border-radius: 28px;
`;

const Title = styled(Text)`
  font-family: ${props => props.theme.fonts.Poppins_Regular};
  font-size: 17px;
  color: ${props => props.theme.colors.ui.black};
`;

const LastMessage = styled(Text)`
  font-family: ${props => props.theme.fonts.Poppins_Regular};
  font-size: 14px;
  color: ${props => props.theme.colors.ui.gray};
`;

function ThreadsComponent({item}) {
  return (
    <MainContainer>
      <ImageContainer>
        {/* <ImageComponent
          source={Images.rectanglePlaceholder}
          resizeMode="stretch"
        /> */}
      </ImageContainer>
      <Spacer position="right" size="large" />
      <View>
        <Title>Mike Montano</Title>
        <LastMessage>She is so cute...!</LastMessage>
      </View>
    </MainContainer>
  );
}

export default ThreadsComponent;

import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components';
import {colors} from '../../../../infrastructure/theme/colors';
import {fonts} from '../../../../infrastructure/theme/fonts';
import {SafeArea} from '../../../../utilities/components/safe-area.component';
import SearchbarComponent from '../../../../utilities/components/search.component';
import {Spacer} from '../../../../utilities/components/spacer.component';
import {ToolBar} from '../../../../utilities/components/toolbar.component';
import {Images} from '../../../../utilities/constants/constants';
import ContactItem from '../components/contact.component';
import ThreadsComponent from '../components/threads.component';

const SearchBarContainer = styled(View)`
  margin-top: 15px;
  margin-left: 10px;
  margin-right: 10px;
  height: 35px;
`;
const ContactsContainer = styled(View)`
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
`;

const ThreadsContainer = styled(View)`
  flex: 1;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 15px;
`;
// const Con

function HomeScreen(props) {
  const [searchVal, setSearchVal] = useState('');
  const [contactsList, setContactsList] = useState([
    {
      id: 1,
      name: 'Ahmad ',
      color: colors.ui.black,
    },
    {
      id: 2,
      name: 'Ahmad ',
      color: colors.ui.gray,
    },
    {
      id: 3,
      name: 'Ahmad ',
      color: colors.ui.lightBlue,
    },
    {
      id: 4,
      name: 'Ahmad ',
      color: colors.ui.lightGray,
    },
    {
      id: 5,
      name: 'Ahmad ',
      color: colors.ui.black,
    },
    {
      id: 6,
      name: 'Ahmad ',
      color: colors.ui.black,
    },
    {
      id: 7,
      name: 'Ahmad ',
      color: colors.ui.black,
    },
    {
      id: 8,
      name: 'Ahmad ',
      color: colors.ui.black,
    },
  ]);

  const [threadsList, setThreadsList] = useState([
    {
      id: 1,
      name: 'Ahmad',
      lastMessage: colors.ui.black,
    },
    {
      id: 2,
      name: 'Ahmad',
      lastMessage: colors.ui.black,
    },
    {
      id: 3,
      name: 'Ahmad',
      lastMessage: colors.ui.black,
    },
    {
      id: 4,
      name: 'Ahmad',
      lastMessage: colors.ui.black,
    },
    {
      id: 5,
      name: 'Ahmad',
      lastMessage: colors.ui.black,
    },
    {
      id: 6,
      name: 'Ahmad',
      lastMessage: colors.ui.black,
    },
    {
      id: 7,
      name: 'Ahmad',
      lastMessage: colors.ui.black,
    },
    {
      id: 8,
      name: 'Ahmad',
      lastMessage: colors.ui.black,
    },
    {
      id: 9,
      name: 'Ahmad',
      lastMessage: colors.ui.black,
    },
  ]);

  return (
    <SafeArea>
      <ToolBar
        heading="Chats"
        showRightIcon={true}
        rightIcon={Images.createThread}
      />
      <View style={styles.container}>
        <SearchBarContainer>
          <SearchbarComponent
            placeholder="Search here..."
            value={searchVal}
            onChangeText={setSearchVal}
          />
        </SearchBarContainer>

        <Spacer position="bottom" size="medium" />

        <ContactsContainer>
          <FlatList
            data={contactsList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <ContactItem item={item} />}
          />
        </ContactsContainer>

        <Spacer position="bottom" size="medium" />

        <ThreadsContainer>
          <FlatList
            data={threadsList}
            renderItem={({item}) => <ThreadsComponent />}
          />
        </ThreadsContainer>
      </View>
    </SafeArea>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

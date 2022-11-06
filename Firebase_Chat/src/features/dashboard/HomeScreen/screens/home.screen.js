import React, {useEffect, useState} from 'react';
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
import firebaseApp from '../../../../utilities/firebaseConfigurations/firebase.config.js';
// import firebase from '@react-native-firebase/app';
// import {db} from '../../../../utilities/firebaseConfigurations/firebase.config.js';
import database from '@react-native-firebase/database';
import BlueGradientButton from '../../../../utilities/components/blue.gradient.button';

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
  // const firebaseConfig = {
  //   apiKey: 'AIzaSyATj_GvRAVVc26yGmzm53UPaSfMeNUllc4',
  //   authDomain: 'react-native-chat-8ba6d.firebaseapp.com',
  //   projectId: 'react-native-chat-8ba6d',
  //   storageBucket: 'react-native-chat-8ba6d.appspot.com',
  //   messagingSenderId: '429096451776',
  //   appId: '1:429096451776:web:b37c96967c18af10653725',
  // };
  // const config = {
  //   name: 'RNChat',
  // };

  // const firebaseApp = await firebase.initializeApp(firebaseConfig, config);

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
  ]);

  // var firebaseDB = firebaseApp.database();
  const roomsRef = database().ref('/rooms');
  // this.state = {
  //   rooms: [],
  //   newRoom: '',
  // };

  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState('');

  useEffect(() => {
    listenForRooms(roomsRef);
  }, []);

  const listenForRooms = roomsRef => {
    roomsRef.on('value', dataSnapshot => {
      console.log('this is listener method');
      var roomsFB = [];
      dataSnapshot.forEach(child => {
        roomsFB.push({
          name: child.val().name,
          key: child.key,
        });
      });
      setRooms(roomsFB);
    });
  };

  const addRoom = () => {
    console.log('newRoom = ', newRoom);
    if (newRoom === '') {
      return;
    }
    console.log('newRoom created');
    roomsRef.push({name: newRoom});
    setNewRoom('');
  };

  return (
    <SafeArea>
      <ToolBar
        heading="Chats"
        showRightIcon={true}
        rightIcon={Images.createThread}
        onRightPressed={() => {
          console.log('right pressed');
          // addRoom();
        }}
      />
      <View style={styles.container}>
        <SearchBarContainer>
          <SearchbarComponent
            placeholder="Search here..."
            value={newRoom}
            onChangeText={text => {
              console.log(text);
              setNewRoom(text);
            }}
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
            data={rooms}
            renderItem={({item}) => <ThreadsComponent item={item} />}
          />
        </ThreadsContainer>
        <BlueGradientButton
          title="Create Room"
          width={150}
          height={45}
          onPressed={() => {
            console.log(roomsRef);
            addRoom();
          }}
        />
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

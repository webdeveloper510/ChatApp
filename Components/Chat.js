import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet, TextInput, Pressable} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import io from 'socket.io-client';
import {LogBox} from 'react-native';
import SocketIOClient from 'socket.io-client';
import {GiftedChat} from 'react-native-gifted-chat';

import {loadMessages, sendMessage} from '../actions/loadMessages';

import config from '../Backend/config';

import GoBack from '../Components/GoBackButton';
import type {User, Message, Friend} from '../types/types';
const styles = StyleSheet.create ({
  chat: {
    width: '100%',
    flexDirection: 'row',
    padding: 20,
  },
  profilepic: {
    width: '35%',
    paddingRight: 20,
    paddingLeft: 40,
  },
  profiles: {
    backgroundColor: '#91c9ff',
    borderRadius: 50,
    height: 60,
    width: 60,
  },
  username: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  active: {
    color: '#4a9dfb',
    fontWeight: '600',
  },
  end: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
  },
  send: {
    width: '100%',
    flexDirection: 'row',
    padding: 20,
  },
  sendmessage: {
    width: '78%',
    position: 'relative',
    marginRight: '2%',
  },
  cemara: {
    position: 'absolute',
    right: 10,
    top: 12,
  },
  record: {
    width: '18%',
    marginLeft: '2%',
  },
  inputtype1: {
    height: 60,
    borderColor: '#f0f0f5',
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: '#f0f0f5',
    fontSize: 18,
    marginBottom: 20,
    paddingLeft: 10,
  },
  pressable: {
    backgroundColor: '#3287fb',
    textAlign: 'center',
    borderRadius: 20,
  },
});
LogBox.ignoreAllLogs (true);

type Props = {
  onSendMessage:  (string, Message) => Message,
  onLoadMessages: string => Message[],
  navigation: any,
  messages?: Message,
  user: User,
  friends: {
    [key: string]: Friend,
  },
};

type State = {
  message: string,
};

class Chat extends React.Component {
  socket: Object;
  static navigationOptions = ({navigation}) => ({
    title: 'Chat',
    headerLeft: (
      <GoBack
        onPress={() => {
          navigation.navigate ('Chat');
        }}
      />
    ),
  });

  constructor (props) {
    super (props);
    const host = config.server.host;
    const port = config.server.port;
    this.socket = SocketIOClient (`http://${host}:${port}`);
    this.socket.emit ('init', {
      senderId: this.props.user.myid,
    });
    this.socket.on ('message', message => {
      const newMessage = {
        createdAt: message.createdAt,
        text: message.text,
        userId: message.senderId,
        _id: message.msgId,
      };
      this.props.onSendMessage (message.conversationId, newMessage);
    });
  }

  state = {
    message: '',
  };

  componentWillMount () {
    this.props.onLoadMessages (
      this.props.navigation.state.params.conversation.id
    );
  }

  componentWillUnmount () {
    this.socket.emit ('disconnect', {
      senderId: this.props.user.myId,
    });
  }

  getConversationFriend = id => {
    const {user, friends} = this.props;
    return id === user.myId ? user.fullName : friends[id].fullName;
  };

  getMappedMessages = () => {
    return this.props.messages
      ? this.props.messages
          .map (({_id, text, createdAt, userId}) => {
            return {
              _id,
              text,
              createdAt,
              user: {
                _id: userId,
                name: this.getConversationFriend (userId),
              },
            };
          })
          .reverse ()
      : [];
  };

  _onSend = message => {
    const {conversation} = this.props.navigation.state.params;
    const {user, onSendMessage} = this.props;

    this.socket.emit ('message', {
      conversationId: conversation.id,
      text: message[0].text,
      senderId: user.myId,
      receiverId: conversation.friendId,
      createdAt: new Date (),
      msgId: message[0]._id,
    });
    const newMessage = {
      createdAt: message[0].createdAt,
      text: message[0].text,
      userId: message[0].user._id,
      _id: message[0]._id,
    };
    onSendMessage (conversation.id, newMessage);
  };

  render () {
    return (
      <View>
        <View style={{backgroundColor: 'white', display: 'flex'}}>
          <View style={styles.chat}>
            <View style={styles.profiles} />
            <View style={styles.profile}>
              <Text style={styles.username}> Reza Eji </Text>
              <Text style={styles.active}> Online </Text>
            </View>
          </View>
        </View>
        <View
          style={{backgroundColor: '#fafafb', height: '80%', display: 'flex'}}
        >
          {/* <View>{chatMessages}</View> */}
          <View style={styles.end}>
            <View style={styles.send}>
              <View style={styles.sendmessage}>
                <TextInput
                  style={styles.inputtype1}
                  autoCorrect={false}
                  // value={this.state.chatMessage}
                  // onSubmitEditing={() => this.submitChatMessage ()}
                  // onChangeText={chatMessage => {
                  //   this.setState ({chatMessage});
                  // }}
                  placeholder="Type a Message..."
                  placeholderTextColor="#fff"
                />
              </View>
              <View style={styles.cemara}>
                <FontAwesome5 name={'camera'} size={30} />
              </View>
            </View>
            <View style={styles.record}>
              <Pressable style={styles.pressable}>
                <FontAwesome5
                  style={{textAlign: 'center', padding: 12, color: 'white'}}
                  name={'microphone'}
                  size={30}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Chat;

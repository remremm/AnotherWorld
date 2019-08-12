/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import axios from 'axios';
import StoryLine from './StoryLine';


class ChapterTwo extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      getStarted: false
    }

  }

  render() {
  return (
    !this.state.getStarted ? (
      <SafeAreaView style={{backgroundColor: '#071C2A', height: '100%', margin: 0}}>
        <Image style={{width: 190, height: 190, resizeMode: 'contain', left: '45%'}} source={require('../Images/ButterFly_.png')}></Image>
        <View>
          <Text style={styles.title}>CODING IN ANOTHER WORLD</Text>
        </View>
          <Text style={styles.chapterTwo}>CHAPTER TWO</Text>
        <View style={styles.buttonOne}>
          <Button
            color='rgba(169, 234, 255, 0.78)'
            onPress={() => alert('Coming soon!')}
            title='Continue'
          />
        </View>
        <Image style={{position: 'absolute', bottom: 0}} source={require('../Images/Rectangle1.png')}></Image>
        <Image style={{position: 'absolute', bottom: 5}} source={require('../Images/Rectangle2.png')}></Image>
      </SafeAreaView>
    ) : (
      <StoryLine />
    )
  );
  }
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Montserrat-Bold',
    // fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 30,
    lineHeight: 29,
    textAlign: 'center',
    color: '#A9EAFF',
  },
  chapterTwo: {
    fontFamily: 'Montserrat-Bold',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 27,
    textAlign: 'center',
    color: '#6ADBFF',
    marginTop: 30,
    marginRight: 50,
    textAlign: 'right',
  },
  buttonOne: {
    position: 'absolute',
    bottom: 220,
    left: 220,
    flex: 1,
    alignSelf: 'center',
    zIndex: 4,
  },
  buttonTwo: {
    position: 'absolute',
    bottom: 180,
    left: 220,
    flex: 1,
    alignSelf: 'center',
    zIndex: 4,
  }
});

export default ChapterTwo;

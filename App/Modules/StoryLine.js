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
  BackHandler,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import App from '../App';
import Battle from './Battle';
import axios from 'axios';


class StoryLine extends React.Component {
  constructor(props){
    super(props);

    if(props){
      this.state = {
        currentStoryLine: props.currentStoryLine,
        actions: props.actions,
        thoughts: props.thoughts,
        story: props.story,
        choiceOne: props.choiceOne,
        choiceTwo: props.choiceTwo,
        choiceOneText: props.choiceOneText,
        choiceTwoText: props.choiceTwoText,
        light: props.light,
        battle: props.battle
      }
    } else {
      this.state = {
        currentStoryLine: 0,
        actions: '',
        thoughts: '',
        story: '',
        choiceOne: 0,
        choiceTwo: 0,
        choiceOneText: '',
        choiceTwoText: '',
        light: 0,
        battle: false,
      }
    }

    this.optionOneChoice = this.optionOneChoice.bind(this);
    this.optionTwoChoice = this.optionTwoChoice.bind(this);
  }

  componentDidMount() {
    axios.get('http://10.3.33.224:3005/storyLine')
      .then((response) => {
        console.log(response.data, " ITS THE DATAAAA");
        this.setState({
          currentStoryLine: response.data[0].id,
          actions: response.data[0].actions,
          thoughts: response.data[0].thoughts,
          story: response.data[0].story,
          choiceOne: response.data[0].choiceone,
          choiceTwo: response.data[0].choicetwo,
          choiceOneText: response.data[0].choiceonetext,
          choiceTwoText: response.data[0].choicetwotext,
          light: response.data[0].light,
          battle: response.data[0].battle,
        })
      })
      .catch((error) => {
        console.log(error)
      });

  }

  optionOneChoice() {
    axios.get(`http://10.3.33.224:3005/storyLine/${this.state.choiceOne}`)
      .then((response) => {
        this.setState(prevState => ({
          currentStoryLine: response.data[0].id,
          actions: response.data[0].actions,
          thoughts: response.data[0].thoughts,
          story: response.data[0].story,
          choiceOne: response.data[0].choiceone,
          choiceTwo: response.data[0].choicetwo,
          choiceOneText: response.data[0].choiceonetext,
          choiceTwoText: response.data[0].choicetwotext,
          light: response.data[0].light + prevState.light,
          battle: response.data[0].battle,
        }))
      })
      .catch((error) => {
        console.log(error);
      });
  }

  optionTwoChoice() {
    axios.get(`http://10.3.33.224:3005/storyLine/${this.state.choiceTwo}`)
    .then((response) => {
      this.setState(prevState => ({
        currentStoryLine: response.data[0].id,
        actions: response.data[0].actions,
        thoughts: response.data[0].thoughts,
        story: response.data[0].story,
        choiceOne: response.data[0].choiceone,
        choiceTwo: response.data[0].choicetwo,
        choiceOneText: response.data[0].choiceonetext,
        choiceTwoText: response.data[0].choicetwotext,
        light: response.data[0].light + prevState.light,
        battle: response.data[0].battle,
      }))
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
  return (
    !this.state.battle ? (
      <SafeAreaView style={{backgroundColor: '#071C2A', height: '100%'}}>
        <Image style={{width: 60, height: 60, resizeMode: 'contain', marginLeft: 10}} source={(require('../Images/ButterFly_.png'))}></Image>
        <View style={styles.outerView}>
          <View style={{width: 350, height: 50, backgroundColor: '#323739', borderRadius: 5}}>
            <Text style={{color: '#A9EAFF', fontFamily: 'Montserrat', fontSize: 15, textAlign: 'center', marginTop: 15}}>{this.state.actions}</Text>
          </View>
          <View style={{width: 350, height: 350, backgroundColor: '#323739', marginTop: 25, borderRadius: 5}}>
            <Text style={{color: '#A9EAFF', fontFamily: 'Montserrat', fontSize: 15, textAlign: 'center', marginTop: 15, lineHeight: 25}}>
            {this.state.story}
            </Text>
          </View>
          <View style={{width: 350, height: 50, backgroundColor: '#323739', marginTop: 25, borderRadius: 5}}>
            <Text style={{color: '#A9EAFF', fontFamily: 'Montserrat', fontSize: 15, textAlign: 'center', marginTop: 15}}>{this.state.thoughts}</Text>
          </View>
          <View style={styles.bottomButtonContainer}>
            <View style={styles.leftButton}>
            <TouchableOpacity
                style={styles.buttonOne}
                onPress={this.optionOneChoice}
                  >
              <Text style={{fontFamily: 'Ubuntu', fontSize: 24, color: 'white', textAlign: 'center'}}>{this.state.choiceOneText}</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.rightButton}>
            <TouchableOpacity
                style={styles.buttonTwo}
                onPress={this.optionTwoChoice}
                  >
              <Text style={{fontFamily: 'Ubuntu', fontSize: 24, color: 'white', textAlign: 'center'}}>{this.state.choiceTwoText}</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    ) : (
      <Battle props={this.state}/>
    )
  );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#071C2A',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  buttonContainer: {
    position: 'absolute',
    width: 311.11,
    height: 29,
    left: 50.94,
    top: 300,
  },
  buttonSize: {
    color: 'green',
    top: 20,
    left: 10,
    width: '20%',
  },
  outerView: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bottomButtonContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    width: '50%',
  },
  rightButton: {
    marginLeft: 60,
  },
  leftButton: {
    marginRight: 60,
  },
  buttonOne: {
    backgroundColor: 'rgba(169, 234, 255, 0.78)',
    width: 200,
    height: 40,
    borderRadius: 20,
  },
  buttonTwo: {
    backgroundColor: 'rgba(169, 234, 255, 0.78)',
    width: 200,
    height: 40,
    borderRadius: 20,
  }
});

export default StoryLine;

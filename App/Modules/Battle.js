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
import StoryLine from './StoryLine';
import axios from 'axios';


class Battle extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      monsterHealth: 1,
      characterHealth: 0,
      monsterAttack: 0,
      characterAttack: 0,
      battleEnded: false,
    }

    this.attack = this.attack.bind(this);
    this.defend = this.defend.bind(this);
  }

  componentDidMount() {
    axios.get('http://10.3.33.224:3005/charinfo')
      .then((response) => {
        console.log(response.data, " ITS THE DATAAAA");
        this.setState({
          monsterHealth: response.data[0].monsterhealth,
          characterHealth: response.data[0].characterhealth,
          monsterAttack: response.data[0].monsterattack,
          characterAttack: response.data[0].characterattack
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  attack(){
    this.setState(prevState => ({
      monsterHealth: prevState.monsterHealth - prevState.characterAttack
    }));

    if(this.state.monsterHealth <= 0){
      this.setState({
        battleEnded: true
      })
      this.props.battle = false;
    }
  }

  defend(){
    this.setState(prevState => ({
      characterHealth: prevState.characterHealth - (prevState.monsterAttack / 2),
    }));

    if(this.state.monsterHealth <= 0){
      this.setState({
        battleEnded: true
      })
      this.props.battle = false;
    }
  }

  render() {
  return (
    !this.state.battleEnded ? (
      <SafeAreaView style={{backgroundColor: '#071C2A', height: '100%'}}>
        <Image style={{width: 60, height: 60, resizeMode: 'contain', marginLeft: 10}} source={(require('../Images/ButterFly_.png'))}></Image>
        <View style={styles.outerView}>
          <View style={{width: 350, height: 50, backgroundColor: '#323739', borderRadius: 5}}>
            <Text style={{color: '#A9EAFF', fontFamily: 'Montserrat', fontSize: 15, textAlign: 'center', marginTop: 15}}>You encountered a slime!</Text>
          </View>
          <View style={{width: 350, height: 350, backgroundColor: '#323739', marginTop: 25, borderRadius: 5}}>
            <Text style={{color: '#A9EAFF', fontFamily: 'Montserrat', fontSize: 15, textAlign: 'center', marginTop: 15, lineHeight: 25}}>
            {this.state.story}
            </Text>
          </View>
          <View style={{width: 350, height: 50, backgroundColor: '#323739', marginTop: 25, borderRadius: 5}}>
            <Text style={{color: '#A9EAFF', fontFamily: 'Montserrat', fontSize: 15, textAlign: 'center', marginTop: 15}}>"What should I do?"</Text>
          </View>
          <View style={styles.bottomButtonContainer}>
            <View style={styles.leftButton}>
            <TouchableOpacity
                style={styles.buttonOne}
                onPress={this.attack}
                  >
              <Text style={{fontFamily: 'Ubuntu', fontSize: 24, color: 'white', textAlign: 'center'}}>Attack!</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.rightButton}>
            <TouchableOpacity
                style={styles.buttonTwo}
                onPress={this.defend}
                  >
              <Text style={{fontFamily: 'Ubuntu', fontSize: 24, color: 'white', textAlign: 'center'}}>Defend!</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    ) : (
      <StoryLine props={this.props}/>
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

export default Battle;

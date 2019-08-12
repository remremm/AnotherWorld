import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const branchTwo = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#071C2A', height: '100%'}}>
      <View>
        <Image source={(require('../Images/Rectangle 6.png'))}></Image>
      </View>
    </SafeAreaView>
  )
}

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
    marginTop: 20,
    width: '50%',
  },
  bottomButton: {
    marginTop: 10,
  }
});

export default branchTwo;
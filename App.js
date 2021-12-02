
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import SplashScreen from "react-native-splash-screen";
import Sound from 'react-native-sound';
import roto from './images/rotobg.jpg';
import Hight from './sounds/hight.wav';
import Midt1 from './sounds/midt1.wav';
import Midt2 from './sounds/midt2.wav';
import Lowt from './sounds/lowt.wav';
import Snare from './sounds/snare.wav';
import Kick from './sounds/kick.wav';



export default function App() {
 
  React.useEffect(() => {
    SplashScreen.hide();
  });



 Sound.setCategory('Playback');

  var ht = new Sound(Hight);
  var htc = new Sound(Hight);
  var htcc = new Sound(Hight);
  var htccc = new Sound(Hight);
  var htcccc = new Sound(Hight);
  var mt1 = new Sound(Midt1);
  var mt1c = new Sound(Midt1);
  var mt1cc = new Sound(Midt1);
  var mt1ccc = new Sound(Midt1);
  var mt1cccc = new Sound(Midt1);
  var mt2 = new Sound(Midt2);
  var mt2c = new Sound(Midt2);
  var mt2cc = new Sound(Midt2);
  var mt2ccc = new Sound(Midt2);
  var mt2cccc = new Sound(Midt2);
  var lowt = new Sound(Lowt);
  var lowtc = new Sound(Lowt);
  var lowtcc = new Sound(Lowt);
  var lowtccc = new Sound(Lowt);
  var lowtcccc = new Sound(Lowt);
  var snare = new Sound(Snare);
  var snarec = new Sound(Snare);
  var snarecc = new Sound(Snare);
  var snareccc = new Sound(Snare);
  var snarecccc = new Sound(Snare);
  var kick = new Sound(Kick);
  var kickc = new Sound(Kick);
  var kickcc = new Sound(Kick);
  var kickccc = new Sound(Kick);
  var kickcccc = new Sound(Kick);
  var current = undefined;
  var current2 = undefined;
  var current3 = undefined;
  var current4 = undefined;
  var current5 = undefined;
  


 /* play = (note) => {
    if(current != undefined){
      current.stop();
    }
    current = note;
    current.play((success) => {
      if (success) {
      } else {
      }
    }); 
  } */

  play = (note) => {
    current = note;
    note.play((success)=>{
      if(success) {
        current = undefined;
      }
    });
  }

  play2 = (note) => {
    
    current2 = note;
    note.play((success)=>{
      if(success) {
        
        current2 = undefined;
      }
    });
  }

  play3 = (note) => {
    
    current3 = note;
    note.play((success) => {
      if(success){
        current3 = undefined;
      }
    })
  }
  play4 = (note) => {
    current4 = note;
    note.play((success) => {
      if(success){
        current4 = undefined;
      }
    })
  }
  play5 = (note) => {
    current5 = note;
    note.play((success) => {
      if(success){
        current5 = undefined;
      }
    })
  }

  return (
    <View style={styles.sectionContainer}>
      <ImageBackground source={roto} style={{flex: 1, justifyContent: 'center', width: Dimensions.get('window').width, height: Dimensions.get('window').height, alignSelf: "stretch", resizeMode: "cover", top: 0}}>
        <View style={styles.pads}>
          <View onTouchStart={()=> current == undefined ? play(ht): current2 == undefined ? play2(htc) : current3 == undefined ? play3(htcc) : current4 == undefined ? play4(htccc) : play5(htcccc)}><TouchableOpacity style={styles.pad}><Text style={styles.drumNames}>HT</Text></TouchableOpacity></View>
          <View onTouchStart={()=> current == undefined ? play(mt1): current2 == undefined ? play2(mt1c) : current3 == undefined ? play3(mt1cc) : current4 == undefined ? play4(mt1ccc) : play5(mt1cccc)}><TouchableOpacity style={styles.pad}><Text style={styles.drumNames}>MT</Text></TouchableOpacity></View>
          <View onTouchStart={()=> current == undefined ? play(mt2): current2 == undefined ? play2(mt2c) : current3 == undefined ? play3(mt2cc) : current4 == undefined ? play4(mt2ccc) : play5(mt2cccc)}><TouchableOpacity style={styles.pad}><Text style={styles.drumNames}>MT</Text></TouchableOpacity></View>
          <View onTouchStart={()=> current == undefined ? play(lowt): current2 == undefined ? play2(lowtc) : current3 == undefined ? play3(lowtcc) : current4 == undefined ? play4(lowtccc) : play5(lowtcccc)}><TouchableOpacity style={styles.pad}><Text style={styles.drumNames}>LT</Text></TouchableOpacity></View>
          <View onTouchStart={()=> current == undefined ? play(snare): current2 == undefined ? play2(snarec) : current3 == undefined ? play3(snarecc) : current4 == undefined ? play4(snareccc) : play5(snarecccc)}><TouchableOpacity style={styles.pad}><Text style={styles.drumNames}>S</Text></TouchableOpacity></View>
          <View onTouchStart={()=> current == undefined ? play(kick): current2 == undefined ? play2(kickc) : current3 == undefined ? play3(kickcc) : current4 == undefined ? play4(kickccc) : play5(kickcccc)}><TouchableOpacity style={styles.pad}><Text style={styles.drumNames}>K</Text></TouchableOpacity></View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   height: Dimensions.get('screen').height,
   width: Dimensions.get('screen').width
  },
  pads: {
    display: 'flex',
    flexDirection: 'row',
    height: 'auto',
    width: 330,
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '20%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  pad: {
    width: 155,
    height: 170,
    backgroundColor: '#1e2427',
    margin: 3,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 3
  },
  drumNames: {
    color: 'black',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 30,
    fontWeight: 'bold'
  }
});


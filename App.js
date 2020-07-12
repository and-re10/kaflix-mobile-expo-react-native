import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import ActuellesMenu from "./components/HomePage/actuelles";
import SuccesMenu from "./components/HomePage/succes_kaflix";
import Top10Menu from "./components/HomePage/top10";
import OriginauxMenu from "./components/HomePage/originaux";
import ReprendreMenu from './components/HomePage/reprendre';

const App = () => {

  const [movies, setMovies] = useState([
    {},
  ])

  useEffect(() => {
      let search1 = '=joker'
    // fetch(APIURL + '?apikey=' + APIKEY + '&s=back to the future').then(res => res.json()).then(apiresult => console.log(apiresult))
    fetchMovie(search1).then(res=>{
      setMovies(res.Search)
    })
  }, [setMovies])

  const APIKEY = '49b6734c';
  const APIURL = 'http://www.omdbapi.com';

  function fetchMovie(search){
      return fetch(APIURL + '?apikey=' + APIKEY + '&s=' +search).then(res=>res.json());
  }

  const handlepress = () => console.log(movies[0].Title)
  
  return (
    <>
      <StatusBar barStyle="light-content"/>
      <SafeAreaView style={{flex: 1, backgroundColor:"black"}}>
        <View style={{alignItems: "center", marginTop: 20}} onPress={() => console.log(movies[0].Title)}>
          <Text style={{color: "white", fontSize: 40, fontWeight: "bold"}} onPress={() => console.log("hello")}>KAFLIX</Text>
        </View>
      
        <ScrollView scrollEventThrottle={16}>
        <View style={styles.container}>
          <View style={{flex: 1, width: "100%", height: 400, backgroundColor: "grey"}}>
            <Image source={{uri: movies[0].Poster}} style={{width: "100%", height: 400}} />
          </View>
          <ReprendreMenu/>
          <ActuellesMenu/>
          <SuccesMenu/>
          <Top10Menu/>
          <OriginauxMenu style={{marginBottom : 20}} />
        </View>
        </ScrollView>
      </SafeAreaView >
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    color: "white",
    paddingTop: 10,
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
    color: "white",
    marginLeft: 10,
    marginTop: 40,
    marginBottom: 10,
    fontWeight: "700",
  },
  col: {
    width: 130,
    marginRight: 10,
    alignItems: "center",
    marginLeft: 10,
  },
  cards: {
    height: 130,
    width: 130,
    backgroundColor: "grey",
    borderRadius: 10,
  }
});

export default App;

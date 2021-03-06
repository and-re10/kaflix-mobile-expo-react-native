import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const ReprendreMenu = () => {

    const [movies, setMovies] = useState([
      // {},
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
    let name = "andré";

    // Affichage du nom du film sur la console
    const handlePressConsole = (movie) => console.log(movie);

    // Affichage du nom du film sur la console
    const handlePressAlert = (movie) => alert("nom du film: " + movie);

  return (
    <>
          <Text style={styles.title} onPress={() => handlePressConsole(movies[0].Title)}>Reprendre avec André</Text>
          <ScrollView style={{flex: 1}} horizontal={true} showsHorizontalScrollIndicator={false}>
            {movies.map((m, i) => 
                <TouchableOpacity style={styles.col} key={i} onPress={() => handlePressAlert(m.Title)}>
                    <View style={styles.cards}>
                        <Image style={{flex: 1, height: null, width: null, resizeMode: "cover", borderRadius: 90, margin: 3}} source={{uri: m.Poster}}/>
                    </View>
                    <Text style={{color: "lightgrey", fontSize: 12, marginTop: 8, fontWeight: "700"}} >{m.Title}</Text>
                </TouchableOpacity>
            )}
            
          </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "black",
  //   color: "white",
  //   paddingTop: 40,
  //   paddingBottom: 100,
  // },
  title: {
    fontSize: 25,
    color: "white",
    marginLeft: 20,
    marginTop: 30,
    marginBottom: 10,
    fontWeight: "700",
  },
  col: {
    width: 130,
    marginHorizontal: 3,
    
    borderRadius: 60,
    alignItems: "center",
  },
  cards: {
    height: 120,
    width: 120,
    // backgroundColor: "grey",
    borderRadius: 60,
    marginHorizontal: 20, 
    borderColor: "grey", 
    borderWidth: 1,
  }
});

export default ReprendreMenu;
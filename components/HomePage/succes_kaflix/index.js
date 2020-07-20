import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const SuccesMenu = () => {
  const [movies, setMovies] = useState({
    movies: [],
  })

  useEffect(() => {
      let search1 = '=batman'
    // fetch(APIURL + '?apikey=' + APIKEY + '&s=back to the future').then(res => res.json()).then(apiresult => console.log(apiresult))
    fetchMovie(search1).then(res=>{
      setMovies({
        movies: res.Search,
      })
    })
  }, [setMovies])

    const APIKEY = '49b6734c';
    const APIURL = 'http://www.omdbapi.com';

    function fetchMovie(search){
        return fetch(APIURL + '?apikey=' + APIKEY + '&s=' +search).then(res=>res.json());
    }

    function openMovie(img){
      
    }

  function switch1 (name){
    switch (name) {
      case Joker:
        return "../../../img/img_2.jpg"
        break;
    
      default:
        break;
    }
  }

  // Affichage du nom du film sur la console
  const handlePressConsole = (movie) => console.log(movie);

  // Affichage du nom du film sur la console
  const handlePressAlert = (movie) => alert(movie);


  return (
    <>
      <Text style={styles.title}>Les plus gros succès sur KaFlix</Text>
      <ScrollView style={{flex: 1}} horizontal={true} showsHorizontalScrollIndicator={false}>
        {movies.movies.map( m => 
          <TouchableOpacity style={styles.col} key={m.imdbID} onPress={() => handlePressAlert(m.Title)}>
            <View style={styles.cards}>
              <Image style={{ flex: 1, height: null, width: null, resizeMode: "cover"}} onPress={openMovie} source={{uri:m.Poster}}/>
            </View>
            <Text style={{color: "lightgrey", fontSize: 12, marginTop: 8, fontWeight: "700"}}>{m.Title}</Text>
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
  // },
  title: {
    fontSize: 25,
    color: "white",
    marginLeft: 20,
    marginTop: 40,
    marginBottom: 10,
    fontWeight: "700",
  },
  col: {
    width: 130,
    marginHorizontal: 75,
    alignItems: "center",
  },
  cards: {
    height: 160,
    width: 260,
    backgroundColor: "grey",
    // borderRadius: 10,
    marginHorizontal: 10
  }
});

export default SuccesMenu;
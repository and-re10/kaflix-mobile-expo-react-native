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

const Top10Menu = () => {

  const [movies, setMovies] = useState({
    movies: [],
  })
  useEffect(() => {
      let search1 = '=hacking'
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


  return (
    <>
          <Text style={styles.title}>Top 10 en Belgique aujourd'hui</Text>
          <ScrollView style={{flex: 1}} horizontal={true} showsHorizontalScrollIndicator={false}>
            {movies.movies.map( m => 
              <View style={styles.col} key={m.imdbID}>
                <View style={styles.cards}>
                  <Image style={{flex: 1, height: null, width: null, resizeMode: "cover"}} source={{uri: m.Poster}}/>
                </View>
                <Text style={{color: "lightgrey", fontSize: 12, marginTop: 8, fontWeight: "700"}}>{m.Title}</Text>
              </View>
            )}
          </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    color: "white",
    paddingTop: 40,
  },
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
    marginHorizontal: 20,
    alignItems: "center",
  },
  cards: {
    height: 260,
    width: 160,
    backgroundColor: "grey",
    marginHorizontal: 20,
  }
});

export default Top10Menu;
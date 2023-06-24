import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, ActivityIndicator } from 'react-native';
import CardFilme from '../../components/CardFilme';
import styles from './styles';

export default function MoviesPage() {

  let [filmes, setFilmes] = useState([]);

  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';

  useEffect(function(){
    fetch(baseURL)
      .then(data => data.json())
      .then(objeto => {
        console.log(objeto);
        setFilmes(objeto.data);
      })
  }, []);


  return (
    <View style={styles.container}>
        {filmes.length > 0 ? 
            <ScrollView horizontal={false}>
                {filmes.map(filme => <CardFilme key={ filme.id } filme = {filme.attributes}/>)}
            </ScrollView>
            : <ActivityIndicator size={'large'} />
        }
    </View>
  );
}



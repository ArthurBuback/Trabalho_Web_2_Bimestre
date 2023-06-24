import { Link } from "@react-navigation/native";
import { StyleSheet, View, Dimensions, Image, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native-web";

const URL = 'https://api.otaviolube.com'

const MAX_WIDTH = Dimensions.get('window').width*0.9;
const MAX_HEIGHT = Dimensions.get('window').height*0.9;

export default function CardFilme({ filme }){
    return(
        <View style={styles.viewCartao}>
            <Image style={styles.imgFilme} source={{uri: URL + filme.poster.data.attributes.url}}/>
            <View style={styles.texto}>
                <Text style={styles.titulo}>{filme.titulo}</Text>
                <Text style={styles.subtitulo}>{filme.subtitulo}</Text>
                <Text styles={styles.sinopse}>{filme.sinopse.length > 200 ? 
                filme.sinopse.substring(0,200) + "..." : filme.sinopse } </Text>
                <Link to={{screen: "MovieDetailsPage", params: {filme:filme}}} style={styles.saibaMais}>
                Saiba mais...</Link>
                <TouchableOpacity style={styles.botao}>
                    <Text>Comprar Ingresso</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    viewCartao:{
      flexDirection: 'row',
      width: '100%',
      height: 320,
      backgroundColor: 'gray',
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 10
    },
    imgFilme: {
      width: '30%',
      height: '100%',
      borderRadius: 10
    },
    texto:{
      width:'70%',
      flexDirection: 'column',
      padding: 5,
      alignItems: 'center'
    },
    titulo:{
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    subtitulo:{
      color: 'white',
      fontSize: 15,
      fontWeight: '700',
      textAlign: 'center'
    },
    sinopse:{
      color: 'white',
      marginBottom: 10
    },
    saibaMais:{
        color: 'blue',
        marginBottom: 7,
        marginTop: 7
    },
    botao:{
      width:'95%',
      backgroundColor: 'green',
      justifyContent: 'center',
      alignItems:'center',
      height: 40,
    },
    carregando:{
      color: 'white'
    }
  });
  
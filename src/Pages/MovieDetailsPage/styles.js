import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    viewCartao:{
        width: '100%',
        height: 320,
        backgroundColor: 'gray',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        alignItems:'center',
        justifyContent:'center'
      },
      texto:{
        width:'90%',
        flexDirection: 'column',
        padding: 7,
        alignItems: 'center'
      },
      detalhes:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
      },
      titulo:{
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5
      },
      sinopse:{
        color: 'white',
        marginBottom: 10
      },
      voltar:{
        color: 'blue',
        marginBottom: 7,
        marginTop: 7
    },
})

export default styles;
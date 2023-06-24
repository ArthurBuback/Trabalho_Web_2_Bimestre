import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "@react-navigation/native";
import styles from "./styles";

export default function MovieDetailsPage({ route }){

    const { filme } = route.params;

    return (
        <View style={styles.viewCartao}>
            <View style={styles.texto}>
                <Text style={styles.detalhes}>Detalhes do filme</Text>
                <Text style={styles.titulo}> {filme.titulo} </Text>
                <Text style={styles.sinopse}> {filme.sinopse} </Text>
                <TouchableOpacity style={styles.voltar}>
                    <Link to={{screen: "MoviesPage"}} style={styles.voltar}>Voltar?</Link>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}
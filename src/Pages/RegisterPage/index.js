import { Link } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles"; 

export default function RegisterPage(){
    return(
        <View style={styles.container}>
            <TextInput style={styles.informacao} placeholder="Nome de Usuário" />
            <TextInput style={styles.informacao} placeholder="Senha" />
            <TextInput style={styles.informacao} placeholder="Email" />
            <TouchableOpacity style={styles.confirmar}>
                <Link to={{screen: "LoginPage"}}>Realizar Cadastro</Link>
            </TouchableOpacity>
        </View>
    )
}
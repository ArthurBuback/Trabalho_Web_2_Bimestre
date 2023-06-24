import { Link } from "@react-navigation/native";
import { View, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles"; 

export default function ForgetPasswordPage(){
    return(
        <View style={styles.container}>
            <TextInput style={styles.informacao} placeholder="Preencha com o seu Email"/>
            <TextInput style={styles.informacao} placeholder="Nova senha a ser definida"/>
            <TouchableOpacity style={styles.confirmar}>
                <Link to={{screen: "LoginPage"}}>Enviar verificação para o email?</Link>
            </TouchableOpacity>
        </View>
    )
}
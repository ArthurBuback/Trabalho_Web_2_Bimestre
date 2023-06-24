import { Link } from "@react-navigation/native";
import { View, Text, TouchableOpacity, TextInput, Image} from "react-native";
import styles from "./styles"; 
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

export default function LoginPage(){

    const{ signIn } = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <Image source={require('../../assets/imgs/Logo.png')} style={styles.imgLogo}/>
            <TextInput style={styles.informacao} placeholder="Email"/>
            <TextInput style={styles.informacao} placeholder="Senha" />
            <TouchableOpacity style={styles.confirmar} onPress={() => signIn()}>
                <Text> Logar </Text>
            </TouchableOpacity>
            <View style={styles.links}>
                <TouchableOpacity>
                    <Link to={{screen: "RegisterPage"}} >Quer se Registrar?</Link>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Link to={{screen: "ForgetPasswordPage"}} >Recuperar Senha?</Link>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}
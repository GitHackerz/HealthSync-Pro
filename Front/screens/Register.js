import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {colors, fontFamily, fontFamily as FontFamily} from "../GlobalStyles";
import LoginImage from "../assets/login.png";
import Input from "../components/Input";
import {useState} from "react";

const Register = ({navigation}) => {
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>SYNCING YOUR HEALTH , Elevating Your LIFE</Text>
            <Image source={LoginImage} style={styles.image}/>
            <View style={styles.inputs}>
                <Input placeholder={"Email"} onChange={setEmail} value={email}/>
                <Input placeholder={"Password"} onChange={setPassword} value={password}/>
                <Input placeholder={"Role"} onChange={setRole} value={role}/>
            </View>
            <View style={styles.footer}>
                <Text style={styles.register}>Login with other method <Text
                    style={{color: colors.secondary, fontFamily: fontFamily.bold700}}>already have an account ?</Text></Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MainStack")}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 50,
        alignItems: "center",
    },

    headerText: {
        fontSize: 14,
        fontFamily: "Montserrat_700Bold",
        color: "#858484",
        marginBottom: 20,
    },
    image: {
        width: "100%",
        height: 300,
        resizeMode: "contain",
    },
    inputs: {
        width: "90%",
        marginTop: 20,
    },
    forgetPass: {
        fontSize: 13,
        fontFamily: FontFamily.light300,
        color: "#858484",
        marginBottom: 10,
    },
    register: {
        fontSize: 15,
        fontFamily: FontFamily.light300,
        color: "#858484",
    },
    button: {
        backgroundColor: colors.secondary,
        width: "100%",
        paddingVertical: 15,
        borderRadius: 30,
        marginTop: 20,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 15,
        fontFamily: FontFamily.bold700,
        color: "#fff",
    },
    footer: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 20,
    }

})

export default Register;
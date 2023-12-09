import {StyleSheet, Text, TextInput, View} from "react-native";

const Input = ({value, onChange, placeholder}) => {
    return (
        <View style={styles.input}>
            <TextInput
                value={value}
                onChangeText={onChange}
                style={styles.inputText}
                placeholder={placeholder}></TextInput>
        </View>
    );

}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#fff",
        width: "100%",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
        marginBottom: 20,
        elevation: 5,
    },
    inputText: {
        backgroundColor: "#fff",
        fontSize: 15,
        fontFamily: "Montserrat_400Regular",
        color: "#000",
    },
})

export default Input;
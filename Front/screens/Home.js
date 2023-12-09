import {StyleSheet, View, Text, Image} from "react-native";
import {colors, fontFamily} from "../GlobalStyles";
import {AntDesign, FontAwesome5} from '@expo/vector-icons';
import {SafeAreaView} from "react-native-safe-area-context";
import Insulin from "../assets/insulin.jpg";

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.lightHeader}>Home</Text>
                    <Text style={styles.boldHeader}>Hi, James</Text>
                </View>
                <View style={{flexDirection: "row", gap: 15, alignItems: "center"}}>
                    <FontAwesome5 name="award" size={24} color={colors.secondary}/>
                    <Text style={styles.pointText}>150 PT</Text>
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.cardTop}>
                    <Image source={Insulin} style={styles.image}></Image>
                    <View style={styles.cardMiddle}>
                        <Text style={{
                            fontSize: 20,
                            fontFamily: fontFamily.bold700,
                            color: colors.white,
                        }}>INSULIN</Text>
                        <Text style={{
                            fontSize: 14,
                            fontFamily: fontFamily.light300,
                            color: colors.white,
                        }}>DIABETES</Text>
                    </View>
                    <View>
                        <AntDesign name="right" size={24} color="white"/>
                    </View>
                </View>
                <View style={styles.footer}>
                    <AntDesign name="clockcircleo" size={15} color="white"/>
                    <Text style={{color: colors.white}}> 12:00 PM</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: "center",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    lightHeader: {
        fontSize: 15,
        fontFamily: "Montserrat_300Light",
        color: "#858484",
    },
    boldHeader: {
        fontSize: 20,
        fontFamily: "Montserrat_700Bold",
        color: "#858484",
    },
    pointText: {
        fontSize: 15,
        fontFamily: fontFamily.bold700,
        color: colors.secondary,

    },
    card: {
        backgroundColor: colors.secondary,
        width: "100%",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
        marginBottom: 20,
        elevation: 5,
    },
    cardTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cardMiddle: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",


    },
    footer: {
        paddingVertical: 10,
        borderTopColor: colors.white,
        borderTopWidth: 1,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        alignSelf: "center",
    },
    image: {
        height: 64,
        width: 64,
        resizeMode: "contain",
        borderRadius: 100,
    }
})

export default Home;
import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    formContext:{
        width: "100%",
        height:"auto",
        bottom: 0,
        backgroundColor: "#1a1a1a",
        alignItems: "center",
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginTop: 10,
        borderColor: "#4E4E4E",
        borderWidth: 1.5,
        shadowColor: '#000',
        shadowOffset: { width: 7, height: 7 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
    },

    form:{
        width: 250,
        height: "55%",
        padding: 10 ,
        
    },

    label:{
        color: "#fff",
        fontSize: 14,
        paddingLeft: 10,
    },

    input:{
        width: "100%",
        borderRadius: 2,
        backgroundColor: "#333333",
        height: 40,
        marginTop: 5,
        marginBottom: 10,
        paddingLeft: 10,
        color: "#fff",
        placeholderTextColor: '#808080',
    },

    buttonCalculator:{
        borderRadius: 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ff8210",
        height: 40,
        marginLeft: 0,
        margin: 0,
        marginTop: 10,
    },

    textButtonCalculator:{
        fontSize: 18,
        color: "#fff",
        fontWeight: 'bold',
    },
    errorMessage:{
        fontSize: 12,
        color: "red",
        fontWeight:"bold",
        paddingLeft:10,
    }


});

export default styles
import { themas } from "@/global/themes";
import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    boxTop:{
        height: Dimensions.get('window').height/3,
        width: '100%',
        //backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },

    boxMid:{
        height:Dimensions.get('window').height/4,
        width: '100%',
        backgroundColor: 'green',
        paddingHorizontal:37
    },

    boxBottom:{
        height:Dimensions.get('window').height/3,
        width: '100%',
        backgroundColor: 'blue'
    },

    logo:{
        width: 80,
        height: 80,

    },

    text:{
        fontWeight:'bold',
        marginTop:40,
        fontSize:18
    },
    titleInput: {
        marginLeft:5,
        color:themas.colors.gray,
        marginTop: 20
    },
    boxInput: {
        width:'100%',
        height:40,
        borderWidth:1,
        borderRadius:40,
        marginTop:10,
        flexDirection:'row',
    },
    input: {
        height:'100%',
        width:'100%'
    }

})
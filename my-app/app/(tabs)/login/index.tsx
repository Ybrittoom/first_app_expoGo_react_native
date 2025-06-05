import React from "react";

import { View, Text, Image, TextInput} from "react-native" //tags usadas
import { style } from "./styles"; //link do "css"
import Logo from '../../../assets/images/react-logo.png' //importando a imagem

export default function Login() {
    return (
        //View e como se fosse uma "div" do html 
        <View style={style.container}> 
            <View style={style.boxTop}>
                <Image 
                    style={style.logo}
                    source={Logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem-Vindo de volta</Text>
            </View>

            <View style={style.boxMid}>
                <Text style={style.titleInput}>Endereço de Email</Text>
                <View style={style.boxInput}>
                    <TextInput 
                        style={style.input}
                    />
                    <Text>Ola</Text>
                </View>
                <Text style={style.titleInput}>Endereço de  email</Text>
                <TextInput />
            </View>

            <View style={style.boxBottom}>
                
            </View>
        </View>
    )
}
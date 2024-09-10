import React from "react";
import { View, Text , StyleSheet} from 'react-native'
import { Entypo, Feather } from '@expo/vector-icons'

interface PropsButton {
    size: number;
    focused: boolean;
}

export default function ButtonNew({size, focused}:PropsButton){
    return (
        <View style={[styles.container, { backgroundColor: focused ? '#3eccf5' :'#6fdfff' }]}>
           <Entypo name="plus" color={focused? '#fff':'#f8f8f8'} size={size} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:60,
        height:60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    }
})
import { Text, View, Button } from "react-native";
import React from "react";

const DetailScreen = ({navigation}) =>{
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Details Screen</Text>
        <Button title='Go To Home' onPress={()=> navigation.navigate('Home')}></Button>
    </View>
    );
};
export default DetailScreen;

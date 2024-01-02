import {View, Text, Button} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation})=>{
    return(
        <View style ={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
            <Text>Home Screen</Text>
            <Button title='Go To Details' onPress={()=> navigation.navigate('Details')}></Button>
        </View>
    );
};
export default HomeScreen;
import React, { useEffect } from "react";
import {View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createNativeStackNavigator();

const SplashScreen = ({navigation}:any) => {
  useEffect(() => {
    const timer = setTimeout(() =>{
      navigation.replace('Login');
    },5000);

    return () => clearTimeout(timer);
},[navigation]);

return (
    <View style={styles.container}>
      <Text style={styles.header}>DhoodWala</Text>
     
    </View>
  );
};

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Splash" component={SplashScreen}/>

      <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#2596be',
    alignItems:'center',
    justifyContent:'center',
  },
  header:{
    fontFamily:"cursive", 
    fontSize:50,
    fontWeight: 'bold'
  }

});

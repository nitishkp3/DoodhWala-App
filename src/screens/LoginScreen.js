import React from "react";
import {StyleSheet, View, Text} from 'react-native';

const LoginScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Welcome to Login Page</Text>
        </View>

    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
         backgroundColor:'#155c38ff',
        
    }

});

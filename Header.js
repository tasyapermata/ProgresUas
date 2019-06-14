import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.headerBar}>
            <Text style={styles.headerText}> {props.judul} </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    headerBar: {
        backgroundColor: '#680000',
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 40,
        paddingTop: 40,
        position: "relative",
        height: 100,
        fontWeight: 'bold',
    },
    headerText: {
        fontSize: 20,
        color: "#fff",
        textAlign: "center"
    },

});
export default Header;

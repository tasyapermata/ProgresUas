import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, Button } from 'react-native';
import Header from "./Header";


export default class MenuAbsen extends React.Component {
  render() {
    return (
    <View style={styles.containerMain}>
      <Header judul={"MENU ABSENSI MAHASISWA"} />
      <Image style = {{marginLeft:75,width: 200, height: 220}} source={require("./menupic.png")}/>

    <View style={styles.vButton}>
        <Button
            color='#D2691E'
            onPress={() => this.props.navigation.navigate('dataAdmin')}
            title="DATA ADMIN"
            accessibilityLabel="dataAdmin"
            />
    <View style={styles.vButton}></View>
        <Button
            color='#D2691E'
            title="DATA MAHASISWA"
            />
    <View style={styles.vButton}></View>
        <Button
            color='#D2691E'
            title="DATA KEGIATAN"            />
    <View style={styles.vButton}></View>
        <Button
            color='#D2691E'
            title="ABSENSI MAHASISWA"
            />

          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column'
  },

  box1: {
    flex: 1,
    backgroundColor: '#480000',
    width: "90%",
    paddingTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    //justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center"

  },
  buttonText: {
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 16
    },
  txtInput: {
        height: 30,
        backgroundColor:'#fff',
        borderColor: 'gray',
        borderWidth: 1,
    },


  button2Style: {
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: 'center',
      backgroundColor: '#CD5C5C',
      marginTop: 20,
      marginBottom: 20,
      height: 60,
      width: 300,
      borderRadius: 5,
  },
  vButton:{
    margin:5,
    borderRadius: 40,
    justifyContent: 'center',
  },
});


import React, { Component } from "react";
import {View,Text,StyleSheet,TouchableHighlight,TextInput,ScrollView,Alert,image} from "react-native";
import Header from "./Header";

export default class dataAdmin extends React.Component {
  static navigationOptions = {
   }
    constructor(props) {
        super(props);
        this.state = {
          id_admin: '',
          nama: '',
          prodi: '',
          no_hp: '',
          email: '',
          alamat: '',

      };
    }
    Tambah= () =>{
      if(this.state.id_admin == '' && this.state.nama == ''&& this.state.prodi == ''
        && this.state.no_hp == ''&& this.state.email == ''&& this.state.alamat == ''){
        this.props.navigation.navigate('MenuAbsen')
      }else{
        Alert.alert('Isikan identitas anda dengan Benar!!!');
    }
  }
  Kembali= () =>{
    if(this.state.id_admin == '' && this.state.nama == ''&& this.state.prodi == ''
      && this.state.no_hp == ''&& this.state.email == ''&& this.state.alamat == ''){
      this.props.navigation.navigate('MenuAbsen')
    }else{
      Alert.alert('Isikan identitas anda dengan Benar!!!');
    }
  }
  render() {
      return (
        <View style={styles.containerMain}>

      <Header judul={"DATA ADMIN"} />
        <ScrollView>
                <View style={styles.box1}>
                <Text style={styles.teksinputteks}>
                      ID Admin  :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="ID Admin"
                  onChangeText={id_admin => this.setState({id_admin})}
                  />
                </View>
                <View style={styles.box1}>
                <Text style={styles.teksinputteks}>
                      Nama  :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="Nama"
                  onChangeText={nama => this.setState({ nama })}
                  />
                </View>
                <View style={styles.box1}>
                <Text style={styles.teksinputteks}>
                      Prodi  :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="Prodi"
                  onChangeText={prodi => this.setState({ prodi })}
                  />
                </View> 
                <View style={styles.box1}>
                <Text style={styles.teksinputteks}>
                      No. Hp.  :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="No. Hp."
                  onChangeText={no_hp => this.setState({ no_hp })}
                  />
                </View>
                <View style={styles.box1}>
                <Text style={styles.teksinputteks}>
                      Email  :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="Email"
                  onChangeText={email => this.setState({ email })}
                  />
                </View>
                <View style={styles.box1}>
                <Text style={styles.teksinputteks}>
                      Alamat  :
                      </Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="Alamat"
                  onChangeText={alamat => this.setState({ alamat })}
                  />
                </View>
                <View style={styles.box3}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => this.Tambah()}>
                  <Text style={styles.txtButton}>Tambah</Text>
                  </TouchableHighlight>
                </View>
                <View style={styles.box2}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => this.MenuAbsen()}>
                  <Text style={styles.txtButton}>Kembali</Text>
                  </TouchableHighlight>
                </View>
        </ScrollView>
        </View>
        );
      }
  }
   const styles = StyleSheet.create({
    containerMain: {
      backgroundColor: 'white',
      flex: 1,
    },
  
    vHeader: {
      flex: 10,
      backgroundColor: '#680000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box1: {
      flex: 0.5,
      width: "120%",
      marginTop: 10,
      marginLeft:10,
      paddingTop: 10,
      justifyContent: 'center',
      flexDirection: 'row',
    },
    teksinputteks:{
      marginRight:0,
      marginLeft:10,
      marginBottom: 15,
      alignItems: 'center',
      justifyContent: 'center',
  },
    txtBox1: {
      width: 200,
      height: 50,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textBox1:{
      color: 'white',
      fontSize: 15,
    },
    box2: {
      flex: 0.8,
      margin:10,
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    box3: {
      flex: 0.8,
      margin:10,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    txtButton: {
      textAlign: 'center',
      marginTop: 10,
      color: 'black',
      fontSize: 20,
      width: '100%',
      height: 40,
    },
    vButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00ffff',
      borderRadius: 5,
      padding:20,
      margin:20,
      width: '30%',
      height: 50,
    },
    txtTeks: {
      color: 'black',
      marginLeft:60,
      fontSize: 15,
      marginBottom:10,
    }
});

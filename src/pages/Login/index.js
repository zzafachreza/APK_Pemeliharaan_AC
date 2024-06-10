import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Animated, View, Image, ScrollView, ActivityIndicator, TouchableOpacity, BackHandler, Alert, Linking, ImageBackground } from 'react-native';
import { fonts, windowWidth, colors, windowHeight, MyDimensi } from '../../utils';
import { MyInput, MyGap, MyButton } from '../../components';
import axios from 'axios';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';
import { TouchableNativeFeedback } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import SweetAlert from 'react-native-sweet-alert';
import { color } from 'react-native-reanimated';

export default function MasukSebagai({ navigation }) {

  const [kirim, setKirim] = useState({
    api_token: api_token,
    telepon: null,
    password: null
  });
  const [loading, setLoading] = useState(false);

  const [comp, setComp] = useState({});

  const card = new Animated.Value(-30);
  const img = new Animated.Value(-20);




  const masuk = () => {


    if (kirim.telepon == null && kirim.password == null) {
      Alert.alert(MYAPP, 'telepon dan Password tidak boleh kosong !');
    } else if (kirim.telepon == null) {
      Alert.alert(MYAPP, 'telepon tidak boleh kosong !');
    } else if (kirim.password == null) {
      Alert.alert(MYAPP, 'Password tidak boleh kosong !');
    } else {


      setLoading(true);
      console.log(kirim);

      axios
        .post(apiURL + 'login', kirim)
        .then(res => {
          setLoading(false);
          console.log(res.data);
          if (res.data.status == 404) {
            showMessage({
              type: 'danger',
              message: res.data.message
            })
          } else {
            storeData('user', res.data.data);
            navigation.replace('MainApp')
          }
        });



    }




  }

  useEffect(() => {
    Animated.timing(card, {
      toValue: 1,
      duration: 850,
      useNativeDriver: false,
    }).start();
    Animated.timing(img, {
      toValue: 0,
      duration: 850,
      useNativeDriver: false,
    }).start();
    axios.post(apiURL + 'company').then(res => {
      setComp(res.data.data);
    })

  }, []);

  return (
    <ImageBackground source={require('../../assets/bgimg.png')} style={{
      flex:1,      
      width:'100%',
      height:'100%',
        }}>

    <ScrollView style={{position:"relative"}}>

 
        <Animated.View style={{
        padding: 10,
        flex: 1, margin: 10,
        bottom: card,
        borderRadius: 0,
      
      }}>

      <View style={{padding:10, marginTop:'30%'}}>

      <Image source={require('../../assets/logo.png')} style={{
        height:158, width:237,
        alignItems:'center',
        alignSelf:"center",
        
      }}/>

        <View style={{marginTop:61}}>
          <Text style={{fontFamily:fonts.primary[600], textAlign:"center",
          color:colors.primary, fontSize:18}}>Masuk Sebagai</Text>
        </View>
        {/* COSTUMER */}
        <TouchableNativeFeedback onPress={() => navigation.navigate('Login')}>
          <View style={{padding:10, backgroundColor:colors.primary, marginTop:5,
          borderRadius:20,}}>
            <Text style={{textAlign:"center", fontFamily:fonts.primary[600], fontSize:25,
            color:'white'}}>Customer</Text>
          </View>
        </TouchableNativeFeedback>
            <MyGap jarak={15}/>
        {/* TEKNISI */}
        <TouchableNativeFeedback onPress={() => navigation.navigate('LoginTeknisi')}>
          <View style={{padding:10, backgroundColor:colors.primary, marginTop:5,
          borderRadius:20,}}>
            <Text style={{textAlign:"center", fontFamily:fonts.primary[600], fontSize:25,
            color:"white"
            }}>Teknisi</Text>
          </View>
        </TouchableNativeFeedback>

      </View>

      


    

      </Animated.View>
      <View style={{marginTop:'10%'}}>

      </View>
 

      


      {loading && <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ActivityIndicator color={colors.secondary} size="large" />
      </View>}
    </ScrollView>
    </ImageBackground>




  );
}

const styles = StyleSheet.create({});

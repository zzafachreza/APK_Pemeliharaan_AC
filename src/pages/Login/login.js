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
import { TextInput } from 'react-native-gesture-handler';

export default function Login({ navigation }) {

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

      <View style={{padding:10, marginTop:'10%'}}>


        <View style={{marginTop:61}}>
          <Text style={{fontFamily:fonts.primary[600], textAlign:"center",
          color:colors.primary, fontSize:32}}>Custumer</Text>
        </View>
  
            <MyGap jarak={33}/>
            <View style={{padding:10}}>


                <View>
                    <Text style={{fontFamily:fonts.primary[600], fontSize:16, color:colors.primary,
                    }}>Email</Text>
                </View>

                <TextInput style={{borderWidth:1, borderRadius:10, fontFamily:fonts.primary[500],
                fontSize:12, paddingLeft:10, paddingRight:10, 
                }} placeholder='Email' placeholderTextColor="gray"/>

                        <MyGap jarak={20}/>


                        <View>
                    <Text style={{fontFamily:fonts.primary[600], fontSize:16, color:colors.primary,
                    }}>Password</Text>
                </View>

                <TextInput style={{borderWidth:1, borderRadius:10, fontFamily:fonts.primary[500],
                fontSize:12, paddingLeft:10, paddingRight:10, 
                }} placeholder='Pasword' placeholderTextColor="gray" secureTextEntry={true}/>
            </View>
                
                <MyGap jarak={23}/>

                <TouchableNativeFeedback onPress={() => navigation.navigate('MainApp')}>
                    <View style={{padding:10, backgroundColor:colors.primary, borderRadius:10}}>
                        <Text style={{fontFamily:fonts.primary[600],fontSize:24, color:'white',
                        textAlign:"center"}}>Masuk</Text>
                    </View>
                </TouchableNativeFeedback>

                <MyGap jarak={51}/>

                <TouchableNativeFeedback onPress={() => navigation.navigate('Register')}>
                    <View>
                        <Text style={{fontFamily:fonts.primary[400], textAlign:'center'}}>Belum memiliki akun?<Text style={{
                            color:colors.primary,  fontFamily:fonts.primary[600]
                        }}> Register</Text> </Text>
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

import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View,
    Image,
    ScrollView,
    ImageBackground,
    Dimensions,
    Switch,
    SafeAreaView,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
    TouchableNativeFeedback,
} from 'react-native';
import { colors } from '../../utils/colors';
import { MyDimensi, fonts, windowWidth } from '../../utils/fonts';
import { MyInput, MyGap, MyButton, MyPicker, MyCalendar, MyCalendarSecond, MyHeader } from '../../components';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';
import { apiURL, api_token, MYAPP } from '../../utils/localStorage';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';
import { Icon } from 'react-native-elements';
import SweetAlert from 'react-native-sweet-alert';
import { color } from 'react-native-reanimated';
import { TextInput } from 'react-native-gesture-handler';

export default function RegisterTeknisi({ navigation }) {
    const backPage = () => {
        navigation.goBack();
    }

    


    const [loading, setLoading] = useState(false);
    const [sama, setSama] = useState(true)
    const [data, setData] = useState({
        api_token: api_token,
        level: 'IBU',
        posyandu: "Kasih ibu 15",
        desa: "Kertamulya",
        kecamatan: "Padalarang",
        nama_lengkap: '',
        telepon: '',
        nama_anak: '',
        tanggal_lahir: moment().format('YYYY-MM-DD'),
        jenis_kelamin: 'Laki-laki',
        password: '',
        repassword: '',


    });

    const simpan = () => {


        console.log(data);
        if (
            data.nama_lengkap.length === 0 &&
            data.telepon.length === 0 &&
            data.password.length === 0

        ) {
            showMessage({
                message: 'Formulir pendaftaran tidak boleh kosong !',
            });
        } else if (data.nama_lengkap.length === 0) {
            showMessage({
                message: 'Masukan nama lengkap ibu',
            });
        }

        else if (data.telepon.length === 0) {
            showMessage({
                message: 'Masukan nomor telepon',
            });
        }
        else if (data.password.length === 0) {
            showMessage({
                message: 'Masukan kata sandi kamu',
            });
        } else if (data.repassword.length === 0) {
            showMessage({
                message: 'Ulangi kata sandi kamu',
            });
        } else {



            setLoading(true);
            axios
                .post(apiURL + 'register', data)
                .then(res => {
                    console.warn(res.data);
                    setLoading(false);
                    if (res.data.status == 404) {
                        SweetAlert.showAlertWithOptions({
                            title: MYAPP,
                            subTitle: res.data.message,
                            style: 'error',
                            cancellable: true
                        },
                            callback => navigation.navigate('Login'));

                    } else {
                        SweetAlert.showAlertWithOptions({
                            title: MYAPP,
                            subTitle: res.data.message,
                            style: 'success',
                            cancellable: true
                        },
                            callback => navigation.navigate('Login'));

                    }


                });
        }
    };



    return (
      
            <ImageBackground 
            source={require('../../assets/bgimg.png')}
                style={{
                    flex: 1,
                    width:'100%',
                    height:'100%',
                    
                    
                }}>

        

                    <View style={{padding:10}}>
                    <View style={{padding:10, backgroundColor:"white", borderWidth:0.3, 
                    borderRadius:20}}>

           
                {/* <Switch onValueChange={toggleSwitch} value={isEnabled} /> */}
                <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>

                    <View style={{padding:10,}}>
                        <Text style={{fontFamily:fonts.primary[600], color:colors.primary, fontSize:24,
                        textAlign:'center'
                        }}>Daftar</Text>
                        <MyGap jarak={15}/>

                    {/* NAMA LENGKAP */}
                    <View style={{padding:10}}>
                        <View><Text style={{fontFamily:fonts.primary[400], fontSize:15, color:colors.primary,}}>Nama Lengkap : </Text></View>
                            <MyGap jarak={10}/>
                        <TextInput style={{ borderWidth:1, borderRadius:10, paddingLeft:10, paddingRight:10, color:'black',
                        fontSize:12, fontFamily:fonts.primary[400], }} placeholder='Masukan Nama Lengkap' placeholderTextColor="gray"/>
                    </View>

                
                        
                        {/* USERNAME */}
                        <View style={{padding:10}}>
                            <View><Text style={{fontFamily:fonts.primary[400], fontSize:15, color:colors.primary,}}>Username  </Text></View>
                                <MyGap jarak={10}/>
                            <TextInput style={{ borderWidth:1, borderRadius:10, paddingLeft:10, paddingRight:10, color:'black',
                            fontSize:12, fontFamily:fonts.primary[400], }} placeholder='Masukan Username' placeholderTextColor="gray"/>
                        </View>

                   
                        
                        {/* EMAIL */}
                        <View style={{padding:10}}>
                            <View><Text style={{fontFamily:fonts.primary[400], fontSize:15, color:colors.primary,}}>Email : </Text></View>
                                <MyGap jarak={10}/>
                            <TextInput style={{ borderWidth:1, borderRadius:10, paddingLeft:10, paddingRight:10, color:'black',
                            fontSize:12, fontFamily:fonts.primary[400], }} placeholder='Masukan Email' placeholderTextColor="gray"/>
                        </View>

                   
                        
                        {/* ALAMAT */}
                        <View style={{padding:10}}>
                            <View><Text style={{fontFamily:fonts.primary[400], fontSize:15, color:colors.primary,}}>Alamat : </Text></View>
                                <MyGap jarak={10}/>
                            <TextInput style={{ borderWidth:1, borderRadius:10, paddingLeft:10, paddingRight:10, color:'black',
                            fontSize:12, fontFamily:fonts.primary[400], }} placeholder='Masukan Alamat' placeholderTextColor="gray"/>
                        </View>

              
                        
                        {/* TELEPON */}
                        <View style={{padding:10}}>
                            <View><Text style={{fontFamily:fonts.primary[400], fontSize:15, color:colors.primary,}}>Telepon : </Text></View>
                                <MyGap jarak={10}/>
                            <TextInput style={{ borderWidth:1, borderRadius:10, paddingLeft:10, paddingRight:10, color:'black',
                            fontSize:12, fontFamily:fonts.primary[400], }} placeholder='Masukan Nomor Telepon' placeholderTextColor="gray"/>
                        </View>

                     
                        
                        {/* PASSWORD*/}
                        <View style={{padding:10}}>
                            <View><Text style={{fontFamily:fonts.primary[400], fontSize:15, color:colors.primary,}}>Password : </Text></View>
                                <MyGap jarak={10}/>
                            <TextInput style={{ borderWidth:1, borderRadius:10, paddingLeft:10, paddingRight:10, color:'black',
                            fontSize:12, fontFamily:fonts.primary[400], }} placeholder='Masukan Password' placeholderTextColor="gray"
                                secureTextEntry={true}
                            />
                        </View>

                     
                        
                        {/* Konfirmasi Password */}
                        <View style={{padding:10}}>
                            <View><Text style={{fontFamily:fonts.primary[400], fontSize:15, color:colors.primary,}}>Konfirmasi Password : </Text></View>
                                <MyGap jarak={10}/>
                            <TextInput style={{ borderWidth:1, borderRadius:10, paddingLeft:10, paddingRight:10, color:'black',
                            fontSize:12, fontFamily:fonts.primary[400], }} placeholder='Konfirmasi Password' placeholderTextColor="gray"/>
                        </View>

                        <MyGap jarak={20}/>
                        
                        <TouchableNativeFeedback>
                            <View style={{padding:10, backgroundColor:colors.primary, borderRadius:10}}>
                                <Text style={{fontFamily:fonts.primary[600], fontSize:24, textAlign:'center',
                                color:'white', }}>Daftar</Text>
                            </View>
                        </TouchableNativeFeedback>

                        <MyGap jarak={20}/>
                        <TouchableNativeFeedback onPress={backPage}>
                    <View>
                        <Text style={{fontFamily:fonts.primary[400], textAlign:'center'}}>Sudah memiliki akun?<Text style={{
                            color:colors.primary,  fontFamily:fonts.primary[600]
                        }}> Login</Text> </Text>
                    </View>
                </TouchableNativeFeedback>
                    </View>

                </ScrollView>
                </View>
                </View>

            </ImageBackground>

    );
}

const styles = StyleSheet.create({
    page: {
    position:"relative"
   

    },
    image: {
        width: 620 / 4,
        height: 160 / 4,
    },
});

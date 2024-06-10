import { View, Text, ScrollView, TouchableOpacity, TextInput, Modal, Image } from 'react-native';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { MyGap, MyHeader } from '../../components';
import { colors, fonts } from '../../utils';

export default function PemesananServiceACWA({ navigation }) {


  const backPage = () => {
    navigation.navigate('MainApp');
  };


  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* HEADER */}
      <MyHeader onPress={backPage} judul="Pemesanan Service AC" />

      <ScrollView>
        <View style={{ padding: 10 }}>
            <View style={{alignItems:'center'}}>
                <Text style={{fontFamily:fonts.primary[600], fontSize:15, textAlign:'center',
                color:colors.primary}}>Customer dapat berkonsultasi lebih{'\n'}lanjut secara langsung dengan{'\n'}teknisi via WhatsApp</Text>
                <MyGap jarak={28}/>
                <TouchableOpacity>
                    <Image source={require('../../assets/logowa.png')} style={{
                        width:236, height:236
                    }}/>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    </View>
  );
}

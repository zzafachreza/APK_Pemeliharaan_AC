import { View, Text, ScrollView, TouchableOpacity, TextInput, Modal, Image } from 'react-native';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { MyGap, MyHeader } from '../../components';
import { colors, fonts } from '../../utils';

export default function RiwayatPemesanan({ navigation }) {


  const backPage = () => {
    navigation.navigate('MainApp');
  };


  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* HEADER */}
      <MyHeader onPress={backPage} judul="Riwayat Pemesanan" />

      <ScrollView>
        <View style={{ padding: 10 }}>
            {/* NANTI AKAN ADA RIWAYAT PEMSANAN DISINI */}
        </View>
      </ScrollView>
    </View>
  );
}

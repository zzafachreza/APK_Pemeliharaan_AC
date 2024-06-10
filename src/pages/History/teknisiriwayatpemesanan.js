import { View, Text, ScrollView, TouchableOpacity, Image, TouchableNativeFeedback } from 'react-native';
import React, { useState } from 'react';
import { MyHeader } from '../../components';
import { colors, fonts } from '../../utils';

export default function TeknisiRiwayatPemesanan({ navigation }) {

  const backPage = () => {
    navigation.navigate('MainApp');
  };

  const navigateToEdit = (orderId) => {
    navigation.navigate('PemesananServiceACTeknisi', { orderId });
  };

  const orders = [
    {
      id: 1,
      date: '4 Juni 2024',
      status: 'Menunggu Servis',
      customerName: 'Riri Indriyani',
      email: 'ririindriyani@gmail.com',
      phone: '08934567876',
      address: 'Jl. Banda No. 30',
      issue: 'AC mati sendiri',
      serviceDate: '7 Juni 2024',
      statusColor: 'orange'
    },
    {
      id: 2,
      date: '12 Maret 2024',
      status: 'Selesai',
      customerName: 'Riri Indriyani',
      email: 'ririindriyani@gmail.com',
      phone: '08934567876',
      address: 'Jl. Banda No. 30',
      issue: 'Pembersihan mesin',
      serviceDate: '15 Maret 2024',
      statusColor: colors.primary
    },
    // Tambahkan lebih banyak pesanan sesuai kebutuhan
  ];

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* HEADER */}
      <MyHeader onPress={backPage} judul="Riwayat Pemesanan" />

      <ScrollView>
        <View style={{ padding: 10 }}>
          {orders.map(order => (
            <View key={order.id} style={{ marginBottom: 20, borderRadius: 10, borderWidth: 1, borderColor: '#C4C4C4', padding: 15 }}>
              <Text style={{ fontFamily: fonts.primary[400], fontSize: 12, color: colors.primary, marginBottom: 10 }}>
                {order.date}
              </Text>
              <View style={{ padding: 10, backgroundColor: 'white', borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 }}>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 12, color: colors.primary, marginBottom: 5 }}>
                  Pemesanan Servis AC
                </Text>
                <Text style={{ fontFamily: fonts.primary[400], fontSize: 10, color: colors.primary }}>
                  Nama: {order.customerName}
                </Text>
                <Text style={{ fontFamily: fonts.primary[400], fontSize: 10, color: colors.primary }}>
                  Email: {order.email}
                </Text>
                <Text style={{ fontFamily: fonts.primary[400], fontSize: 10, color: colors.primary }}>
                  Telepon: {order.phone}
                </Text>
                <Text style={{ fontFamily: fonts.primary[400], fontSize: 10, color: colors.primary }}>
                  Alamat: {order.address}
                </Text>
                <Text style={{ fontFamily: fonts.primary[400], fontSize: 10, color: colors.primary }}>
                  Masalah AC: {order.issue}
                </Text>
                <Text style={{ fontFamily: fonts.primary[400], fontSize: 10, color: colors.primary }}>
                  Waktu: {order.serviceDate}
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                  <View style={{ backgroundColor: order.statusColor, padding: 5, borderRadius: 5 }}>
                    <Text style={{ color: 'black', fontFamily: fonts.primary[400] }}>
                      {order.status}
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => navigateToEdit(order.id)}>
                    <Image source={require('../../assets/edit-icon.png')} style={{ width: 17, height: 17 }} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableNativeFeedback onPress={() => navigation.navigate('PemesananServiceACTeknisi')}>
        <View style={{top:-30, padding:10, flexDirection:'row', justifyContent:'flex-end'}}>
           <View>
           <Image source={require('../../assets/tomboltambah.png')} style={{
                width:62, height:62
            }}/>
           </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

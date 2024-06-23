import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { apiURL } from '../../utils/localStorage';
import moment from 'moment';
import { colors } from '../../utils';
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput, MyPicker } from '../../components';
import { showMessage } from 'react-native-flash-message';

export default function PemesananServiceACTeknisi({ navigation, route }) {

  const [customer, setCustomer] = useState([]);
  const [kirim, setKirim] = useState({
    input_by: route.params.id,
    tanggal: moment().format('YYYY-MM-DD'),
    masalah: '',
    status: 'Menunggu Servis'

  })


  useEffect(() => {
    axios.post(apiURL + 'customer').then(res => {
      console.log(res.data);
      setCustomer(res.data);
      setKirim({
        ...kirim,
        fid_user: res.data[0].value
      })
    })
  }, []);

  const sendServer = () => {
    if (kirim.masalah.length == 0) {
      showMessage({
        type: 'danger',
        message: 'Masalah AC perlu di isi !'
      })
    } else {
      axios.post(apiURL + 'pemesanan_add', kirim).then(res => {
        console.log(res.data);
        if (res.data == 200) {
          showMessage({
            message: 'Pemesanan Service AC berhasil di simpan !',
            type: "success"
          });
          navigation.goBack();
        }
      })
    }
  }

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.white,
    }}>
      <MyHeader judul="Pemesanan Servis AC" onPress={() => navigation.goBack()} />

      <View style={{
        flex: 1,
        padding: 20,
      }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MyPicker label="Customer" data={customer} onValueChange={x => {
            setKirim({
              ...kirim,
              fid_user: x
            })
          }} />
          <MyGap jarak={20} />
          <MyInput placeholder="Masukan masalah AC" label="Masalah AC" onChangeText={x => {
            setKirim({
              ...kirim,
              masalah: x
            })
          }} />
          <MyGap jarak={20} />
          <MyCalendar label="Waktu" onDateChange={x => {
            setKirim({
              ...kirim,
              tanggal: x
            })
          }} />
          <MyGap jarak={20} />
          <MyPicker label="Status Pemesanan" data={[
            { label: 'Menunggu Servis', value: 'Menunggu Servis' },
            { label: 'Sedang Berlansung', value: 'Sedang Berlansung' },
            { label: 'Selesai', value: 'Selesai' },
            { label: 'Pesanan Batal', value: 'Pesanan Batal' },

          ]} onValueChange={x => {
            setKirim({
              ...kirim,
              status: x
            })
          }} />
          <MyGap jarak={20} />
          <MyButton onPress={sendServer} title="Simpan" />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
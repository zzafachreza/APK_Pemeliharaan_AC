import { Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { apiURL, getData } from '../../utils/localStorage';
import moment from 'moment';
import { colors, fonts } from '../../utils';
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput, MyPicker } from '../../components';
import { showMessage } from 'react-native-flash-message';
import { FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import { Calendar, LocaleConfig } from 'react-native-calendars';

export default function PemesananServiceAC({ navigation, route }) {

  const [teknisi, setTeknisi] = useState([]);
  const [kirim, setKirim] = useState({
    tanggal: moment().add(1, 'day').format('YYYY-MM-DD'),
    id_teknisi: '',

  });

  const [user, setUser] = useState({})

  const [lainnya, setLainnya] = useState('')

  const [masalah, setMasalah] = useState([
    { nama: 'Tidak Dingin', cek: 0 },
    { nama: 'Bocor', cek: 0 },
    { nama: 'Berbau', cek: 0 },
    { nama: 'Tidak Ada', cek: 0 },
    { nama: 'Lainnya', cek: 0 },
  ]);


  useEffect(() => {

    getData('user').then(uu => {
      setUser(uu)
    })
    axios.post(apiURL + 'teknisi').then(res => {
      console.log(res.data);
      setTeknisi(res.data);

    })
  }, []);

  const sendServer = () => {
    console.log({
      ...kirim,
      masalah: masalah.filter(i => i.cek > 0),
      lainnya: lainnya
    });
    if (masalah.filter(i => i.cek > 0).length == 0) {
      showMessage({
        type: 'danger',
        message: 'Silahkan pilih masalah AC'
      })
    } else if (kirim.id_teknisi.length == 0) {
      showMessage({
        type: 'danger',
        message: 'Silahkan pilih teknisi'
      })
    } else {
      let WATemplate = `*PEMESANAN SERVICE AC*%0A%0A`;
      WATemplate += `Nama Customer : *${user.nama_lengkap}*%0A`;
      WATemplate += `Telepon Customer : *${user.telepon}*%0A`;
      WATemplate += `Masalah AC %0A`;
      masalah.filter(i => i.cek > 0).map(itm => {
        WATemplate += `*- ${itm.nama}*%0A`;
      })

      if (masalah.filter(i => i.cek > 0 && i.nama == 'Lainnya').length > 0) {
        WATemplate += `- ${lainnya}%0A`;
      }
      WATemplate += `%0ATanggal : *${moment(kirim.tanggal).format('dddd, DD MMMM YYYY')}*%0A`;
      console.log(WATemplate);
      navigation.navigate('PemesananServiceACWA', {
        link_url: 'https://wa.me/' + kirim.telepon + '?text=' + WATemplate
      })

    }

  }

  const MyList = ({ label, value }) => {
    return (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <Text style={{
          flex: 0.4,
          fontFamily: fonts.secondary[800],
          fontSize: 12,
          color: colors.black,
        }}>{label}</Text>
        <Text style={{
          marginHorizontal: 5,
          fontFamily: fonts.secondary[600],
          fontSize: 12,
          color: colors.black,
        }}>:</Text>
        <Text style={{
          flex: 1,
          fontFamily: fonts.secondary[600],
          fontSize: 12,
          color: colors.black,
        }}>{value}</Text>
      </View>
    )
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
          <Text style={{
            fontFamily: fonts.secondary[800],
            color: colors.primary,
            fontSize: 20,
            textAlign: 'center',
            borderBottomWidth: 2,
            borderColor: colors.border,
            paddingBottom: 10,
            marginBottom: 10,
          }}>Masalah AC</Text>

          <FlatList data={masalah} renderItem={({ item, index }) => {
            return (
              <TouchableOpacity onPress={() => {
                let tmp = [...masalah];
                tmp[index].cek = tmp[index].cek == 0 ? 1 : 0;
                setMasalah(tmp);
              }} style={{
                padding: 10,
                borderWidth: 1,
                borderColor: item.cek > 0 ? colors.primary : colors.border,
                marginVertical: 2,
                borderRadius: 12,
                flexDirection: 'row',
                alignItems: 'center'
              }}>
                <Text style={{
                  flex: 1,
                  fontFamily: fonts.secondary[600],
                  fontSize: 12,
                  color: item.cek > 0 ? colors.primary : colors.black,
                }}>{item.nama}</Text>
                <Icon type='ionicon' name='checkmark-circle' color={item.cek > 0 ? colors.primary : colors.white} />
              </TouchableOpacity>
            )
          }} />

          {masalah.filter(i => i.cek > 0 && i.nama == 'Lainnya').length > 0 &&

            <MyInput label="Lainnya" placeholder="Masukan Masalah lainnya" onChangeText={x => {
              setLainnya(x)
            }} />
          }

          <Text style={{
            marginTop: 10,
            fontFamily: fonts.secondary[800],
            color: colors.primary,
            fontSize: 20,
            textAlign: 'center',
            borderBottomWidth: 2,
            borderColor: colors.border,
            paddingBottom: 10,
            marginBottom: 10,
          }}>Panggil Teknisi</Text>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: 14,
            color: colors.primary,
            marginBottom: 10,
          }}>Pilihan Tanggal</Text>
          <Calendar
            scrollable
            maxDate={moment().add(7, 'day').format('YYYY-MM-DD')}
            minDate={moment().add(1, 'day').format('YYYY-MM-DD')}
            disableAllTouchEventsForDisabledDays={true}
            theme={{

              textDayHeaderFontFamily: fonts.secondary[600],
              textMonthFontFamily: fonts.secondary[600],
              textDayFontFamily: fonts.secondary[600],
              textDayFontSize: 14,
              arrowColor: colors.primary,
              selectedDayBackgroundColor: colors.primary,
              todayTextColor: colors.primary

            }}
            onDayPress={x => {
              console.log(x)
              setKirim({
                ...kirim,
                tanggal: x.dateString
              })
            }}
            markedDates={{
              [kirim.tanggal]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
            }}

          />
          <MyGap jarak={20} />
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: 14,
            color: colors.primary,
            marginBottom: 10,
          }}>Pilih Nama Teknisi</Text>
          <FlatList data={teknisi} renderItem={({ item, index }) => {
            return (
              <TouchableOpacity onPress={() => {
                setKirim({
                  id_teknisi: item.id,
                  telepon: item.telepon
                })
              }} style={{
                padding: 10,
                borderWidth: 1,
                borderRadius: 12,
                backgroundColor: kirim.id_teknisi == item.id ? colors.primary : colors.white,
                borderColor: colors.border,
                marginVertical: 10,
                flexDirection: 'row'
              }}>
                <Image source={{
                  uri: item.foto_user
                }} style={{
                  height: 100,
                  width: 100,
                  resizeMode: 'cover',
                  borderRadius: 12,
                }} />
                <View style={{
                  flex: 1,
                  paddingLeft: 10,
                }}>
                  <MyList label="Nama" value={item.nama_lengkap} />
                  <MyList label="Alamat" value={item.alamat} />
                  <MyList label="Email" value={item.email} />
                  <MyList label="Telepon" value={item.telepon} />
                </View>
              </TouchableOpacity>
            )
          }} />
          <MyGap jarak={20} />
          <MyButton onPress={sendServer} title="Simpan" />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
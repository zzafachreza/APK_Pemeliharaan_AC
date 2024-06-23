import { View, Text, ScrollView, TouchableOpacity, Image, TouchableNativeFeedback, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { MyHeader } from '../../components';
import { colors, fonts } from '../../utils';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { apiURL, getData } from '../../utils/localStorage';
import moment from 'moment';
import { Icon } from 'react-native-elements';

export default function TeknisiRiwayatPemesanan({ navigation, route }) {

  const user = route.params;

  const backPage = () => {
    navigation.navigate('MainApp');
  };

  const [data, setData] = useState([]);

  const isFocus = useIsFocused();

  useEffect(() => {
    if (isFocus) {
      __getTransaction();
    }
  }, [isFocus]);

  const __getTransaction = () => {
    getData('user').then(uu => {
      axios.post(apiURL + 'pemesanan', {
        input_by: uu.id
      }).then(res => {
        console.log(res.data);
        setData(res.data);
      })
    })
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
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* HEADER */}
      <MyHeader onPress={backPage} judul="Riwayat Pemesanan" />

      <View style={{
        flex: 1,
        padding: 20,
      }}>
        <FlatList data={data} renderItem={({ item, index }) => {
          return (
            <View style={{
              borderWidth: 1,
              padding: 10,
              marginVertical: 10,
              borderRadius: 12,
              borderColor: colors.border,
            }}>
              <MyList label="Waktu" value={moment(item.tanggal).format('dddd, DD MMMM YYYY')} />
              <MyList label="Nama" value={item.nama_lengkap} />
              <MyList label="Email" value={item.email} />
              <MyList label="Telepon" value={item.telepon} />
              <MyList label="Alamat" value={item.alamat} />
              <MyList label="Masalah AC" value={item.masalah} />
              <MyList label="Status" value={item.status} />
              <TouchableOpacity onPress={() => navigation.navigate('EditPemesanan', item)} style={{
                width: 50,
                height: 30,
                alignSelf: 'flex-end',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Icon type='ionicon' name='create-outline' color={colors.primary} />
              </TouchableOpacity>
            </View>
          )
        }} />
      </View>


      <TouchableNativeFeedback onPress={() => navigation.navigate('PemesananServiceACTeknisi', user)}>
        <View style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
        }}>
          <View>
            <Image source={require('../../assets/tomboltambah.png')} style={{
              width: 62, height: 62
            }} />
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

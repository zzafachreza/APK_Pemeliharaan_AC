import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { MyGap, MyHeader, MyPicker } from '../../components';
import { colors, fonts } from '../../utils';
import moment from 'moment';
import { showMessage } from 'react-native-flash-message';
import axios from 'axios';
import { apiURL } from '../../utils/localStorage';

export default function PenggunaanAC({ navigation, route }) {
  const backPage = () => {
    navigation.goBack();
  }
  const [selectedService, setSelectedService] = useState('1 Minggu yang lalu');
  const [selectedUsage, setSelectedUsage] = useState('1-4jam');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceData = [
    { label: 'Pilih waktu service terakhir', value: null },
    { label: '1 Minggu yang lalu', value: '1 Minggu yang lalu' },
    { label: '2 Minggu yang lalu', value: '2 Minggu yang lalu' },
    { label: '3 Minggu yang lalu', value: '3 Minggu yang lalu' },
    { label: '1 Bulan yang lalu', value: '1 Bulan yang lalu' },
    { label: '2 Bulan yang lalu', value: '2 Bulan yang lalu' },
    { label: '3 Bulan yang lalu', value: '3 Bulan yang lalu' },
    { label: '4 Bulan yang lalu', value: '4 Bulan yang lalu' },
    { label: '5 Bulan yang lalu', value: '5 Bulan yang lalu' },
    { label: '6 Bulan yang lalu', value: '6 Bulan yang lalu' },
    { label: 'Belum Pernah', value: 'Belum Pernah' },
  ];

  const usageData = [
    { label: 'Pilih rata-rata penggunaan', value: null },
    { label: '1 - 4 Jam', value: '1-4jam' },
    { label: '4 - 8 Jam', value: '4-8jam' },
    { label: '8 - 12 Jam', value: '8-12jam' },
    { label: '> 24 Jam', value: '>24jam' },
  ];

  const showUsagePicker = selectedService !== '6 Bulan yang lalu';


  const [kirim, setKirim] = useState({
    fid_user: route.params.id,
    terakhir_service: selectedService,
    rata2_penggunaan: selectedUsage,

  });



  const handleSubmit = () => {

    let KIRIM = {};

    if (selectedService.toString().length == 0 || selectedUsage.toString().length == 0) {
      showMessage({
        type: 'danger',
        message: 'Terakhir service dan rata-rata penggunaan AC wajib di pilih !'
      })
    } else {
      if (selectedService == '1 Minggu yang lalu' && selectedUsage == '1-4jam') {
        let bulan = 5;
        let hari = 23;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari - 7, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '1 Minggu yang lalu' && selectedUsage == '4-8jam') {
        let bulan = 4;
        let hari = 23;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari - 7, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '1 Minggu yang lalu' && selectedUsage == '8-12jam') {
        let bulan = 3;
        let hari = 23;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari - 7, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '1 Minggu yang lalu' && selectedUsage == '>24jam') {
        let bulan = 2;
        let hari = 23;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari - 7, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '2 Minggu yang lalu' && selectedUsage == '1-4jam') {
        let bulan = 5;
        let hari = 16;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari - 7, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '2 Minggu yang lalu' && selectedUsage == '4-8jam') {
        let bulan = 4;
        let hari = 16;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari - 7, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '2 Minggu yang lalu' && selectedUsage == '8-12jam') {
        let bulan = 3;
        let hari = 16;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari - 7, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '2 Minggu yang lalu' && selectedUsage == '>24jam') {
        let bulan = 2;
        let hari = 16;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari - 7, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '3 Minggu yang lalu' && selectedUsage == '1-4jam') {
        let bulan = 5;
        let hari = 9;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari - 7, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '3 Minggu yang lalu' && selectedUsage == '4-8jam') {
        let bulan = 4;
        let hari = 9;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari - 7, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '3 Minggu yang lalu' && selectedUsage == '8-12jam') {
        let bulan = 3;
        let hari = 9;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari - 7, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '3 Minggu yang lalu' && selectedUsage == '>24jam') {
        let bulan = 2;
        let hari = 9;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari - 7, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '1 Bulan yang lalu' && selectedUsage == '1-4jam') {
        let bulan = 5;
        let hari = 0;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari - 7, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '1 Bulan yang lalu' && selectedUsage == '4-8jam') {
        let bulan = 4;
        let hari = 0;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari - 7, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '1 Bulan yang lalu' && selectedUsage == '8-12jam') {
        let bulan = 3;
        let hari = 0;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari - 7, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '1 Bulan yang lalu' && selectedUsage == '>24jam') {
        let bulan = 2;
        let hari = 0;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari - 7, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '2 Bulan yang lalu' && selectedUsage == '1-4jam') {
        let bulan = 4;
        let hari = 0;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari - 7, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '2 Bulan yang lalu' && selectedUsage == '4-8jam') {
        let bulan = 3;
        let hari = 0;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari - 7, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '2 Bulan yang lalu' && selectedUsage == '8-12jam') {
        let bulan = 2;
        let hari = 0;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari - 7, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '2 Bulan yang lalu' && selectedUsage == '>24jam') {
        let bulan = 1;
        let hari = 0;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari - 7, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '3 Bulan yang lalu' && selectedUsage == '1-4jam') {
        let bulan = 3;
        let hari = 0;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(bulan > 0 ? hari - 7 : 0, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '3 Bulan yang lalu' && selectedUsage == '4-8jam') {
        let bulan = 2;
        let hari = 0;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(bulan > 0 ? hari - 7 : 0, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '3 Bulan yang lalu' && selectedUsage == '8-12jam') {
        let bulan = 1;
        let hari = 0;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(bulan > 0 ? hari - 7 : 0, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '3 Bulan yang lalu' && selectedUsage == '>24jam') {
        let bulan = 0;
        let hari = 0;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(bulan > 0 ? hari - 7 : 0, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '4 Bulan yang lalu' && selectedUsage == '1-4jam') {
        let bulan = 2;
        let hari = 0;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(bulan > 0 ? hari - 7 : 0, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '4 Bulan yang lalu' && selectedUsage == '4-8jam') {
        let bulan = 1;
        let hari = 0;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(bulan > 0 ? hari - 7 : 0, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '4 Bulan yang lalu' && selectedUsage == '8-12jam') {
        let bulan = 0;
        let hari = 0;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(bulan > 0 ? hari - 7 : 0, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '4 Bulan yang lalu' && selectedUsage == '>24jam') {
        let bulan = 0;
        let hari = 0;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(bulan > 0 ? hari - 7 : 0, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '5 Bulan yang lalu' && selectedUsage == '1-4jam') {
        let bulan = 1;
        let hari = 0;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(bulan > 0 ? hari - 7 : 0, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '5 Bulan yang lalu' && selectedUsage == '4-8jam') {
        let bulan = 0;
        let hari = 0;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(bulan > 0 ? hari - 7 : 0, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '5 Bulan yang lalu' && selectedUsage == '8-12jam') {
        let bulan = 0;
        let hari = 0;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(bulan > 0 ? hari - 7 : 0, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '5 Bulan yang lalu' && selectedUsage == '>24jam') {
        let bulan = 0;
        let hari = 0;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(bulan > 0 ? hari - 7 : 0, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '6 Bulan yang lalu' && selectedUsage == '1-4jam') {
        let bulan = 0;
        let hari = 0;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(bulan > 0 ? hari - 7 : 0, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '6 Bulan yang lalu' && selectedUsage == '4-8jam') {
        let bulan = 0;
        let hari = 0;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(bulan > 0 ? hari - 7 : 0, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '6 Bulan yang lalu' && selectedUsage == '8-12jam') {
        let bulan = 0;
        let hari = 0;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(bulan > 0 ? hari - 7 : 0, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == '6 Bulan yang lalu' && selectedUsage == '>24jam') {
        let bulan = 0;
        let hari = 0;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(bulan > 0 ? hari - 7 : 0, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == 'Belum Pernah' && selectedUsage == '1-4jam') {
        let bulan = 5;
        let hari = 23;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(bulan > 0 ? hari - 7 : 0, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == 'Belum Pernah' && selectedUsage == '4-8jam') {
        let bulan = 4;
        let hari = 23;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(bulan > 0 ? hari - 7 : 0, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == 'Belum Pernah' && selectedUsage == '8-12jam') {
        let bulan = 3;
        let hari = 23;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(bulan > 0 ? hari - 7 : 0, 'day').format('YYYY-MM-DD'),
        }
      } else if (selectedService == 'Belum Pernah' && selectedUsage == '>24jam') {
        let bulan = 2;
        let hari = 23;
        KIRIM = {
          ...kirim,
          informasi: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD') == moment().format('YYYY-MM-DD') ? 'Segera panggil Teknisi untuk service AC' : moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('dddd, DD MMMM YYYY'),
          bulan: bulan,
          hari: hari,
          terakhir_service: selectedService,
          rata2_penggunaan: selectedUsage,
          tanggal_service: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(hari, 'day').format('YYYY-MM-DD'),
          tanggal_alarm: moment(moment().add(bulan, 'M').format('YYYY-MM-DD')).add(bulan > 0 ? hari - 7 : 0, 'day').format('YYYY-MM-DD'),
        }
      }


      console.log(KIRIM);
      setKirim(KIRIM);

      // axios.post(apiURL + 'penggunaan_add', KIRIM).then(res => {
      //   console.log(res.data);
      setIsSubmitted(true);
      // })

    }






  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* HEADER */}
      <MyHeader onPress={backPage} judul="Penggunaan AC" />

      <ScrollView>
        <View style={{ padding: 10 }}>
          <View>
            <View style={{ marginBottom: -10 }}>
              <Text style={{ fontSize: 15, fontFamily: fonts.primary[600], color: colors.primary }}>
                Terakhir Service
              </Text>
            </View>
            <MyPicker
              value={selectedService}
              onValueChange={(itemValue) => {
                setSelectedService(itemValue);
                if (itemValue === '6 Bulan yang lalu') {
                  setSelectedUsage('1-4jam');
                }
              }}
              data={serviceData}
            />
          </View>

          <MyGap jarak={20} />

          {showUsagePicker && (
            <View>
              <View style={{ marginBottom: -10 }}>
                <Text style={{ fontSize: 15, fontFamily: fonts.primary[600], color: colors.primary }}>
                  Rata-rata Penggunaan AC
                </Text>
              </View>
              <MyPicker
                value={selectedUsage}
                onValueChange={(itemValue) => setSelectedUsage(itemValue)}
                data={usageData}
              />
            </View>
          )}

          {/* Tombol akan terlihat hanya jika kedua picker sudah dipilih atau jika '6 Bulan yang lalu' dipilih */}

          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              padding: 15,
              borderRadius: 10,
              alignItems: 'center',
              marginTop: 20,
            }}
            onPress={handleSubmit}
          >
            <Text style={{ color: 'white', fontSize: 15, fontFamily: fonts.primary[600] }}>
              Submit
            </Text>
          </TouchableOpacity>


          {/* Informasi tambahan yang ditampilkan setelah submit */}
          {isSubmitted && (
            <View style={{ marginTop: 20, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 10, borderWidth: 0.5 }}>
              <View style={{ backgroundColor: colors.primary, borderRadius: 10, padding: 10 }}>
                <Text style={{ fontSize: 20, fontFamily: fonts.primary[600], color: colors.white, textAlign: 'center' }}>
                  Info Servis Selanjutnya
                </Text>
              </View>
              {selectedService === '6 Bulan yang lalu' ? (
                <Text style={{ fontSize: 18, fontFamily: fonts.primary[600], color: colors.primary, marginTop: 10, textAlign: 'center' }}>
                  Segera Panggil Teknisi untuk Servis AC
                </Text>
              ) : (
                <>
                  <Text style={{ fontSize: 18, fontFamily: fonts.primary[600], color: colors.primary, marginTop: 10, textAlign: 'center' }}>
                    Servis {kirim.bulan} bulan {kirim.hari} hari lagi
                  </Text>
                  <Text style={{ fontSize: 14, fontFamily: fonts.primary[400], color: '#999', marginTop: 5, textAlign: 'center' }}>
                    pada
                  </Text>
                  <Text style={{ fontSize: 20, fontFamily: fonts.primary[600], color: colors.primary, marginTop: 5, textAlign: 'center' }}>
                    {kirim.informasi}
                  </Text>
                </>
              )}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

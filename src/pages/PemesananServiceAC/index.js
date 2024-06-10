import { View, Text, ScrollView, TouchableOpacity, TextInput, Modal, Image, Picker } from 'react-native';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { MyGap, MyHeader } from '../../components';
import { colors, fonts } from '../../utils';

export default function PemesananServiceACTeknisi({ navigation }) {
  const [date, setDate] = useState(null);
  const [tempDate, setTempDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [status, setStatus] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [issue, setIssue] = useState('');

  const backPage = () => {
    navigation.goBack();
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDate(tempDate);  // Set the date when hiding the date picker
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    setTempDate(selectedDate);  // Update the temporary date state
  };

  const formatDate = (date) => {
    if (!date) return 'Pilih waktu';
    const months = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* HEADER */}
      <MyHeader onPress={backPage} judul="Pemesanan Service AC" />

      <ScrollView>
        <View style={{ padding: 10 }}>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 16, color: colors.primary }}>Nama Customer:</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#C4C4C4',
                borderRadius: 10,
                padding: 10,
                fontFamily: fonts.primary[400],
                fontSize: 14,
                color: colors.black,
                marginTop: 10,
              }}
              placeholder="Isi nama customer"
              value={customerName}
              onChangeText={setCustomerName}
            />
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 16, color: colors.primary }}>Email:</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#C4C4C4',
                borderRadius: 10,
                padding: 10,
                fontFamily: fonts.primary[400],
                fontSize: 14,
                color: colors.black,
                marginTop: 10,
              }}
              placeholder="Isi email"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 16, color: colors.primary }}>Telepon:</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#C4C4C4',
                borderRadius: 10,
                padding: 10,
                fontFamily: fonts.primary[400],
                fontSize: 14,
                color: colors.black,
                marginTop: 10,
              }}
              placeholder="Isi telepon"
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 16, color: colors.primary }}>Alamat:</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#C4C4C4',
                borderRadius: 10,
                padding: 10,
                fontFamily: fonts.primary[400],
                fontSize: 14,
                color: colors.black,
                marginTop: 10,
              }}
              placeholder="Isi alamat"
              value={address}
              onChangeText={setAddress}
            />
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 16, color: colors.primary }}>Masalah AC:</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: '#C4C4C4',
                borderRadius: 10,
                padding: 10,
                fontFamily: fonts.primary[400],
                fontSize: 14,
                color: colors.black,
                marginTop: 10,
              }}
              placeholder="Isi masalah AC"
              value={issue}
              onChangeText={setIssue}
            />
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 16, color: colors.primary }}>Waktu:</Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                borderWidth: 1,
                borderColor: '#C4C4C4',
                borderRadius: 10,
                marginTop: 10,
              }}
              onPress={showDatePicker}
            >
              <Text style={{ fontFamily: fonts.primary[400], fontSize: 14, color: colors.black, flex: 1 }}>
                {formatDate(date)}
              </Text>
              <Image source={require('../../assets/calendar-icon.png')} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 16, color: colors.primary }}>Status Pemesanan:</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#C4C4C4',
                borderRadius: 10,
                marginTop: 10,
                paddingLeft: 10,
              }}
            >
              <Picker
                selectedValue={status}
                onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
                style={{ height: 50, width: '100%' }}
              >
                <Picker.Item label="Menunggu Servis" value="Menunggu_servis" />
                <Picker.Item label="Sedang Berlansung" value="sedang_berlansung" />
                <Picker.Item label="Selesai" value="selesai" />
                <Picker.Item label="Pesanan Batal" value="pesanan_batal" />
              </Picker>
            </View>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              padding: 15,
              borderRadius: 10,
              alignItems: 'center',
              marginTop: 20,
            }}
            onPress={() => {
              // Action ketika tombol ditekan
              console.log('Simpan ditekan');
            }}
          >
            <Text style={{ color: 'white', fontSize: 15, fontFamily: fonts.primary[600] }}>
              Simpan
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal
        transparent={true}
        visible={isDatePickerVisible}
        onRequestClose={hideDatePicker}
      >
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}>
          <View style={{
            width: 300,
            padding: 20,
            backgroundColor: 'white',
            borderRadius: 10,
            alignItems: 'center'
          }}>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 18, color: colors.primary }}>
              Pilih Tanggal
            </Text>
            <DatePicker
              date={tempDate}
              onDateChange={handleConfirm}
              mode="date"
              textColor="black"
              style={{ marginTop: 20 }}
            />
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: colors.primary,
                  borderRadius: 10,
                  marginHorizontal: 10
                }}
                onPress={hideDatePicker}
              >
                <Text style={{ color: 'white', fontFamily: fonts.primary[600] }}>Tutup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

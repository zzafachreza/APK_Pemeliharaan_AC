import { View, Text, ScrollView, TouchableOpacity, TextInput, Modal, Image } from 'react-native';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { MyGap, MyHeader } from '../../components';
import { colors, fonts } from '../../utils';

export default function PemesananServiceAC({ navigation }) {
  const [selectedIssues, setSelectedIssues] = useState([]);
  const [otherIssue, setOtherIssue] = useState('');
  const [date, setDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedTechnician, setSelectedTechnician] = useState(null);

  const issues = [
    { label: 'Tidak Dingin', value: 'tidak_dingin' },
    { label: 'Bocor', value: 'bocor' },
    { label: 'Berbau', value: 'berbau' },
    { label: 'Tidak Ada', value: 'tidak_ada' },
    { label: 'Lainnya', value: 'lainnya' },
  ];

  const technicians = [
    {
      name: 'Rudi Iryawan',
      address: 'Bandung',
      email: 'rudiiryawan@gmail.com',
      phone: '089665476664',
      image: require('../../assets/rudi.png'), // Update the path to the correct image
    },
    {
      name: 'Ridwan Kamil',
      address: 'Bandung',
      email: 'agusp@itian@gmail.com',
      phone: '0896656548632',
      image: require('../../assets/ridwan.png'), // Update the path to the correct image
    },
    {
      name: 'Arka Syahputra',
      address: 'Bandung',
      email: 'arkas@gmail.com',
      phone: '0896567876664',
      image: require('../../assets/arka.png'), // Update the path to the correct image
    },
  ];

  const backPage = () => {
    navigation.goBack();
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDate((prevDate) => prevDate || new Date());
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    setDate(selectedDate);
  };

  const toggleIssueSelection = (value) => {
    setSelectedIssues((prevSelectedIssues) => {
      if (prevSelectedIssues.includes(value)) {
        return prevSelectedIssues.filter(issue => issue !== value);
      } else {
        return [...prevSelectedIssues, value];
      }
    });
  };

  const formatDate = (date) => {
    const months = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const isFormComplete = () => {
    return selectedIssues.length > 0 && date && selectedTechnician && (selectedIssues.includes('lainnya') ? otherIssue.trim() !== '' : true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* HEADER */}
      <MyHeader onPress={backPage} judul="Pemesanan Service AC" />

      <ScrollView>
        <View style={{ padding: 10 }}>
          <View style={{ padding: 10 }}>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 18, color: colors.primary, textAlign: 'center' }}>
              Masalah AC
            </Text>
            <View style={{ padding: 0.5, backgroundColor: '#C4C4C4', borderRadius: 10, marginVertical: 10 }} />
            {/* RADIO BUTTON MEMILIH */}
            <View>
              {issues.map((issue, index) => (
                <TouchableOpacity
                  key={index}
                  style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}
                  onPress={() => toggleIssueSelection(issue.value)}
                >
                  <View
                    style={{
                      height: 24,
                      width: 24,
                      borderRadius: 5,
                      borderWidth: 2,
                      borderColor: '#C4C4C4',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 10,
                    }}
                  >
                    {selectedIssues.includes(issue.value) && (
                      <View
                        style={{
                          height: 12,
                          width: 12,
                          borderRadius: 6,
                          backgroundColor: colors.primary,
                        }}
                      />
                    )}
                  </View>
                  <Text style={{ fontFamily: fonts.primary[600], fontSize: 14, color: colors.primary }}>
                    {issue.label}
                  </Text>
                </TouchableOpacity>
              ))}
              {selectedIssues.includes('lainnya') && (
                <View style={{ marginTop: 20 }}>
                  <Text style={{ fontFamily: fonts.primary[600], fontSize: 14, color: colors.primary, marginBottom: 10 }}>
                    Jelaskan Masalah AC Anda
                  </Text>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: '#C4C4C4',
                      borderRadius: 10,
                      padding: 10,
                      fontFamily: fonts.primary[400],
                      fontSize: 12,
                      color: colors.black,
                    }}
                    multiline
                    placeholder="Masukkan detail masalah AC Anda"
                    value={otherIssue}
                    onChangeText={setOtherIssue}
                  />
                </View>
              )}
            </View>
          </View>
          {/* END MASALAH AC */}

          <View style={{ padding: 10 }}>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 18, color: colors.primary, textAlign: 'center' }}>
              Panggil Teknisi
            </Text>
            <View style={{ padding: 0.5, backgroundColor: '#C4C4C4', borderRadius: 10, marginVertical: 10 }} />

            <View>
              {/* PICKER MASUKAN TANGGAL */}
              <View>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 15, color: colors.primary }}>Pilihan Tanggal</Text>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                    borderWidth: 1,
                    borderColor: '#C4C4C4',
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                  onPress={showDatePicker}
                >
                  <Text style={{ fontFamily: fonts.primary[600], fontSize: 14, color: colors.primary, flex: 1 }}>
                    {date ? formatDate(date) : '-- -- ----'}
                  </Text>
                  <Text style={{ fontFamily: fonts.primary[600], fontSize: 14, color: colors.primary }}>
                    Pilih Tanggal
                  </Text>
                </TouchableOpacity>
              </View>

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
                      date={date || new Date()}
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

              <MyGap jarak={10} />

              {/* PICKER MEMILIH NAMA TEKNISI */}
              <View>
                <Text style={{ fontFamily: fonts.primary[600], fontSize: 15, color: colors.primary }}>Pilih Nama Teknisi</Text>
                {technicians.map((technician, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 10,
                      padding: 10,
                      borderWidth: 1,
                      borderColor: selectedTechnician === technician.name ? colors.primary : '#C4C4C4',
                      borderRadius: 10,
                    }}
                    onPress={() => setSelectedTechnician(technician.name)}
                  >
                    <View
                      style={{
                        height: 24,
                        width: 24,
                        borderRadius: 5,
                        borderWidth: 2,
                        borderColor: selectedTechnician === technician.name ? colors.primary : '#C4C4C4',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 10,
                      }}
                    >
                      {selectedTechnician === technician.name && (
                        <View
                          style={{
                            height: 12,
                            width: 12,
                            borderRadius: 6,
                            backgroundColor: colors.primary,
                          }}
                        />
                      )}
                    </View>
                    <Image source={technician.image} style={{ width: 51.18, height: 71, borderRadius: 5, marginRight: 10 }} />
                    <View>
                      <Text style={{ fontFamily: fonts.primary[600], fontSize: 14, color: colors.primary }}>Nama: {technician.name}</Text>
                      <Text style={{ fontFamily: fonts.primary[400], fontSize: 12, color: colors.primary }}>Alamat: {technician.address}</Text>
                      <Text style={{ fontFamily: fonts.primary[400], fontSize: 12, color: colors.primary }}>Email: {technician.email}</Text>
                      <Text style={{ fontFamily: fonts.primary[400], fontSize: 12, color: colors.primary }}>Telepon: {technician.phone}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          {/* Tombol Pesan */}
          {isFormComplete() && (
            <View style={{ padding: 10 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.primary,
                  padding: 15,
                  borderRadius: 10,
                  alignItems: 'center',
                  marginTop: 20,
                }}
                onPress={() => {
                  navigation.navigate('PemesananServiceACWA')
                  console.log('Pesan ditekan');
                }}
              >
                <Text style={{ color: 'white', fontSize: 15, fontFamily: fonts.primary[600] }}>
                  Pesan
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

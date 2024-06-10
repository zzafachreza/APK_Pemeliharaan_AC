import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { MyGap, MyHeader, MyPicker } from '../../components';
import { colors, fonts } from '../../utils';

export default function PenggunaanAC({ navigation }) {
 const backPage = () => {
    navigation.goBack();
 }
  const [selectedService, setSelectedService] = useState(null);
  const [selectedUsage, setSelectedUsage] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceData = [
    { label: 'Pilih waktu service terakhir', value: null },
    { label: '1 Minggu yang lalu', value: '1mingguyanglalu' },
    { label: '2 Minggu yang lalu', value: '2mingguyanglalu' },
    { label: '3 Minggu yang lalu', value: '3mingguyanglalu' },
    { label: '1 Bulan yang lalu', value: '1bulanyanglalu' },
    { label: '2 Bulan yang lalu', value: '2bulanyanglalu' },
    { label: '3 Bulan yang lalu', value: '3bulanyanglalu' },
    { label: '4 Bulan yang lalu', value: '4bulanyanglalu' },
    { label: '5 Bulan yang lalu', value: '5bulanyanglalu' },
    { label: '6 Bulan yang lalu', value: '6bulanyanglalu' },
    { label: 'Belum Pernah', value: 'belumpernah' },
  ];

  const usageData = [
    { label: 'Pilih rata-rata penggunaan', value: null },
    { label: '1 - 4 Jam', value: '1-4jam' },
    { label: '4 - 8 Jam', value: '4-8jam' },
    { label: '8 - 12 Jam', value: '8-12jam' },
    { label: '> 24 Jam', value: '>24jam' },
  ];

  const showUsagePicker = selectedService !== '6bulanyanglalu';

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* HEADER */}
      <MyHeader  onPress={backPage} judul="Penggunaan AC" />

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
                if (itemValue === '6bulanyanglalu') {
                  setSelectedUsage(null);
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
          {selectedService && (selectedUsage || selectedService === '6bulanyanglalu') && (
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
          )}

          {/* Informasi tambahan yang ditampilkan setelah submit */}
          {isSubmitted && (
            <View style={{ marginTop: 20, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 10, borderWidth: 0.5 }}>
              <View style={{ backgroundColor: colors.primary, borderRadius: 10, padding: 10 }}>
                <Text style={{ fontSize: 20, fontFamily: fonts.primary[600], color: colors.white, textAlign: 'center' }}>
                  Info Servis Selanjutnya
                </Text>
              </View>
              {selectedService === '6bulanyanglalu' ? (
                <Text style={{ fontSize: 18, fontFamily: fonts.primary[600], color: colors.primary, marginTop: 10, textAlign: 'center' }}>
                  Segera Panggil Teknisi untuk Servis AC
                </Text>
              ) : (
                <>
                  <Text style={{ fontSize: 18, fontFamily: fonts.primary[600], color: colors.primary, marginTop: 10, textAlign: 'center' }}>
                    Servis 5 bulan 23 hari lagi
                  </Text>
                  <Text style={{ fontSize: 14, fontFamily: fonts.primary[400], color: '#999', marginTop: 5, textAlign: 'center' }}>
                    pada
                  </Text>
                  <Text style={{ fontSize: 20, fontFamily: fonts.primary[600], color: colors.primary, marginTop: 5, textAlign: 'center' }}>
                    25 Januari 2025
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

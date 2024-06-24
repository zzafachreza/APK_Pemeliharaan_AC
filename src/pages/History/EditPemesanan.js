import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { apiURL } from '../../utils/localStorage';
import moment from 'moment';
import { colors, fonts } from '../../utils';
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput, MyPicker } from '../../components';
import { showMessage } from 'react-native-flash-message';

export default function EditPemesanan({ navigation, route }) {

    const [kirim, setKirim] = useState(route.params)


    const sendServer = () => {

        axios.post(apiURL + 'pemesanan_edit', kirim).then(res => {
            console.log(res.data);
            if (res.data == 200) {
                showMessage({
                    message: 'Pemesanan Service AC berhasil di update !',
                    type: "success"
                });
                navigation.goBack();
            }
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

                    <View style={{
                        borderWidth: 1,
                        padding: 10,
                        marginVertical: 10,
                        borderRadius: 12,
                        borderColor: colors.border,
                    }}>
                        <MyList label="Waktu" value={moment(kirim.tanggal).format('dddd, DD MMMM YYYY')} />
                        <MyList label="Nama" value={kirim.nama_lengkap} />
                        <MyList label="Email" value={kirim.email} />
                        <MyList label="Telepon" value={kirim.telepon} />
                        <MyList label="Alamat" value={kirim.alamat} />
                        <MyList label="Masalah AC" value={kirim.masalah} />

                    </View>

                    <MyPicker label="Status Pemesanan" data={[
                        { label: 'Menunggu Servis', value: 'Menunggu Servis' },
                        { label: 'Sedang Berlangsung', value: 'Sedang Berlangsung' },
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
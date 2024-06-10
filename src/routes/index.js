import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  Register,
  Account,
  AccountEdit,
  Konten,
  TanyaJawab,
  Notifikasi,
  Artikel,
  ArtikelDetail,
  Video,
  VideoDetail,
  Resep,
  ResepDetail,
  AsupanMpasi,
  AsupanAsi,
  StatusGizi,
  StatusGiziHasil,
  KursionerVark,
  GayaBelajarVisual,
  GayaBelajarAudio,
  GayaBelajarReading,
  

  GayaBelajarKinaesthetic,
  Diagnosa2,
  Periksagigimu,
  Gigilubang,
  TumpatanGigi,
  PaketUmrah,
  Pendaftaran,
  UpdateSeat,
  Pembayaran,
  Saldoku,
  DataJamaah,
  DataJamaah2,
  Royalti,
  MakananBalita,
  ResepMakananBalita,
  MakananIbuhamil,
  ResepMakananIbuHamil,
  konsultasionline,
  ProfileAplikasi,
  IMTCalculator,
  HasilIMTCalculator,
  HomeAnemia,
  WhatsIsAnemia,
  AnemiaCouses,
  AnemiaHelt,
  ArtikelLainnya,
  MasukSebagai,
  LoginTeknisi,
  RegisterTeknisi,
  PenggunaanAC,
  PemesananServiceAC,
  PemesananServiceACWA,
  RiwayatPemesanan,
  TeknisiHome,
  TeknisiRiwayatPemesanan,
  PemesananServiceACTeknisi,
  AccountTeknisi,


} from '../pages';
import { colors } from '../utils';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator, TeknisiBottomNavigator } from '../components';
import Diagnosa from '../pages/Diagnosa';
import TypeAnemia from '../pages/Anemia/typeanemia';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator initialRouteName='Produk' tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="RiwayatPemesanan" component={RiwayatPemesanan} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

const TeknisiMainApp = () => {
  return(
    <Tab.Navigator initialRouteName='' tabBar={props => <TeknisiBottomNavigator {...props}/>}>
    <Tab.Screen name="TeknisiHome" component={TeknisiHome}/>
    <Tab.Screen name="AccountTeknisi" component={AccountTeknisi}/>
    </Tab.Navigator>
  )
}

export default function Router() {
  return (
    <Stack.Navigator initialRouteName=''>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />



      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          // headerTitle: 'Detail',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          headerTitle: 'Daftar Pengguna',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

<Stack.Screen
        name="MasukSebagai"
        component={MasukSebagai}
        options={{
          headerShown: false,

        }}
      />


      
<Stack.Screen
        name="LoginTeknisi"
        component={LoginTeknisi}
        options={{
          headerShown: false,

        }}
      />


<Stack.Screen
        name="RegisterTeknisi"
        component={RegisterTeknisi}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="PenggunaanAC"
        component={PenggunaanAC}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="PemesananServiceAC"
        component={PemesananServiceAC}
        options={{
          headerShown: false,

        }}
      />



<Stack.Screen
        name="PemesananServiceACWA"
        component={PemesananServiceACWA}
        options={{
          headerShown: false,

        }}
      />

<Stack.Screen
        name="RiwayatPemesanan"
        component={MainApp}
        options={{
          headerShown: false,

        }}
      />



<Stack.Screen
        name="TeknisiHome"
        component={TeknisiMainApp}
        options={{
          headerShown: false,

        }}
      />


      
<Stack.Screen
        name="PemesananServiceACTeknisi"
        component={PemesananServiceACTeknisi}
        options={{
          headerShown: false,

        }}
      />





<Stack.Screen
        name="AccountTeknisi"
        component={TeknisiMainApp}
        options={{
          headerShown: false,

        }}
      />




      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,

        }}
      />
      <Stack.Screen
        name="AccountEdit"
        component={AccountEdit}
        options={{
          headerShown: false,
          headerTitle: 'Edit Profile',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />


      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="TeknisiRiwayatPemesanan"
        component={TeknisiRiwayatPemesanan}
        options={{
          headerShown: false,
        }}
      />

    













    </Stack.Navigator>
  );
}

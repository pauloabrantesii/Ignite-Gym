import { StyleSheet,View, StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/loading/Loading';

import { THEME } from './src/theme/index';
import { Routes } from './src/routes';

export default function App() {
  const  [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold })



  return (
    // se a fonte for carregada mostra o Text se nao for, mostra uma view vazia // 
    <NativeBaseProvider theme={THEME}>
    <StatusBar 
    barStyle="light-content"
    backgroundColor="transparet"
    translucent
    />
       
       {fontsLoaded ? <Routes /> : <Loading /> }
      </NativeBaseProvider>
  );
}



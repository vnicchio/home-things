import { GluestackUIProvider, config, Box } from '@gluestack-ui/react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/routes';
import { AuthContextProvider } from './src/contexts/AuthContext';

export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <StatusBar 
        barStyle={"dark-content"}
        backgroundColor={"transparent"}
        translucent={true}
      />
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </GluestackUIProvider>
  );
}
import { GluestackUIProvider, config, Box } from '@gluestack-ui/react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/routes';

export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <StatusBar 
        barStyle={"dark-content"}
        backgroundColor={"transparent"}
        translucent={true}
      />
      <Routes />
    </GluestackUIProvider>
  );
}
// src/components/ScreenContainer.tsx
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export const ScreenContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <SafeAreaView style={styles.safe}>
    {children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
});

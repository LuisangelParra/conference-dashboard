import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Layout } from '../components';

export default function ReviewsScreen() {
  return (
    <Layout>
      <View style={styles.center}>
        {/* Aquí tu lista de feedback o análisis */}
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
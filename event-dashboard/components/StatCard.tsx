// src/components/StatCard.tsx
import React, { JSX } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Text } from 'react-native-paper';

export interface StatCardProps {
  icon: JSX.Element;
  label: string;
  value: number | string;
  borderColor: string;
  backgroundColor: string;
  iconBackgroundColor: string;
  style?: ViewStyle;
}

export const StatCard: React.FC<StatCardProps> = ({
  icon,
  label,
  value,
  borderColor,
  backgroundColor,
  iconBackgroundColor,
  style,
}) => (
  <View
    style={[
      styles.card,
      { borderLeftColor: borderColor, backgroundColor },
      style,
    ]}
  >
    <View style={[styles.iconWrapper, { backgroundColor: iconBackgroundColor }]}>
      {icon}
    </View>
    <View style={styles.textWrapper}>
      <Text variant="labelLarge" style={[styles.label, { color: borderColor }]}>
        {label}
      </Text>
      <Text variant="headlineSmall" style={styles.value}>
        {value}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 4,
    borderRadius: 8,
    padding: 16,
    minHeight: 120,
    flex: 1,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    marginLeft: 12,
  },
  label: {
    fontWeight: '500',
  },
  value: {
    fontWeight: '700',
    marginTop: 4,
    color: '#000000',  // forzamos texto negro
  },
});

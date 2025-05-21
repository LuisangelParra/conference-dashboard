import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Divider, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { spacing } from '../theme/spacing';

interface Props {
  labels: string[];  // ['Wed','Thu',…]
  data: number[];    // [10,15,…]
}

export const ReviewsOverTimeCard: React.FC<Props> = ({ labels, data }) => {
  const { colors } = useTheme();
  const max = Math.max(...data, 1);

  return (
    <Card style={styles.card}>
      {/* HEADER */}
      <View style={[styles.header, {
            paddingVertical: spacing.cardPadding
          }]}>
        <MaterialCommunityIcons name="chart-bar" size={20} color="#1E40AF" />
        <Text style={styles.headerText}>Reviews Over Time</Text>
      </View>

      {/* DIVIDER */}
      <Divider style={styles.divider} />

      {/* CHART */}
      <View style={styles.chartContainer}>
        <View style={styles.barsRow}>
          {data.map((value, i) => {
            const height = Math.max((value / max) * 256, 16); // mínimo 16px
            return (
              <View key={i} style={styles.barWrapper}>
                <View
                  style={[
                    styles.bar,
                    { height, backgroundColor: '#3B82F6' },
                  ]}
                />
                <Text style={styles.barLabel}>{labels[i]}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 2,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.horizontal/4,
    paddingVertical: spacing.vertical,
  },
  headerText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
    color: '#111827', // gray-900
  },
  divider: {
    backgroundColor: '#E5E7EB',
    height: 1,
  },
  chartContainer: {
    height: 256, // h-64
    paddingHorizontal: spacing.horizontal/4,
    paddingVertical: spacing.vertical,
  },
  barsRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    minHeight: 300, // h-4
  },
  barWrapper: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 4, // space-x-2 → 8px total gap
  },
  bar: {
    width: '100%',
    borderRadius: 4,
  },
  barLabel: {
    marginTop: 8,
    fontSize: 12,
    color: '#6B7280', // gray-500
  },
});

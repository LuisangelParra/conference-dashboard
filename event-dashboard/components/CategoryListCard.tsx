// src/components/CategoryListCard.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Divider, ProgressBar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { spacing } from '../theme/spacing';

export type Category = { name: string; count: number; progress: number; };

export const CategoryListCard: React.FC<{
  title: string;
  categories: Category[];
}> = ({ title, categories }) => (
  <Card style={styles.card}>
    <View style={[styles.header, {
      paddingHorizontal: spacing.cardPadding,
      paddingVertical: spacing.cardPadding
    }]}>
      <MaterialCommunityIcons name="star-outline" size={20} color="#1E40AF" />
      <Text style={styles.headerText}>{title}</Text>
    </View>

    <Divider style={styles.divider} />

    <View style={[styles.content, {
      paddingHorizontal: spacing.cardPadding,
      paddingVertical: spacing.cardPadding
    }]}>
      {categories.map((cat) => (
        <View key={cat.name} style={styles.row}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>{cat.name}</Text>
            <Text style={styles.count}>{cat.count} events</Text>
          </View>
          <ProgressBar progress={cat.progress} color="#3B82F6" style={styles.bar} />
        </View>
      ))}
    </View>
  </Card>
);

const styles = StyleSheet.create({
  card:      { flex: 1, backgroundColor: '#fff', borderRadius: 8, overflow: 'hidden' },
  header:    { flexDirection: 'row', alignItems: 'center' },
  headerText:{ marginLeft: 8, fontSize: 16, fontWeight: '500', color: '#000' },
  divider:   { backgroundColor: '#E5E7EB', height: 1 },
  content:   {},
  row:       { marginVertical: 16 },
  labelRow:  { flexDirection: 'row', justifyContent: 'space-between' },
  label:     { fontSize: 14, fontWeight: '500', color: '#000' },
  count:     { fontSize: 12, color: '#000' },
  bar:       { height: 6, borderRadius: 3, backgroundColor: '#E5E7EB', marginTop: 6 },
});

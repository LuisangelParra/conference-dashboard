import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { spacing } from '../theme/spacing';

export type RatedEvent = {
  id: string;
  name: string;
  category: string;
  rating: number;     // 0–5
  imageUrl: string;
};

type Props = {
  events: RatedEvent[];
};

export const TopRatedEventsCard: React.FC<Props> = ({ events }) => {
  return (
    <Card style={styles.card}>
      {/* HEADER */}
      <View style={[styles.header, { paddingHorizontal: spacing.cardPadding, paddingVertical: spacing.cardPadding }]}>
        <MaterialCommunityIcons name="star-outline" size={20} color="#1E40AF" />
        <Text style={styles.headerText}>Top Rated Events</Text>
      </View>

      <Divider style={styles.divider} />

      <View style={[styles.content, { paddingHorizontal: spacing.cardPadding, paddingVertical: spacing.cardPadding }]}>
        {events.map((evt) => (
          <View key={evt.id} style={styles.row}>
            <Image source={{ uri: evt.imageUrl }} style={styles.image} />
            <View style={styles.textGroup}>
              <Text style={styles.eventName}>{evt.name}</Text>
              <Text style={styles.eventCategory}>{evt.category}</Text>
            </View>
            <View style={styles.ratingGroup}>
              {[...Array(5)].map((_, i) => (
                <MaterialCommunityIcons
                  key={i}
                  name="star"
                  size={14}
                  color={i < Math.round(evt.rating) ? '#FBBF24' : '#E5E7EB'}
                />
              ))}
              <Text style={styles.ratingText}>{evt.rating.toFixed(1)}</Text>
            </View>
          </View>
        ))}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 3,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  header: { flexDirection: 'row', alignItems: 'center' },
  headerText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  divider: { backgroundColor: '#E5E7EB', height: 1 },
  content: {},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
    marginRight: 12,
  },
  textGroup: {
    flex: 1,
  },
  eventName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
  eventCategory: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  ratingGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    color: '#111827',
    marginLeft: 4,
  },
});

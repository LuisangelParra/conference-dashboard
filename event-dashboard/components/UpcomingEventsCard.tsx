import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Divider } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { spacing } from '../theme/spacing';

export type UpcomingEvent = {
  id: string;
  name: string;
  date: string; // ISO o formato legible
};

type Props = {
  events: UpcomingEvent[];
};

export const UpcomingEventsCard: React.FC<Props> = ({ events }) => {
  return (
    <Card style={styles.card}>
      {/* HEADER */}
      <View style={[styles.header, { paddingHorizontal: spacing.cardPadding, paddingVertical: spacing.cardPadding }]}>
        <MaterialIcons name="event" size={20} color="#1E40AF" />
        <Text style={styles.headerText}>Upcoming Events</Text>
      </View>

      <Divider style={styles.divider} />

      <View style={[styles.content, { paddingHorizontal: spacing.cardPadding, paddingVertical: spacing.cardPadding }]}>
        {events.length === 0 ? (
          <Text style={styles.emptyText}>No upcoming events.</Text>
        ) : (
          events.map((evt) => (
            <View key={evt.id} style={styles.row}>
              <Text style={styles.eventName}>{evt.name}</Text>
              <Text style={styles.eventDate}>{evt.date}</Text>
            </View>
          ))
        )}
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
  header: { flexDirection: 'row', alignItems: 'center' },
  headerText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  divider: { backgroundColor: '#E5E7EB', height: 1 },
  content: {},
  emptyText: {
    fontSize: 14,
    color: '#6B7280',
  },
  row: {
    paddingVertical: 8,
    borderBottomColor: '#F3F4F6',
    borderBottomWidth: 1,
  },
  eventName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
  eventDate: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
});

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import {
    Layout,
    StatCard,
    ReviewsOverTimeCard,
    CategoryListCard,
    UpcomingEventsCard,
    TopRatedEventsCard,
    UpcomingEvent,
    RatedEvent,
} from '../components';
import { spacing } from '../theme/spacing';


const DAYS = ['Wed','Thu','Fri','Sat','Sun','Mon','Tue'];
const REVIEWS = [10, 15, 12, 8, 20, 18, 22];  // ejemplo de datos
const CATEGORIES = [
  { name: 'Web Development',       count: 1, progress: 0.2 },
  { name: 'Backend',               count: 1, progress: 0.4 },
  { name: 'AI & Machine Learning', count: 1, progress: 0.3 },
  { name: 'Design',                count: 1, progress: 0.35 },
  { name: 'Security',              count: 1, progress: 0.5 },
];



export default function DashboardScreen() {
  const upcoming: UpcomingEvent[] = [];
  const topRated: RatedEvent[] = [
    {
      id: '1',
      name: 'AI for Developers',
      category: 'AI & Machine Learning',
      rating: 5.0,
      imageUrl: 'https://via.placeholder.com/48',
    },
    {
      id: '2',
      name: 'Cyber Security Best Practices',
      category: 'Security',
      rating: 5.0,
      imageUrl: 'https://via.placeholder.com/48',
    },
    {
      id: '3',
      name: 'Introduction to Modern Web Development',
      category: 'Web Development',
      rating: 4.5,
      imageUrl: 'https://via.placeholder.com/48',
    },
  ];
  return (
    <Layout>
      <View style={styles.row}>
        <StatCard
          icon={<MaterialIcons name="event" size={24} color="#3B82F6" />}
          label="Total Events"
          value={5}
          borderColor="#3B82F6"
          backgroundColor="#EFF6FF"
          iconBackgroundColor="#DBEAFE"
          style={styles.cardSpacing}
        />
        <StatCard
          icon={<MaterialCommunityIcons name="account-group" size={24} color="#10B981" />}
          label="Total Speakers"
          value={6}
          borderColor="#10B981"
          backgroundColor="#D1FAE5"
          iconBackgroundColor="#A7F3D0"
          style={styles.cardSpacing}
        />
        <StatCard
          icon={<MaterialIcons name="star" size={24} color="#FBBF24" />}
          label="Average Rating"
          value="4.7"
          borderColor="#FBBF24"
          backgroundColor="#FEF3C7"
          iconBackgroundColor="#FEF08A"
          style={styles.cardSpacing}
        />
        <StatCard
          icon={<MaterialCommunityIcons name="chart-line" size={24} color="#A855F7" />}
          label="Total Attendees"
          value={530}
          borderColor="#A855F7"
          backgroundColor="#F3E8FF"
          iconBackgroundColor="#E9D5FF"
        />
      </View>

      <View style={styles.chartRow}>
        <ReviewsOverTimeCard labels={DAYS} data={REVIEWS} />
        <CategoryListCard title="Top Categories" categories={CATEGORIES} />
      </View>

      <View style={styles.eventsRow}>
        <UpcomingEventsCard events={upcoming} />
        <TopRatedEventsCard events={topRated} />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.vertical*3,
    
  },
  cardSpacing: {
    marginRight: 30, // espacio entre tarjetas; la última no lo necesita
  },
  chartRow: {
    flexDirection: 'row',
    gap: spacing.gap,          // si tu RN >=0.71 soporta gap; si no, usa marginRight en el primer elemento
    marginVertical: spacing.vertical*3,
    minHeight: 400,
  },
  eventsRow: {
    flexDirection: 'row',
    marginVertical: spacing.gap,
    marginHorizontal: -spacing.screenPadding,
    paddingHorizontal: spacing.screenPadding,
    gap: spacing.gap,
  },

});

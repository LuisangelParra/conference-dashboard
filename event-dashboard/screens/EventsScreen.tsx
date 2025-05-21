import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import {
  Searchbar,
  Button,
  useTheme,
} from 'react-native-paper';
import { Layout } from '../components';
import { EventCard, EventCardProps } from '../components/EventCard';
import { spacing } from '../theme/spacing';

// Ahora al menos 4 items para rellenar el grid
const mockEvents: EventCardProps[] = [
  // … los dos que ya tenías …
  {
    id: '3',
    imageUrl: 'https://via.placeholder.com/400x200.png?text=Design+Workshop',
    category: 'Design',
    title: 'Design Systems Workshop',
    description: 'Learn how to create and implement consistent design systems across platforms.',
    date: 'Feb 16, 2025, 10:00 AM',
    location: 'Design Studio',
    attendees: '65 attendees',
    rating: 4.5,
    onPressDetails: () => console.log('Details Design'),
  },
  {
    id: '4',
    imageUrl: 'https://via.placeholder.com/400x200.png?text=Security+Conf',
    category: 'Security',
    title: 'Cyber Security Best Practices',
    description: 'Practical tips for securing modern web applications.',
    date: 'Mar 10, 2025, 2:00 PM',
    location: 'Tech Center',
    attendees: '120 attendees',
    rating: 5.0,
    onPressDetails: () => console.log('Details Security'),
  },
];

export default function EventsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useTheme();

  const onChangeSearch = (q: string) => setSearchQuery(q);

  const handleAdd = () => {
    console.log('Abrir modal para crear evento');
  };

  // Filtra por título
  const filtered = mockEvents.filter(e =>
    e.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }: ListRenderItemInfo<EventCardProps>) => (
    <View style={styles.cardWrapper}>
      <EventCard {...item} />
    </View>
  );

  return (
    <Layout onAddPress={handleAdd}>
      {/* Search + Filter */}
      <View style={styles.searchRow}>
        <Searchbar
          placeholder="Search events..."
          value={searchQuery}
          onChangeText={onChangeSearch}
          style={[styles.searchInput, { backgroundColor: '#FFFFFF' }]}
          inputStyle={{ color: '#000000' }}
          placeholderTextColor="#6B7280"
        />
        <Button
          mode="outlined"
          icon="filter-variant"
          textColor="#6B7280"
          buttonColor="#FFFFFF"
          style={styles.filterButton}
        >
          Filters
        </Button>
      </View>

      {/* Grid de cards */}
      <FlatList
        data={filtered}
        keyExtractor={e => e.id}
        renderItem={renderItem}
        numColumns={4}                     // cuatro columnas
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.column}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.screenPadding,
    paddingVertical: spacing.cardPadding,
  },
  searchInput: {
    flex: 1,
    borderRadius: 24,
    height: 48,
  },
  filterButton: {
    marginLeft: 12,
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
  },
  list: {
    paddingHorizontal: spacing.screenPadding,
    paddingBottom: spacing.gap,
  },
  column: {
    justifyContent: 'space-between',
    marginBottom: spacing.gap,
  },
  cardWrapper: {
    flex: 1,
    marginRight: spacing.gap / 2,      // gap uniforme
    marginLeft: spacing.gap / 2,
  },
});

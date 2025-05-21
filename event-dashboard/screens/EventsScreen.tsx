import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { Layout } from '../components';
import { Event } from '../types';

const mockEvents: Event[] = [
  {
    id: '1',
    name: 'React Conf',
    description: 'La gran conferencia de React',
    imageUrl: '',
    category: 'Web',
    anonymousRating: 4.5,
  },
  {
    id: '2',
    name: 'AI Summit',
    description: 'Tendencias IA',
    imageUrl: '',
    category: 'AI',
    anonymousRating: 4.8,
  },
];

export default function EventsScreen() {
  const handleAdd = () => {
    console.log('Abrir modal para crear evento');
  };

  const renderItem = ({ item }: { item: Event }) => (
    <Card style={styles.card}>
      <Card.Title title={item.name} subtitle={item.category} />
      <Card.Content>
        <Text numberOfLines={2}>{item.description}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <Layout onAddPress={handleAdd}>
      <FlatList
        data={mockEvents}
        keyExtractor={(e) => e.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  list: { paddingHorizontal: 16, paddingBottom: 16 },
  card: { marginBottom: 12 },
});

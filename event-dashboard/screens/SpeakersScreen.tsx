import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { Layout } from '../components';
import { Speaker } from '../types';

const mockSpeakers: Speaker[] = [
  { id: '1', name: 'Alice', bio: 'Experta en React', photoUrl: '' },
  { id: '2', name: 'Bob', bio: 'Ingeniero de ML', photoUrl: '' },
];

export default function SpeakersScreen() {
  const handleAdd = () => {
    console.log('Abrir modal para crear ponente');
  };

  return (
    <Layout onAddPress={handleAdd}>
      <FlatList
        data={mockSpeakers}
        keyExtractor={(s) => s.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Title title={item.name} />
            <Card.Content>
              <Text numberOfLines={2}>{item.bio}</Text>
            </Card.Content>
          </Card>
        )}
        contentContainerStyle={styles.list}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  list: { paddingHorizontal: 16, paddingBottom: 16 },
  card: { marginBottom: 12 },
});

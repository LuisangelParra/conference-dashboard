// src/screens/SpeakersScreen.tsx

import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Layout } from '../components';
import { SpeakerCard } from '../components/SpeakerCard';
import { spacing } from '../theme/spacing';
import { useTheme } from '@react-navigation/native';

const mockSpeakers = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Senior Frontend Engineer',
    company: 'TechFront Solutions',
    bio: 'Sarah has over 10 years of experience in frontend development and specializes in React and performance.',
    tags: ['React', 'JavaScript', 'Web Performance'],
    eventsCount: 1,
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Cloud Architect',
    company: 'CloudScale Inc.',
    bio: 'Michael specializes in designing and implementing cloud-native architectures and DevOps pipelines.',
    tags: ['Microservices', 'AWS', 'Kubernetes'],
    eventsCount: 1,
  },
  // … más ponentes …
];

export default function SpeakersScreen() {
  const [search, setSearch] = useState('');
  const theme = useTheme();

  const handleAdd = () => console.log('Abrir modal para crear ponente');

  const filtered = mockSpeakers.filter((s) =>
    [s.name, s.role, s.company, ...s.tags]
      .join(' ')
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <Layout onAddPress={handleAdd}>
      {/* Searchbar igual a la de Events */}
      <Searchbar
        placeholder="Search speakers by name, role, company or expertise..."
        value={search}
        onChangeText={setSearch}
        style={styles.searchbar}
        inputStyle={{ color: '#000000' }}
        placeholderTextColor="#6B7280"
      />

      {/* Grid de SpeakerCard */}
      <FlatList
  data={filtered}
  keyExtractor={(item) => item.id}
  numColumns={2}
  columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: spacing.gap }}
  contentContainerStyle={{ paddingHorizontal: spacing.screenPadding, paddingBottom: spacing.gap }}
  renderItem={({ item }) => (
    <SpeakerCard
      {...item}
      onPressProfile={() => {/* navegar o modal */}}
    />
  )}
/>

    </Layout>
  );
}

const styles = StyleSheet.create({
  searchbar: {
    marginBottom: spacing.gap,
    borderRadius: 24,
    height: 48,
    backgroundColor: '#FFFFFF',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: spacing.gap,
  },
  list: {
    paddingHorizontal: spacing.screenPadding,
    paddingBottom: spacing.gap,
  },
});

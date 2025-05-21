// src/components/Layout.tsx
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { ScreenContainer } from './ScreenContainer';
import { TopNav }          from './TopNav';
import { PageHeader }      from './PageHeader';
import { spacing }         from '../theme/spacing';

type HeaderConfig = {
  title: string;
  description?: string;
  showAddButton: boolean;
  addLabel?: string;
};

const HEADER_MAP: Record<keyof RootStackParamList, HeaderConfig> = {
  Dashboard: { title: 'Dashboard', description: 'Overview of your conference', showAddButton: false },
  Events:    { title: 'Events', description: 'Manage all conference events', showAddButton: true, addLabel: 'Add Event' },
  Speakers:  { title: 'Speakers', description: 'Manage conference speakers', showAddButton: true, addLabel: 'Add Speaker' },
  Reviews:   { title: 'Reviews', description: 'Manage and analyze event feedback', showAddButton: false },
};

export const Layout: React.FC<{ onAddPress?: () => void; children: React.ReactNode }> = ({ onAddPress, children }) => {
  const route = useRoute<RouteProp<RootStackParamList, keyof RootStackParamList>>();
  const config = HEADER_MAP[route.name];

  return (
    <ScreenContainer>
      <TopNav />
      <PageHeader
        title={config.title}
        description={config.description}
        showAddButton={config.showAddButton && !!onAddPress}
        onAddPress={onAddPress}
        addLabel={config.addLabel}
      />

      <ScrollView
        style={styles.scroll} 
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: spacing.screenPadding,
    paddingBottom: spacing.gap,   
  },
});

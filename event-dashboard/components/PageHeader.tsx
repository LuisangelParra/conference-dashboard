// src/components/PageHeader.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { spacing } from '../theme/spacing';

type Props = {
  title: string;
  description?: string;
  showAddButton?: boolean;
  onAddPress?: () => void;
  addLabel?: string;
};

export const PageHeader: React.FC<Props> = ({
  title, description, showAddButton = false, onAddPress, addLabel,
}) => (
  <View style={styles.container}>
    <View style={styles.inner}>
      <View style={styles.textContainer}>
        <Text variant="headlineMedium" style={styles.title}>{title}</Text>
        {description && <Text variant="bodyMedium" style={styles.description}>{description}</Text>}
      </View>
      {showAddButton && onAddPress && (
        <Button mode="contained" onPress={onAddPress} style={styles.button}>
          {addLabel}
        </Button>
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // sombra para separar del contenido:
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: spacing.horizontal,  // <— padding aquí
    paddingVertical: spacing.vertical,
  },
  textContainer: { flex: 1 },
  title:        { fontWeight: '700', color: '#000' },
  description:  { marginTop: 4, color: '#000' },
  button:       { borderRadius: 4 },
});

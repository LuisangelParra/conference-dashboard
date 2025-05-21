import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Card, Text, Chip, Divider } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { spacing } from '../theme/spacing';

export type SpeakerCardProps = {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  tags: string[];
  eventsCount: number;
  imageUrl: string;
  onPressProfile: () => void;
};

export const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  role,
  company,
  bio,
  tags,
  eventsCount,
  imageUrl,
  onPressProfile,
}) => (
  <Card style={styles.card}>
    {/* Imagen + overlay */}
    <View style={styles.imageWrapper}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>
    </View>

    {/* Contenido */}
    <Card.Content style={styles.content}>
      <View style={styles.companyRow}>
        <MaterialIcons name="business" size={14} color="#6B7280" />
        <Text style={styles.company}>{company}</Text>
      </View>
      <Text numberOfLines={2} style={styles.bio}>
        {bio}
      </Text>

      {/* Tags */}
      <View style={styles.tags}>
        {tags.map((tag) => (
          <Chip key={tag} style={styles.chip} textStyle={styles.chipText}>
            {tag}
          </Chip>
        ))}
      </View>
    </Card.Content>

    <Divider />

    {/* Footer */}
    <View style={styles.footer}>
      <View style={styles.eventsRow}>
        <MaterialIcons name="event" size={14} color="#6B7280" />
        <Text style={styles.eventsText}>
          {eventsCount} event{eventsCount !== 1 ? 's' : ''}
        </Text>
      </View>
      <TouchableOpacity onPress={onPressProfile}>
        <Text style={styles.link}>View profile →</Text>
      </TouchableOpacity>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  card: {
  flex: 1,                         
  marginBottom: spacing.gap,      
  marginHorizontal: spacing.gap / 2, 
  borderRadius: 8,
  overflow: 'hidden',
  backgroundColor: '#FFFFFF',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: 160,
    backgroundColor: '#F3F4F6',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: spacing.cardPadding,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  name: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  role: {
    color: '#F3F4F6',
    fontSize: 12,
    marginTop: 2,
  },
  content: {
    paddingHorizontal: spacing.cardPadding,
    paddingVertical: spacing.cardPadding,
  },
  companyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  company: {
    marginLeft: 4,
    fontSize: 12,
    color: '#6B7280',
  },
  bio: {
    fontSize: 13,
    color: '#374151',
    marginBottom: 8,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  chip: {
    backgroundColor: '#EEF2FF',
    marginRight: 6,
    marginBottom: 6,
  },
  chipText: {
    fontSize: 12,
    color: '#2563EB',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.cardPadding,
    paddingVertical: spacing.cardPadding * 0.5, 
  },
  eventsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventsText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#6B7280',
  },
  link: {
    fontSize: 12,
    color: '#2563EB',
    fontWeight: '500',
  },
});

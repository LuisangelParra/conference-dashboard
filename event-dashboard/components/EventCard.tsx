// src/components/EventCard.tsx

import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Card,
  Text,
  Divider
} from 'react-native-paper';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { spacing } from '../theme/spacing';

export type EventCardProps = {
  id: string;
  imageUrl: string;
  category: string;
  title: string;
  description: string;
  date: string;      // e.g. "May 31, 2024, 7:00 PM"
  location: string;  // e.g. "NYC"
  attendees: string; // e.g. "150 attendees"
  rating: number;    // e.g. 4.5
  onPressDetails: () => void;
};

export const EventCard: React.FC<EventCardProps> = ({
  imageUrl,
  category,
  title,
  description,
  date,
  location,
  attendees,
  rating,
  onPressDetails,
}) => (
  <Card style={styles.card}>
    {/* Imagen + badge */}
    <View style={styles.imageWrapper}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{category}</Text>
      </View>
    </View>

    {/* Contenido */}
    <Card.Content style={styles.content}>
      <Text variant="headlineSmall" style={styles.title}>{title}</Text>
      <Text variant="bodyMedium" style={styles.description} numberOfLines={2}>
        {description}
      </Text>

      {/* Detalles: fecha, lugar, asistentes */}
      <View style={styles.detailsRow}>
        <MaterialIcons name="calendar-today" size={16} color="#000" />
        <Text style={styles.detailText}>{date}</Text>
      </View>
      <View style={styles.detailsRow}>
        <MaterialIcons name="place" size={16} color="#000" />
        <Text style={styles.detailText}>{location}</Text>
      </View>
      <View style={styles.detailsRow}>
        <MaterialCommunityIcons name="account-group" size={16} color="#000" />
        <Text style={styles.detailText}>{attendees}</Text>
      </View>
    </Card.Content>

    <Divider style={styles.divider} />

    {/* Footer: estrellas + texto + enlace */}
    <View style={styles.footer}>
      <View style={styles.starsRow}>
        {Array.from({ length: 5 }).map((_, i) => (
          <MaterialIcons
            key={i}
            name={
              i < Math.floor(rating)
                ? 'star'
                : i < Math.ceil(rating)
                ? 'star-half'
                : 'star-outline'
            }
            size={16}
            color="#FBBF24"
          />
        ))}
        <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
      </View>
      <TouchableOpacity onPress={onPressDetails}>
        <Text style={styles.detailsLink}>
          View details &rarr;
        </Text>
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
  badge: {
    position: 'absolute',
    top: spacing.cardPadding,
    right: spacing.cardPadding,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#2563EB',
  },
  content: {
    paddingHorizontal: spacing.cardPadding,
    paddingVertical: spacing.cardPadding * 0.75, 
  },
  title: {
    fontWeight: '600',
    color: '#000000',
  },
  description: {
    marginTop: 4,
    color: '#000000',
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  detailText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#000000',
  },
  divider: {
    backgroundColor: '#E5E7EB',
    height: 1,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.cardPadding,
    paddingVertical: spacing.cardPadding * 0.5, 
  },
  starsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#000000',
    fontWeight: '500',
  },
  detailsLink: {
    fontSize: 12,
    color: '#2563EB',
    fontWeight: '500',
  },
});

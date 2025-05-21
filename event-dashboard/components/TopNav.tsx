// src/components/TopNav.tsx
import React, { JSX } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { spacing } from '../theme/spacing';

type NavKey = keyof RootStackParamList;

export const TopNav: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const state = useNavigationState(s => s);
  const active = state.routes[state.index].name as NavKey;

  const PRIMARY = '#2563EB';
  const INACTIVE = '#6B7280';

  const items: { key: NavKey; icon: JSX.Element }[] = [
    { key: 'Dashboard', icon: <MaterialCommunityIcons name="chart-bar" size={20} color={active==='Dashboard'?PRIMARY:INACTIVE}/> },
    { key: 'Events',    icon: <MaterialIcons           name="event"     size={20} color={active==='Events'?   PRIMARY:INACTIVE}/> },
    { key: 'Speakers',  icon: <MaterialCommunityIcons name="account-group-outline" size={20} color={active==='Speakers'?PRIMARY:INACTIVE}/> },
    { key: 'Reviews',   icon: <MaterialCommunityIcons name="comment-outline"       size={20} color={active==='Reviews'?  PRIMARY:INACTIVE}/> },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.left}>
          <TouchableOpacity style={styles.menuButton} onPress={() => { /* drawer */ }}>
            <MaterialIcons name="menu" size={24} color="#fff"/>
          </TouchableOpacity>
          <Text style={styles.brand}>ConferenceHub</Text>
        </View>
        <View style={styles.right}>
          {items.map(({ key, icon }) => {
            const isActive = key === active;
            return (
              <TouchableOpacity
                key={key}
                style={[styles.navItem, isActive && { borderBottomWidth: 2, borderBottomColor: PRIMARY }]}
                onPress={() => navigation.navigate(key)}
              >
                {icon}
                <Text style={[styles.navText, isActive ? { color: PRIMARY } : { color: INACTIVE }]}>
                  {key}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: spacing.vertical,
    // sin borde abajo, fusionado con el header
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: spacing.horizontal,  // <— aplica aquí el padding
  },
  left:      { flexDirection: 'row', alignItems: 'center' },
  menuButton:{ padding: 8, borderRadius: 4, backgroundColor: '#2563EB', marginRight: 12 },
  brand:     { fontSize: 20, fontWeight: '700', color: '#1F2937' },
  right:     { flexDirection: 'row', alignItems: 'center' },
  navItem:   { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 8, marginLeft: 8 },
  navText:   { marginLeft: 4, fontSize: 16, fontWeight: '500' },
});

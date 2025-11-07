import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { supabase } from '../supabase-client';

export default function MySessionsScreen() {
  const router = useRouter();
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserSessions = async () => {
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError || !user) {
        router.replace('/login');
        return;
      }

      const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

      const { data: registrationsData, error } = await supabase
        .from('registrations')
        .select(`
          *,
          training_sessions!inner (
            id,
            title,
            description,
            date,
            time,
            location,
            image,
            mentor
          )
        `)
        .eq('user_id', user.id)
        .gte('training_sessions.date', currentDate);

      if (error) {
        console.error('Error fetching sessions:', error);
      }

      // Extract session details from registrations
      const userSessions = registrationsData?.map(reg => reg.training_sessions) || [];
      setSessions(userSessions);
      setLoading(false);
    };

    fetchUserSessions();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading your sessions...</Text>
      </View>
    );
  }

  const renderSessionItem = ({ item }) => (
    <View style={styles.sessionCard}>
      <Image source={{ uri: item.image }} style={styles.sessionImage} />
      <View style={styles.sessionInfo}>
        <Text style={styles.sessionTitle}>{item.title}</Text>
        <Text style={styles.mentorText}>Mentor: {item.mentor}</Text>
        <Text style={styles.sessionDescription} numberOfLines={3}>{item.description}</Text>
        <View style={styles.sessionMeta}>
          <View style={styles.metaItem}>
            <Ionicons name="location-outline" size={16} color="#64748B" />
            <Text style={styles.metaText}>{item.location}</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="calendar-outline" size={16} color="#64748B" />
            <Text style={styles.metaText}>{new Date(item.date).toLocaleDateString()} • {item.time}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Banner Section */}
      <View style={styles.bannerContainer}>
        <Image
          source={{uri:"https://i.pinimg.com/736x/b2/46/f6/b246f65feb84879d84c5e2d03c101483.jpg"}} // Assume resources themed asset
          style={styles.bannerImage}
        />
        
        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerTitle}>My Upcoming Sessions</Text>
          <Text style={styles.bannerSubtitle}>
            Here's what you've registered for. Get ready to level up your IT skills!
          </Text>
        </View>
      </View>

      {/* Sessions List */}
      <FlatList
        data={sessions}
        renderItem={renderSessionItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="school-outline" size={48} color="#64748B" />
            <Text style={styles.emptyText}>No upcoming sessions registered yet.</Text>
            <Text style={styles.emptySubtext}>Explore available trainings and join one!</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  bannerContainer: {
    position: 'relative',
    height: 240,
    width: '100%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bannerTextContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
  },
  bannerSubtitle: {
    color: '#fff',
    fontSize: 15,
    marginTop: 4,
    width: '90%',
    opacity: 0.95,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  sessionCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  sessionImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  sessionInfo: {
    padding: 16,
  },
  sessionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 4,
  },
  mentorText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8B5CF6',
    marginBottom: 8,
  },
  sessionDescription: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
    marginBottom: 12,
  },
  sessionMeta: {
    flexDirection: 'column',
    gap: 8,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metaText: {
    fontSize: 14,
    color: '#64748B',
  },
  loadingText: {
    textAlign: 'center',
    padding: 20,
    color: '#64748B',
    fontSize: 16,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginTop: 16,
    marginBottom: 4,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
  },
});
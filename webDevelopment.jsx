import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function WebDevelopmentScreen() {
  const router = useRouter();

  const offerings = [
    {
      id: 1,
      title: 'HTML & CSS Fundamentals',
      description: 'Learn the building blocks of web pages with hands-on projects to create responsive designs.',
      icon: 'logo-html5',
      color: '#E53E3E', // Red for HTML
    },
    {
      id: 2,
      title: 'JavaScript Essentials',
      description: 'Master interactive web elements through scripting, DOM manipulation, and event handling.',
      icon: 'logo-javascript',
      color: '#F7DF1E', // Yellow for JS
    },
    {
      id: 3,
      title: 'React Framework',
      description: 'Build dynamic single-page applications with components, state management, and hooks.',
      icon: 'logo-react',
      color: '#61DAFB', // Cyan for React
    },
    {
      id: 4,
      title: 'Node.js Backend',
      description: 'Develop server-side applications with Express, APIs, and database integration.',
      icon: 'server-outline',
      color: '#339933', // Green for Node
    },
    {
      id: 5,
      title: 'Full-Stack Projects',
      description: 'Apply your skills in capstone projects, from wireframing to deployment.',
      icon: 'build-outline',
      color: '#2563EB', // Blue accent
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 🔹 Banner Section */}
      <View style={styles.bannerContainer}>
        <Image
          source={{uri:"https://i.pinimg.com/736x/2e/a9/61/2ea96109b8c1ec1f795f2a05dce14faf.jpg"}} // Assume cyber-themed asset
          style={styles.bannerImage}
        />
        
        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerTitle}>Web Development Training</Text>
          <Text style={styles.bannerSubtitle}>
            Unlock the power of the web by learning to code beautiful, functional websites and apps.
          </Text>
        </View>
      </View>

      {/* 🔹 Introduction Section */}
      <View style={styles.introContainer}>
        <Text style={styles.introTitle}>Empower Your Future in Tech</Text>
        <Text style={styles.introText}>
          Our Web Development program is designed specifically for women entering the IT field. Through interactive modules, mentorship, and real-world projects, you'll gain the confidence and skills to launch your career as a full-stack developer. Join a supportive community of like-minded women breaking barriers in tech.
        </Text>
      </View>

      {/* 🔹 Offerings Section */}
      <Text style={styles.sectionTitle}>Main Offerings</Text>
      <View style={styles.cardContainer}>
        {offerings.map((offering) => (
          <TouchableOpacity
            key={offering.id}
            style={styles.card}
            onPress={() => router.push(`/offerings/${offering.id}`)} // Optional: Link to detailed page
          >
            <View style={[styles.iconContainer, { backgroundColor: offering.color + '20' }]}>
              <Ionicons name={offering.icon} size={32} color={offering.color} />
            </View>
            <Text style={styles.cardTitle}>{offering.title}</Text>
            <Text style={styles.cardDescription}>{offering.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
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
  introContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  introTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 10,
  },
  introText: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1E293B',
    marginTop: 25,
    marginBottom: 12,
    marginLeft: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: '47%',
    padding: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#8B5CF6',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 13,
    color: '#64748B',
    lineHeight: 18,
  },
});
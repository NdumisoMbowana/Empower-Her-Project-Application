import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function MobileDevelopmentScreen() {
  const router = useRouter();

  const offerings = [
    {
      id: 1,
      title: 'iOS Development with Swift',
      description: 'Dive into native iOS app development using Swift, focusing on UI components and app lifecycle management.',
      icon: 'iphone-outline',
      color: '#000000', // Black for Apple
    },
    {
      id: 2,
      title: 'Android Development with Kotlin',
      description: 'Build powerful Android apps with Kotlin, covering activities, fragments, and material design principles.',
      icon: 'logo-android',
      color: '#3DDC84', // Green for Android
    },
    {
      id: 3,
      title: 'React Native for Cross-Platform',
      description: 'Develop once, deploy everywhere: Learn to create hybrid apps with React Native and native modules.',
      icon: 'logo-react',
      color: '#61DAFB', // Cyan for React
    },
    {
      id: 4,
      title: 'Mobile UX/UI Design',
      description: 'Design intuitive and accessible mobile interfaces using tools like Figma and prototyping techniques.',
      icon: 'brush-outline',
      color: '#8B5CF6', // Purple accent
    },
    {
      id: 5,
      title: 'App Deployment & Testing',
      description: 'Master testing strategies, app store submissions, and continuous integration for production-ready apps.',
      icon: 'cloud-upload-outline',
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
          <Text style={styles.bannerTitle}>Mobile Development Training</Text>
          <Text style={styles.bannerSubtitle}>
            Craft engaging mobile experiences that empower users and drive innovation in the palm of their hands.
          </Text>
        </View>
      </View>

      {/* 🔹 Introduction Section */}
      <View style={styles.introContainer}>
        <Text style={styles.introTitle}>Launch Your Mobile Tech Career</Text>
        <Text style={styles.introText}>
          Our Mobile Development program empowers women to excel in creating apps for iOS and Android. With hands-on coding sessions, expert guidance, and collaborative projects, you'll build a portfolio that showcases your ability to solve real-world problems through mobile technology. Be part of a network that's transforming the tech landscape, one app at a time.
        </Text>
      </View>

      {/* 🔹 Offerings Section */}
      <Text style={styles.sectionTitle}>Main Offerings</Text>
      <View style={styles.cardContainer}>
        {offerings.map((offering) => (
          <TouchableOpacity
            key={offering.id}
            style={styles.card}
            onPress={() => router.push(`/offerings/mobile/${offering.id}`)} // Optional: Link to detailed page
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
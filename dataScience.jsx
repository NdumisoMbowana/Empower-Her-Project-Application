import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function DataScienceScreen() {
  const router = useRouter();

  const offerings = [
    {
      id: 1,
      title: 'Python for Data Analysis',
      description: 'Master Python libraries like Pandas and NumPy to clean, manipulate, and explore datasets effectively.',
      icon: 'logo-python',
      color: '#3776AB', // Blue for Python
    },
    {
      id: 2,
      title: 'Statistics & Probability',
      description: 'Build a strong foundation in statistical methods, hypothesis testing, and probabilistic modeling for data-driven insights.',
      icon: 'calculator-outline',
      color: '#F59E0B', // Amber for stats
    },
    {
      id: 3,
      title: 'Machine Learning Fundamentals',
      description: 'Dive into supervised and unsupervised learning algorithms, model training, and evaluation techniques.',
      icon: 'construct-outline',
      color: '#10B981', // Green for ML
    },
    {
      id: 4,
      title: 'Data Visualization',
      description: 'Create compelling visualizations using Matplotlib, Seaborn, and Tableau to communicate findings clearly.',
      icon: 'bar-chart-outline',
      color: '#8B5CF6', // Purple accent
    },
    {
      id: 5,
      title: 'Real-World Projects & Ethics',
      description: 'Apply skills to capstone projects while exploring ethical considerations in data science and AI.',
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
          <Text style={styles.bannerTitle}>Data Science Training</Text>
          <Text style={styles.bannerSubtitle}>
            Transform data into actionable insights and shape the future with intelligent analytics.
          </Text>
        </View>
      </View>

      {/* 🔹 Introduction Section */}
      <View style={styles.introContainer}>
        <Text style={styles.introTitle}>Unleash the Power of Data for Women in Tech</Text>
        <Text style={styles.introText}>
          Our Data Science program is crafted to inspire and equip women with the analytical prowess to thrive in the data revolution. Featuring interactive coding challenges, peer collaborations, and guidance from leading female data scientists, you'll develop the expertise to uncover patterns and drive innovation. Step into a world where your insights create impact and open doors to exciting careers.
        </Text>
      </View>

      {/* 🔹 Offerings Section */}
      <Text style={styles.sectionTitle}>Main Offerings</Text>
      <View style={styles.cardContainer}>
        {offerings.map((offering) => (
          <TouchableOpacity
            key={offering.id}
            style={styles.card}
            onPress={() => router.push(`/offerings/data-science/${offering.id}`)} // Optional: Link to detailed page
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
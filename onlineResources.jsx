import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const platforms = [
  {
    id: 1,
    name: 'Udemy',
    description: 'Thousands of online courses in tech, business, and more.',
    logo: 'https://i.pinimg.com/736x/1a/64/ea/1a64eabcc4ab1522c1af68a022272ee5.jpg',
    url: 'https://www.udemy.com/',
  },
  {
    id: 2,
    name: 'LinkedIn Learning',
    description: 'Professional development courses integrated with LinkedIn.',
    logo: 'https://i.pinimg.com/1200x/0c/78/d0/0c78d03cbfa19d5f3d7ad1b6e49f957b.jpg',
    url: 'https://www.linkedin.com/learning/',
  },
  {
    id: 3,
    name: 'Coursera',
    description: 'Degrees, certificates, and courses from top universities.',
    logo: 'https://i.pinimg.com/1200x/5a/56/0e/5a560e72f36436938b78b86139fc3619.jpg',
    url: 'https://www.coursera.org/',
  },
  {
    id: 4,
    name: 'edX',
    description: 'Free online courses from MIT, Harvard, and others.',
    logo: 'https://i.pinimg.com/736x/f3/df/4e/f3df4e3f05ca4f3734c753c67ab3d07f.jpg',
    url: 'https://www.edx.org/',
  },
  {
    id: 5,
    name: 'Khan Academy',
    description: 'Free world-class education for anyone, anywhere.',
    logo: 'https://i.pinimg.com/736x/75/a7/e5/75a7e5987e6a43f12b1708f003ac9e30.jpg',
    url: 'https://www.khanacademy.org/',
  },
  {
    id: 6,
    name: 'Pluralsight',
    description: 'Tech skills training for developers and IT pros.',
    logo: 'https://i.pinimg.com/1200x/a6/24/4d/a6244d1b935ef3ffedb8d935a2237f24.jpg',
    url: 'https://www.pluralsight.com/',
  },
  {
    id: 7,
    name: 'Skillshare',
    description: 'Creative classes taught by the world\'s best.',
    logo: 'https://i.pinimg.com/736x/76/9a/e0/769ae090e8b99e9dbe0af2014f88f590.jpg',
    url: 'https://www.skillshare.com/',
  },
  {
    id: 8,
    name: 'FutureLearn',
    description: 'Online degrees and courses from leading universities.',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7C4VifFIDRXW5HNlZsAG-CUBMIJMPPBrFwA&s',
    url: 'https://www.futurelearn.com/',
  },
  {
    id: 9,
    name: 'MasterClass',
    description: 'Learn from the best with classes by world-renowned experts.',
    logo: 'https://i.pinimg.com/1200x/8f/45/99/8f45993d065705a3f60aeb5f4fd0ae3a.jpg',
    url: 'https://www.masterclass.com/',
  },
];

export default function ResourcesScreen() {
  const handleOpenUrl = (url) => {
    Linking.openURL(url);
  };

  const renderPlatformItem = ({ item }) => (
    <TouchableOpacity style={styles.platformCard} onPress={() => handleOpenUrl(item.url)}>
      <Image source={{ uri: item.logo }} style={styles.platformLogo} />
      <View style={styles.platformInfo}>
        <Text style={styles.platformName}>{item.name}</Text>
        <Text style={styles.platformDescription} numberOfLines={2}>{item.description}</Text>
      </View>
      <Ionicons name="open-outline" size={20} color="#64748B" />
    </TouchableOpacity>
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
          <Text style={styles.bannerTitle}>Online Learning Resources</Text>
          <Text style={styles.bannerSubtitle}>
            Expand your knowledge with these top platforms tailored for IT skills.
          </Text>
        </View>
      </View>

      {/* Platforms List */}
      <FlatList
        data={platforms}
        renderItem={renderPlatformItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
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
  platformCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  platformLogo: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 12,
    resizeMode: 'contain',
  },
  platformInfo: {
    flex: 1,
  },
  platformName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 4,
  },
  platformDescription: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 18,
  },
});
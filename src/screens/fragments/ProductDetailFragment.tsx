import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ProductListFragment({ navigation }: { navigation: any }) {
  const [size, setSize] = useState<'S' | 'M' | 'L'>('S');
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../images/capuchino.jpg')} style={styles.image} />
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.heartButton}
          onPress={() => setIsFavorite(!isFavorite)}>
          <FontAwesome name="heart" size={20} color={isFavorite ? "red" : "white"} />
        </TouchableOpacity>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Cappuccino</Text>
        <Text style={styles.subtitle}>With Steamed Milk</Text>

        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={16} color="orange" />
          <Text style={styles.rating}>4.5</Text>
          <Text style={styles.reviews}>(6,970)</Text>
        </View>

        <Text style={styles.description}>
          Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.
        </Text>

        <Text style={styles.sizeText}>Size</Text>
        <View style={styles.sizeContainer}>
          {['S', 'M', 'L'].map((s) => (
            <TouchableOpacity
              key={s}
              style={[styles.sizeButton, size === s && styles.selectedSize]}
              onPress={() => setSize(s as 'S' | 'M' | 'L')}>
              <Text style={styles.sizeButtonText}>{s}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.footer}>
          <Text style={styles.price}>$ 4.20</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  imageContainer: { position: 'relative', marginTop: 33 },
  image: { width: '100%', height: 250, resizeMode: 'cover' },
  backButton: { position: 'absolute', top: 20, left: 20, padding: 10 },
  heartButton: { position: 'absolute', top: 20, right: 20, padding: 10 },
  detailsContainer: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#000' },
  subtitle: { fontSize: 14, color: '#000', marginBottom: 10 },
  ratingContainer: { flexDirection: 'row', alignItems: 'center' },
  rating: { color: '#000', marginLeft: 5 },
  reviews: { color: '#000', marginLeft: 5 },
  description: { color: '#000', marginVertical: 10 },
  sizeText: { color: '#000', fontSize: 16, marginTop: 10 },
  sizeContainer: { flexDirection: 'row', marginVertical: 10 },
  sizeButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginRight: 10
  },
  selectedSize: { backgroundColor: '#ff8c00' },
  sizeButtonText: { color: '#000' },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  price: { color: '#000', fontSize: 18, fontWeight: 'bold' },
  addButton: { backgroundColor: '#ff8c00', padding: 12, borderRadius: 10 },
  addButtonText: { color: '#000', fontWeight: 'bold' }
});
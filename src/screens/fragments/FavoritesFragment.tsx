import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import { StatusBar } from 'expo-status-bar';
import { Card } from 'react-native-paper';

export default function FavoritesFragment({ navigation }: { navigation: any }) {
    const coffeeData = [
        { id: '1', name: 'Cappuccino', description: 'With Steamed Milk', price: 4.2, image: require('../../images/capuchino.jpg') },
        { id: '2', name: 'Cappuccino', description: 'With Foam', price: 4.2, image: require('../../images/capuchino.jpg') },
        { id: '3', name: 'Robusta Beans', description: 'Medium Roasted', price: 4.2, image: require('../../images/capuchino.jpg') },
        { id: '4', name: 'Cappuccino Beans', description: 'With Titanium Blend', price: 4.2, image: require('../../images/capuchino.jpg') },
        { id: '5', name: 'Espresso', description: 'Strong and Bold', price: 3.8, image: require('../../images/capuchino.jpg') },
        { id: '6', name: 'Latte', description: 'With Creamy Milk', price: 4.5, image: require('../../images/capuchino.jpg') },
        { id: '7', name: 'Mocha', description: 'Chocolate Flavored', price: 4.7, image: require('../../images/capuchino.jpg') },
        { id: '8', name: 'Americano', description: 'Classic Black Coffee', price: 3.5, image: require('../../images/capuchino.jpg') },
        { id: '9', name: 'Macchiato', description: 'Espresso with Foam', price: 4.3, image: require('../../images/capuchino.jpg') },
        { id: '10', name: 'Flat White', description: 'Smooth and Velvety', price: 4.6, image: require('../../images/capuchino.jpg') },
    ];


    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <FlatList
                    data={coffeeData}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <Card style={styles.card} onPress={() => navigation.navigate('ProductDetailFragment')}>
                            <Image source={item.image} style={styles.image} />
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                            <View style={styles.priceRow}>
                                <Text style={styles.price}>$ {item.price.toFixed(2)}</Text>
                                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('CartFragment')}>
                                    <MaterialIcons name="add" size={16} color="#fff" />
                                </TouchableOpacity>
                            </View>
                        </Card>
                    )}
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16
    },
    container2: {
        marginTop: 30
    },
    card: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        borderRadius: 10,
        margin: 8,
        padding: 10,
    },
    image: {
        width: '100%',
        height: 120,
        borderRadius: 10
    },
    name: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8
    },
    description: {
        color: '#888',
        fontSize: 12
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8
    },
    price: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    },
    addButton: {
        backgroundColor: '#FF6C44',
        padding: 6,
        borderRadius: 5
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#1E1E1E',
        borderRadius: 10,
        marginTop: 10
    },
});

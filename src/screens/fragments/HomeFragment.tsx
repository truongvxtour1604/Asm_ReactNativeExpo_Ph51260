import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import { StatusBar } from 'expo-status-bar';
import { Card } from 'react-native-paper';

export default function HomeFragment({ navigation }: { navigation: any }) {
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
            {/* Top Navigation */}
            <View style={styles.topNav}>
                {/* <Entypo name="menu" size={24} color="#000" /> */}
                <Text style={styles.topNavTitle}>VXT</Text>
                <Image
                    source={require('../../images/vxt.jpg')}
                    style={styles.avatar}
                />
                {/* <Entypo name="shopping-cart" size={24} color="#000" onPress={() => navigation.navigate('CartFragment')}/> */}
            </View>

            <Text style={styles.header}>Find the best coffee for you</Text>

            <View style={styles.searchBar}>
                <MaterialIcons name="search" size={20} color="#fff" style={styles.searchIcon} />
                <TextInput placeholder="Find Your Coffee..." placeholderTextColor="#888" style={styles.input} />
            </View>

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
    topNav: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Chia khoảng giữa chữ và avatar
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: 20
    },
    topNavTitle: {
        color: '#000',
        fontSize: 26,
        fontWeight: 'bold',
        marginLeft: 157
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#000",
    },
    header: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    searchBar: {
        flexDirection: 'row',
        backgroundColor: '#1E1E1E',
        borderRadius: 10,
        padding: 5,
        alignItems: 'center',
        marginBottom: 10
    },
    searchIcon: {
        marginLeft: 5
    },
    input: {
        flex: 1,
        color: '#fff'
    },
    card: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        borderRadius: 10,
        margin: 8,
        padding: 10
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

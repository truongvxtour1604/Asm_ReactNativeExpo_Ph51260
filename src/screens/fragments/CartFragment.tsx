import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Item {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: any;
}

const products: Item[] = [
    { id: "1", name: "Cappuccino", price: 4.2, quantity: 1, image: require("../../images/capuchino.jpg") },
    { id: "2", name: "Robusta Beans", price: 6.2, quantity: 1, image: require("../../images/capuchino.jpg") },
    { id: "3", name: "Liberica Coffee Beans", price: 4.2, quantity: 1, image: require("../../images/capuchino.jpg") },
    { id: "4", name: "Latte", price: 5.0, quantity: 1, image: require("../../images/capuchino.jpg") },
    { id: "5", name: "Espresso", price: 3.5, quantity: 1, image: require("../../images/capuchino.jpg") },
    { id: "6", name: "Mocha", price: 5.5, quantity: 1, image: require("../../images/capuchino.jpg") },
    { id: "7", name: "Arabica Coffee Beans", price: 7.0, quantity: 1, image: require("../../images/capuchino.jpg") },
    { id: "8", name: "Iced Coffee", price: 4.8, quantity: 1, image: require("../../images/capuchino.jpg") },
    { id: "9", name: "Flat White", price: 4.5, quantity: 1, image: require("../../images/capuchino.jpg") },
    { id: "10", name: "Café au Lait", price: 5.2, quantity: 1, image: require("../../images/capuchino.jpg") },
    { id: "11", name: "Nitro Cold Brew", price: 6.5, quantity: 1, image: require("../../images/capuchino.jpg") },
    { id: "12", name: "Cappuccino Beans", price: 6.0, quantity: 1, image: require("../../images/capuchino.jpg") },
    { id: "13", name: "Hazelnut Syrup", price: 3.0, quantity: 1, image: require("../../images/capuchino.jpg") },
];

export default function ItemFragment({ navigation }: { navigation: any }) {
    const [items, setItems] = useState(products);

    const updateQuantity = (id: string, type: "increase" | "decrease") => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: type === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1) }
                    : item
            )
        );
    };

    const removeItem = (id: string) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Image source={item.image} style={styles.image} />
                            <View style={styles.info}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                                <View style={styles.quantityContainer}>
                                    <TouchableOpacity onPress={() => updateQuantity(item.id, "decrease")}>
                                        <MaterialIcons name="remove-circle-outline" size={24} color="orange" />
                                    </TouchableOpacity>
                                    <Text style={styles.quantity}>{item.quantity}</Text>
                                    <TouchableOpacity onPress={() => updateQuantity(item.id, "increase")}>
                                        <MaterialIcons name="add-circle-outline" size={24} color="orange" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => removeItem(item.id)}>
                                <MaterialIcons name="delete" size={24} color="red" />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
            <View style={styles.floatingButtonContainer}>
                <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate('PaymentFragment')}>
                    <Text style={styles.payText}>Pay ${totalPrice}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff", padding: 16 },
    container2: { marginTop: 30 },
    card: { flexDirection: "row", backgroundColor: "#1e1e1e", borderRadius: 10, padding: 20, marginVertical: 8, alignItems: "center" },
    image: { width: 80, height: 80, borderRadius: 10 },
    info: { flex: 1, marginLeft: 10 },
    name: { color: "white", fontSize: 16, fontWeight: "bold" },
    price: { color: "#FFA500", fontSize: 14, marginTop: 4 },
    quantityContainer: { flexDirection: "row", alignItems: "center", marginTop: 8 },
    quantity: { color: "white", fontSize: 16, marginHorizontal: 10 },
    floatingButtonContainer: { position: "absolute", bottom: 20, right: 20, left: 20, alignItems: "center" },
    floatingButton: { backgroundColor: "orange", padding: 15, borderRadius: 10, alignItems: "center", width: "100%" },
    payText: { color: "white", fontSize: 18, fontWeight: "bold" },
});


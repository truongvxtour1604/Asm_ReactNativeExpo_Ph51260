import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function PaymentFragment({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>

      <View style={styles.paymentInfo}>
        <Text style={styles.label}>Card Number</Text>
        <View style={styles.cardInput}>
          <MaterialIcons name="credit-card" size={24} color="white" />
          <Text style={styles.cardText}>**** **** **** 1234</Text>
        </View>

        <Text style={styles.label}>Expiry Date</Text>
        <View style={styles.cardInput}>
          <MaterialIcons name="date-range" size={24} color="white" />
          <Text style={styles.cardText}>12/26</Text>
        </View>

        <Text style={styles.label}>CVV</Text>
        <View style={styles.cardInput}>
          <MaterialIcons name="lock-outline" size={24} color="white" />
          <Text style={styles.cardText}>***</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.payText}>Confirm Payment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212", padding: 20, justifyContent: "center" },
  title: { color: "white", fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  paymentInfo: { backgroundColor: "#1e1e1e", padding: 20, borderRadius: 10 },
  label: { color: "#FFA500", fontSize: 16, marginTop: 10 },
  cardInput: { flexDirection: "row", alignItems: "center", backgroundColor: "#333", padding: 10, borderRadius: 8, marginTop: 5 },
  cardText: { color: "white", fontSize: 16, marginLeft: 10 },
  payButton: { backgroundColor: "orange", padding: 15, borderRadius: 10, marginTop: 20, alignItems: "center" },
  payText: { color: "white", fontSize: 18, fontWeight: "bold" },
});

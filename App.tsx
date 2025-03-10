import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/screens/Welcome';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
import ProductDetailFragment from './src/screens/fragments/ProductDetailFragment'
import CartFragment from './src/screens/fragments/CartFragment'
import PaymentFragment from './src/screens/fragments/PaymentFragment';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="ProductDetailFragment" component={ProductDetailFragment} options={{ headerShown: false }} />
        <Stack.Screen name="CartFragment" component={CartFragment} options={{ headerShown: false }} />
        <Stack.Screen name="PaymentFragment" component={PaymentFragment} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



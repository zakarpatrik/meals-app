import { Button, StyleSheet, Text } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator id="drawer-navigation" screenOptions={{
      headerStyle: { backgroundColor: '#351401' },
      headerTintColor: '#ffffff',
      sceneStyle: { backgroundColor: '#3f2f25' },
      drawerContentStyle: { backgroundColor: '#351401' },
      drawerInactiveTintColor: '#ffffff',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e4baa1',
    }}>
      <Drawer.Screen name="meals-categories" component={CategoriesScreen} options={{
        title: 'All categories',
        drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />,
      }} />
      <Drawer.Screen name="favorites" component={FavoritesScreen} options={{
        title: 'Favorites',
        drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />,
      }} />
    </Drawer.Navigator>

  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/*<FavoritesContextProvider>*/}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator id="meals-navigation" screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: '#ffffff',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}>
            <Stack.Screen name="drawer" component={DrawerNavigator} options={{
              title: 'All categories',
              headerShown: false,
              contentStyle: { backgroundColor: '#3f2f25' },
            }} />
            <Stack.Screen name="Meals Overview" component={MealsOverviewScreen} />
            <Stack.Screen name="Meal Details" component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/*</FavoritesContextProvider>*/}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

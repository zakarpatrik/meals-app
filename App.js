import { Button, StyleSheet, Text } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator id="meals-navigation" screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: '#ffffff',
          contentStyle: { backgroundColor: '#3f2f25' },
        }}>
          <Stack.Screen name="Meals Categories" component={CategoriesScreen} options={{
            title: 'All Categories',
          }} />
          <Stack.Screen name="Meals Overview" component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const categoryId = route.params.categoryId;
            //   return {
            //     title: categoryId,
            //   };
            // }}
          />
          <Stack.Screen name="Meal Details" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/meal-detail/Subtitle';
import List from '../components/meal-detail/List';

const MealDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const currentMeal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    const mealTitle = currentMeal.title;

    navigation.setOptions({
      title: mealTitle,
    });
  }, [currentMeal, navigation]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: currentMeal.imageUrl }} />
      <Text style={styles.title}>{currentMeal.title}</Text>
      <MealDetails textStyle={styles.detailText} duration={currentMeal.duration} complexity={currentMeal.complexity}
                   affordability={currentMeal.affordability} />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={currentMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={currentMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: '#fff',
  },
  detailText: {
    color: '#fff',
  },
  listContainer: {
    width: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
});
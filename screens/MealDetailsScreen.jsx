import { Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';

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
    <View>
      <Text>This is the meal detail screen {mealId}</Text>
    </View>
  );
};

export default MealDetailsScreen;
import { MEALS } from '../data/dummy-data';
import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from '../components/MealItem';

const MealsOverviewScreen = ({ route }) => {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  const renderMealItem = ({ item }) => {
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return (
      <MealItem {...mealItemProps} />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} renderItem={renderMealItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
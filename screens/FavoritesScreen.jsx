import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/context/favorites-context';
import { useContext } from 'react';
import MealsList from '../components/meals-list/MealsList';
import { Text, View, StyleSheet } from 'react-native';

const FavoritesScreen = () => {
  const { ids: favoriteMealIds } = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet!</Text>
      </View>
    );
  }

  return <MealsList displayedMeals={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

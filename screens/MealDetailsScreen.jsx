import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { useLayoutEffect, useContext } from 'react';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/meal-detail/Subtitle';
import List from '../components/meal-detail/List';
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';

const MealDetailsScreen = ({ route, navigation }) => {
  const { ids: favoriteMealIds, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const mealId = route.params.mealId;
  const currentMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavorite = favoriteMealIds.includes(currentMeal.id);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      removeFavorite(mealId);
    } else {
      addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    const mealTitle = currentMeal.title;

    navigation.setOptions({
      title: mealTitle,
      headerRight: () => <IconButton icon={mealIsFavorite ? 'star' : 'star-outline'} color="#fff"
                                     onPress={changeFavoriteStatusHandler} />,
    });
  }, [currentMeal, navigation, changeFavoriteStatusHandler]);

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
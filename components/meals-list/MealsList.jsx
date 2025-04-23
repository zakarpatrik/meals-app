import MealItem from '../MealItem';
import { FlatList, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MealsList = ({ displayedMeals }) => {
  const navigation = useNavigation();
  
  const renderMealItem = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate('Meal Details', { mealId: item.id });
    };
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
      onPress: pressHandler,
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

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
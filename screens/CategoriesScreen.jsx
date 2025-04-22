import { CATEGORIES } from '../data/dummy-data';
import { FlatList, StyleSheet } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';


const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate('Meals Overview', { categoryId: item.id });
    };

    return (
      <CategoryGridTile title={item.title} color={item.color} onPress={pressHandler} />
    );
  };
  return (
    <FlatList style={styles.container} data={CATEGORIES} renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id} numColumns={2} />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
import { CATEGORIES } from '../data/dummy-data';
import { FlatList, StyleSheet } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

const renderCategoryItem = ({ item }) => {
  return (
    <CategoryGridTile title={item.title} color={item.color} />
  );
};

const CategoriesScreen = () => {
  return (
    <FlatList style={styles.container} data={CATEGORIES} renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id} numColumns={2} />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24180f',
  },
});
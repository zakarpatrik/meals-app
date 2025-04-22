import { CATEGORIES } from '../data/dummy-data';
import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

const renderCategoryItem = ({ item }) => {
  return (
    <CategoryGridTile title={item.title} />
  );
};

const CategoriesScreen = () => {
  return (
    <FlatList data={CATEGORIES} renderItem={renderCategoryItem} keyExtractor={(item) => item.id} />
  );
};

export default CategoriesScreen;
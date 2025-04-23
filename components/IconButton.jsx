import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ icon, color, onPress }) => {
  return (
    <Pressable onPress={onPress} android_ripple={{ color: '#ccc' }}
               style={({ pressed }) => pressed ? styles.pressed : null}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
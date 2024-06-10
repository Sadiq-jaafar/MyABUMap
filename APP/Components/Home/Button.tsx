import React from 'react';
import { View, StyleSheet, Button as RNButton } from 'react-native';
import { useOnPlaceClick } from '../Home/PlaceList'; // Adjust the import path as necessary

 const CustomButton = () => {
  const onPlaceClick = useOnPlaceClick();

  return (
    <View style={styles.container}>
      <RNButton
        onPress={() => {
          const dummyPlace = { id: '1', name: 'Sample Place' }; // Replace with actual place object as needed
          onPlaceClick(dummyPlace);
        }}
        title="+"
        color="green"
      />
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
});

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Banner = () => {
  return (
    <View style={styles.banner}>
      <Image source={require('../assets/banner1.png')} style={styles.image} />
      <Text style={styles.text}>
        The Workplace <Text style={styles.highlight}>where fun fuels productivity</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    marginBottom: 10,
    backgroundColor: 'rgb(0,37,60)', // Dark ocean background for the banner
    padding: 10,
    borderBottomLeftRadius: 20, // Apply radius to bottom left corner
    borderBottomRightRadius: 20, // Apply radius to bottom right corner
    overflow: 'hidden', // Ensures the image doesn't overflow the rounded corners
  },
  image: {
    width: '100%',
    height: 150, // Keep height for the image
  },
  text: {
    marginTop: 10, // Add spacing between image and text
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center', // Center-align the text
  },
  highlight: {
    color: '#FFD700', // Optional: Highlight part of the text
  },
});

export default Banner;

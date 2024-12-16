import React, { useRef } from 'react';
import {
  Animated,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // For icons
import LinearGradient from 'react-native-linear-gradient'; // For gradient backgrounds

const { width } = Dimensions.get('window'); // Get screen width

const ProfileModal = ({ visible, onClose }) => {
  const translateX = useRef(new Animated.Value(-width)).current; // Start off-screen to the left

  // Open sidebar
  React.useEffect(() => {
    if (visible) {
      Animated.timing(translateX, {
        toValue: 0, // Slide into view
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateX, {
        toValue: -width, // Slide out of view
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return (
    <Animated.View
      style={[
        styles.sidebarContainer,
        { transform: [{ translateX }] }, // Animate the position
      ]}
    >
      <LinearGradient
        colors={['rgb(0,37,60)', 'rgb(0,68,82)', 'rgb(0,128,128)']}
        style={styles.gradientBackground}
      >
        {/* Close Button */}
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeText}>X</Text>
        </TouchableOpacity>

        {/* Gradient Header */}
        <View style={styles.headerContainer}>
          {/* Profile Image */}
          <Image
            source={require('../assets/profile2.png')} // Adjust path as needed
            style={styles.profileImage}
          />

          {/* Name and Designation */}
          <View style={styles.textContainer}>
            <Text style={styles.name}>Aditya Bansode</Text>
            <Text style={styles.designation}>Software Developer</Text>
          </View>
        </View>

        {/* List Items */}
        <View style={styles.listContainer}>
          <TouchableOpacity style={styles.listItem}>
            <FontAwesome name="home" size={20} color="white" style={styles.icon} />
            <Text style={styles.listText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <FontAwesome name="users" size={20} color="white" style={styles.icon} />
            <Text style={styles.listText}>Employee Directory</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <FontAwesome name="share-alt" size={20} color="white" style={styles.icon} />
            <Text style={styles.listText}>Social</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <FontAwesome name="image" size={20} color="white" style={styles.icon} />
            <Text style={styles.listText}>Image Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <FontAwesome name="video-camera" size={20} color="white" style={styles.icon} />
            <Text style={styles.listText}>Video Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <FontAwesome name="bell" size={20} color="white" style={styles.icon} />
            <Text style={styles.listText}>Notifications</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  sidebarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: width * 0.75, // Sidebar takes 75% of screen width
    zIndex: 1000,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  gradientBackground: {
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  closeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  textContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  designation: {
    fontSize: 16,
    color: 'white',
  },
  listContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
  },
  icon: {
    marginRight: 15,
  },
  listText: {
    fontSize: 16,
    color: 'white',
  },
});

export default ProfileModal;

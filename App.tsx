// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './src/AppNavigator';

// const App = () => {
//   return (
//     <NavigationContainer>
//       <AppNavigator />
//     </NavigationContainer>
//   );
// };

// export default App;


// // App.js
// import React from 'react';
// import { SafeAreaView, StatusBar } from 'react-native';
// import HomeScreen from './src/screens/HomeScreen';

// const App = () => {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <StatusBar barStyle="light-content" backgroundColor="#004A8F" />
//       <HomeScreen />
//     </SafeAreaView>
//   );
// };

// export default App;/

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './src/AppNavigator';

// const App = () => {
//   return (
//     <NavigationContainer>
//       <AppNavigator />
//     </NavigationContainer>
//   );
// };

// export default App;


// // App.js
// import React from 'react';
// import { SafeAreaView, StatusBar } from 'react-native';
// import HomeScreen from './src/screens/HomeScreen';

// const App = () => {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <StatusBar barStyle="light-content" backgroundColor="#004A8F" />
//       <HomeScreen />
//     </SafeAreaView>
//   );
// };

// export default App;/
// import React, { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from './src/screens/HomeScreen'; // Import HomeScreen
// import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Optional: For Icons
// import { TouchableOpacity, StyleSheet } from 'react-native';
// import ProfileModal from './src/components/ProfileModal'; // Import ProfileModal

// const Tab = createBottomTabNavigator();

// const headerStyle = {
//   backgroundColor: 'rgb(0,37,60)', // Base color for the header (dark ocean)
//   background: 'linear-gradient(90deg, rgba(0,37,60,1) 0%, rgba(0,68,82,1) 50%, rgba(0,128,128,1) 100%)', // Dark ocean gradient for header
// };

// const footerStyle = {
//   backgroundColor: 'rgb(0,37,60)', // Base color for the footer (dark ocean)
//   background: 'linear-gradient(90deg, rgba(0,37,60,1) 0%, rgba(0,68,82,1) 50%, rgba(0,128,128,1) 100%)', // Dark ocean gradient for footer
// };

// export default function App() {
//   // State to control the modal visibility
//   const [modalVisible, setModalVisible] = useState(false);

//   // Function to handle opening the modal when Profile is clicked
//   const handleProfileClick = () => {
//     setModalVisible(true); // Open the modal when Profile tab is clicked
//   };

//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{
//           headerStyle: headerStyle, // Apply header gradient
//           headerTintColor: '#fff', // Header text color
//           headerTitleStyle: {
//             fontWeight: 'bold', // Header title style
//           },
//           headerRight: () => (
//             <TouchableOpacity
//               style={{ paddingRight: 15 }} // Add some right padding to space the icon
//               onPress={() => console.log("Search Icon Clicked")} // Add your search function here
//             >
//               <FontAwesome name="search" size={20} color="#fff" />
//             </TouchableOpacity>
//           ),
//           tabBarStyle: footerStyle, // Apply footer gradient
//         }}
//       >
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <FontAwesome name="home" size={size} color={color} />
//             ),
//             headerTitle: 'Home',  // Custom header title
//             tabBarButton: (props) => (
//               <TouchableOpacity {...props} style={styles.tabButton}>
//                 <FontAwesome name="home" size={25} color="#fff" />
//               </TouchableOpacity>
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Feed"
//           component={HomeScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <FontAwesome name="newspaper-o" size={size} color={color} />
//             ),
//             headerTitle: 'Feed',  // Custom header title
//             tabBarButton: (props) => (
//               <TouchableOpacity {...props} style={styles.tabButton}>
//                 <FontAwesome name="newspaper-o" size={25} color="#fff" />
//               </TouchableOpacity>
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Search"
//           component={HomeScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <FontAwesome name="search" size={size} color={color} />
//             ),
//             headerTitle: 'Search',  // Custom header title
//             tabBarButton: (props) => (
//               <TouchableOpacity {...props} style={styles.tabButton}>
//                 <FontAwesome name="search" size={25} color="#fff" />
//               </TouchableOpacity>
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={HomeScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <FontAwesome name="user" size={size} color={color} />
//             ),
//             headerTitle: 'Profile',  // Custom header title
//             tabBarButton: (props) => (
//               <TouchableOpacity
//                 {...props}
//                 style={styles.tabButton}
//                 onPress={handleProfileClick} // Open the modal on press
//               >
//                 <FontAwesome name="user" size={25} color="#fff" />
//               </TouchableOpacity>
//             ),
//           }}
//         />
//       </Tab.Navigator>

//       {/* Use the ProfileModal component */}
//       <ProfileModal
//         visible={modalVisible}
//         onClose={() => setModalVisible(false)} // Close the modal
//       />
//     </NavigationContainer>
//   );
// }

// // Styles for the bottom tab buttons and content
// const styles = StyleSheet.create({
//   tabButton: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingBottom: 10,  // Align icons better
//   },
// });

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen'; // Import HomeScreen
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Optional: For Icons
import { TouchableOpacity, TextInput, StyleSheet, View } from 'react-native';
import ProfileModal from './src/components/ProfileModal'; // Import ProfileModal

const Tab = createBottomTabNavigator();

const headerStyle = {
  backgroundColor: 'rgb(0,37,60)', // Base color for the header (dark ocean)
  background: 'linear-gradient(90deg, rgba(0,37,60,1) 0%, rgba(0,68,82,1) 50%, rgba(0,128,128,1) 100%)', // Dark ocean gradient for header
};

const footerStyle = {
  backgroundColor: 'rgb(0,37,60)', // Base color for the footer (dark ocean)
  background: 'linear-gradient(90deg, rgba(0,37,60,1) 0%, rgba(0,68,82,1) 50%, rgba(0,128,128,1) 100%)', // Dark ocean gradient for footer
};

export default function App() {
  const [modalVisible, setModalVisible] = useState(false); // Modal visibility state
  const [searchVisible, setSearchVisible] = useState(false); // Toggle visibility of search input
  const [searchQuery, setSearchQuery] = useState(''); // Store search input text

  // Function to handle opening the modal when Profile is clicked
  const handleProfileClick = () => {
    setModalVisible(true); // Open the modal when Profile tab is clicked
  };

  // Function to toggle search visibility
  const handleSearchClick = () => {
    setSearchVisible(!searchVisible); // Toggle search input visibility
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: headerStyle, // Apply header gradient
          headerTintColor: '#fff', // Header text color
          headerTitleStyle: {
            fontWeight: 'bold', // Header title style
          },
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {/* If search input is not visible, show the search icon */}
              {!searchVisible ? (
                <TouchableOpacity
                  style={{ paddingRight: 15 }} // Add some right padding to space the icon
                  onPress={handleSearchClick} // Toggle search input visibility
                >
                  <FontAwesome name="search" size={20} color="#fff" />
                </TouchableOpacity>
              ) : (
                // If search input is visible, show the input field
                <TextInput
                  style={styles.searchInput}
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  placeholder="Search..."
                  placeholderTextColor="#ccc"
                  autoFocus
                />
              )}
            </View>
          ),
          tabBarStyle: footerStyle, // Apply footer gradient
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
            headerTitle: 'Sciqus',  // Custom header title
          }}
        />
        <Tab.Screen
          name="Feed"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="newspaper-o" size={size} color={color} />
            ),
            headerTitle: 'Feed',  // Custom header title
          }}
        />
        <Tab.Screen
          name="Search"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="search" size={size} color={color} />
            ),
            headerTitle: 'Search',  // Custom header title
          }}
        />
        <Tab.Screen
          name="Profile"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" size={size} color={color} />
            ),
            headerTitle: 'Profile',  // Custom header title
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                style={styles.tabButton}
                onPress={handleProfileClick} // Open the modal on press
              >
                <FontAwesome name="user" size={25} color="#fff" />
              </TouchableOpacity>
            ),
          }}
        />
      </Tab.Navigator>

      {/* Use the ProfileModal component */}
      <ProfileModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)} // Close the modal
      />
    </NavigationContainer>
  );
}

// Styles for the bottom tab buttons and content
const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,  // Align icons better
  },
  searchInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 15,
    width: 150, // Control the width of the input field
  },
});

// // src/components/NewStarters.js
// import React from 'react';
// import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
// import commonStyles from '../styles/commonStyles';

// const NewStarters = () => {
//   const starters = [
//     {
//       id: '1',
//       name: 'Tina P.',
//       role: 'Marketing Lead',
//       image: require('../assets/profile.png'),
//     },
//     {
//       id: '2',
//       name: 'John D.',
//       role: 'Software Engineer',
//       image: require('../assets/profile.png'),
//     },
//     {
//       id: '3',
//       name: 'Emma W.',
//       role: 'Product Manager',
//       image: require('../assets/profile.png'),
//     },
//   ];

//   return (
//     <View>
//       <Text style={commonStyles.sectionTitle}>New Starters</Text>
//       <FlatList
//         data={starters}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={[commonStyles.card, styles.starterCard]}>
//             <Image source={item.image} style={styles.profileImage} />
//             <View>
//               <Text style={commonStyles.textPrimary}>{item.name}</Text>
//               <Text style={commonStyles.textSecondary}>{item.role}</Text>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   starterCard: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: 250, // Define a fixed width for the card
//     marginRight: 10,
//   },
//   profileImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 10,
//   },
// });

// export default NewStarters;

import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';
import commonStyles from '../styles/commonStyles';

const NewStarters = () => {
  const [selectedStarter, setSelectedStarter] = useState(null);

  const starters = [
    {
      id: '1',
      name: 'Aditya Bansode',
      role: 'Software Engineer',
      image: require('../assets/profile2.png'),
      department: 'Development',
      joinedDate: '2024-12-09',
    },
    {
      id: '2',
      name: 'Rohan',
      role: 'Marketing Lead',
      image: require('../assets/profile.png'),
      department: 'Marketing',
      joinedDate: '2023-11-15',
    },
    {
      id: '3',
      name: 'Emma W.',
      role: 'Product Manager',
      image: require('../assets/lady.png'),
      department: 'Product',
      joinedDate: '2023-12-05',
    },
  ];

  const openModal = (starter) => {
    setSelectedStarter(starter);
  };

  const closeModal = () => {
    setSelectedStarter(null);
  };

  return (
    <View>
      <Text style={commonStyles.sectionTitle}>New Starters</Text>
      <FlatList
        data={starters}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[commonStyles.card, styles.starterCard]}
            onPress={() => openModal(item)}
          >
            <Image source={item.image} style={styles.profileImage} />
            <View>
              <Text style={commonStyles.textPrimary}>{item.name}</Text>
              <Text style={commonStyles.textSecondary}>{item.role}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      {/* Popup Modal */}
      {selectedStarter && (
        <Modal
          transparent
          visible={!!selectedStarter}
          animationType="slide"
          onRequestClose={closeModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Image source={selectedStarter.image} style={styles.modalImage} />
              <Text style={styles.modalName}>{selectedStarter.name}</Text>
              <Text style={styles.modalRole}>{selectedStarter.role}</Text>
              <Text style={styles.modalDetails}>
                Department: {selectedStarter.department}
              </Text>
              <Text style={styles.modalDetails}>
                Joined: {selectedStarter.joinedDate}
              </Text>
              <Button title="Close" onPress={closeModal} />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  starterCard: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 250,
    marginRight: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  modalImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  modalName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  modalRole: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  modalDetails: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
});

export default NewStarters;

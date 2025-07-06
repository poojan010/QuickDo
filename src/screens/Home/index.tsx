import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/NavigationRoutes';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tile}
        onPress={() => navigation.navigate('WhatsAppChat')}
      >
        <Text style={styles.text}>WhatsApp Chat</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tile}
        onPress={() => navigation.navigate('ColdEmail')}
      >
        <Text style={styles.text}>Cold Email</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

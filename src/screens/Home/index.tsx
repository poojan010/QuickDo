import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import AppView from '@components/AppView';
import AppButton from '@components/AppButton';
import { RootStackParamList } from '@app-types/NavigationRoutes';

import styles from './styles';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <AppView bg="background" style={styles.container}>
      <AppButton
        title="WhatsApp Chat"
        onPress={() => navigation.navigate('WhatsAppChat')}
        style={styles.button}
      />
      <AppButton
        title="Cold Email"
        onPress={() => navigation.navigate('ColdEmail')}
        style={styles.button}
      />
    </AppView>
  );
};

export default HomeScreen;

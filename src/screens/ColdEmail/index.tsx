import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/NavigationRoutes';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'ColdEmail'>;

const ColdEmailScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cold Email UI coming soon...</Text>
    </View>
  );
};

export default ColdEmailScreen;

import React, { useState } from 'react';
import {
  TextInput,
  Alert,
  Linking,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import AppView from '@components/AppView';
import AppText from '@components/AppText';
import AppButton from '@components/AppButton';
import styles from './styles';

const WhatsAppChatScreen = () => {
  const [phone, setPhone] = useState('');

  const handleOpenChat = async () => {
    const phoneNumber = phone.replace(/[^0-9]/g, '');

    if (!phoneNumber || phoneNumber.length < 10) {
      Alert.alert('Invalid phone number', 'Please enter a valid number.');
      return;
    }

    const url = `https://wa.me/${phoneNumber}`;
    const canOpen = await Linking.canOpenURL(url);

    if (canOpen) {
      Linking.openURL(url);
    } else {
      Alert.alert('Error', 'Unable to open WhatsApp chat.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: 'padding', android: undefined })}>
      <AppView bg="background" style={styles.container}>
        <AppText type="title" color="primary">
          WhatsApp Chat
        </AppText>

        <TextInput
          placeholder="Enter phone number"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
        />

        <AppButton
          title="Open Chat"
          onPress={handleOpenChat}
          style={styles.button}
        />
      </AppView>
    </KeyboardAvoidingView>
  );
};

export default WhatsAppChatScreen;

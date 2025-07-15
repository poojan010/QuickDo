import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  StyleProp,
} from 'react-native';
import AppText from '@components/AppText';
import Colors from '@theme/colors';
import Spacing from '@theme/spacing';

type ButtonVariant = 'primary' | 'secondary';

interface AppButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: ButtonVariant;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
}

const AppButton: React.FC<AppButtonProps> = ({
  title,
  variant = 'primary',
  loading = false,
  disabled,
  style,
  ...rest
}) => {
  const isPrimary = variant === 'primary';

  const buttonStyles = [
    styles.base,
    isPrimary ? styles.primary : styles.secondary,
    disabled && styles.disabled,
    style,
  ];

  const textColor = isPrimary ? 'white' : 'primary';

  return (
    <TouchableOpacity
      style={buttonStyles}
      activeOpacity={0.8}
      disabled={disabled || loading}
      {...rest}>
      {loading ? (
        <ActivityIndicator color={Colors[textColor]} />
      ) : (
        <AppText type="action" color={textColor}>
          {title}
        </AppText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  secondary: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default AppButton;

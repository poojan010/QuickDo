import { StyleSheet } from 'react-native';
import Spacing from '@theme/spacing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.base,
  },
  button: {
    width: '100%',
    marginVertical: Spacing.sm,
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import Spacing from '@theme/spacing';
import Colors from '@theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.lg,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.divider,
    borderRadius: 6,
    padding: Spacing.sm,
    marginTop: Spacing.lg,
    marginBottom: Spacing.md,
    color: Colors.textPrimary,
    backgroundColor: Colors.surface,
  },
  button: {
    marginTop: Spacing.md,
  },
});

export default styles;

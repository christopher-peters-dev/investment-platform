import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../tokens/colors';
import { spacing } from '../tokens/spacing';
export function AppDivider() {
  return <View style={styles.divider} />;
}
const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.lg,
  },
});

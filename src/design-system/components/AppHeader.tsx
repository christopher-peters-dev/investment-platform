import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from './AppText';
import { AppButton } from './AppButton';
import { spacing } from '../tokens/spacing';
export function AppHeader({
  title,
  subtitle,
  onBack,
  backLabel = '‹ Back to portfolio',
}: {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  backLabel?: string;
}) {
  return (
    <View style={styles.header}>
      {onBack && (
        <AppButton
          title={backLabel}
          variant="secondary"
          onPress={onBack}
          style={styles.back}
        />
      )}
      <AppText variant="title" accessibilityRole="header">
        {title}
      </AppText>
      {subtitle && (
        <AppText tone="muted" style={styles.subtitle}>
          {subtitle}
        </AppText>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  header: { padding: spacing.xl },
  subtitle: { marginTop: spacing.sm },
  back: { alignSelf: 'flex-start', marginBottom: spacing.lg },
});

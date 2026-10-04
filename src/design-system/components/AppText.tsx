import React from 'react';
import { Text, type TextProps } from 'react-native';
import { colors } from '../tokens/colors';
import { typography } from '../tokens/typography';

interface Props extends TextProps {
  variant?: keyof typeof typography;
  tone?: 'default' | 'muted' | 'gain' | 'loss' | 'inverse';
}
const tones = {
  default: colors.ink,
  muted: colors.muted,
  gain: colors.gain,
  loss: colors.loss,
  inverse: colors.onPrimary,
};
export function AppText({
  variant = 'body',
  tone = 'default',
  style,
  ...props
}: Props) {
  return (
    <Text
      {...props}
      style={[typography[variant], { color: tones[tone] }, style]}
    />
  );
}

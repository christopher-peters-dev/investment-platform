import type { TextStyle } from 'react-native';
export const typography = {
  title: { fontSize: 28, lineHeight: 35, fontWeight: '700' },
  heading: { fontSize: 20, lineHeight: 27, fontWeight: '700' },
  value: { fontSize: 30, lineHeight: 38, fontWeight: '700' },
  body: { fontSize: 15, lineHeight: 22, fontWeight: '400' },
  label: { fontSize: 13, lineHeight: 19, fontWeight: '600' },
  caption: { fontSize: 12, lineHeight: 18, fontWeight: '400' },
} satisfies Record<string, TextStyle>;

export type FontWeight = 'regular' | 'medium' | 'bold';

export const FontFamily = {
  regular: 'System',
  medium: 'System',
  bold: 'System',
};

export const Typography = {
  title: {
    fontSize: 22,
    fontWeight: 'bold' as FontWeight,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'medium' as FontWeight,
  },
  body: {
    fontSize: 14,
    fontWeight: 'regular' as FontWeight,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold' as FontWeight,
  },
  caption: {
    fontSize: 12,
    fontWeight: 'regular' as FontWeight,
  },
  action: {
    fontSize: 14,
    fontWeight: 'medium' as FontWeight,
  },
};

export type TypographyKey = keyof typeof Typography;

import React from 'react';
import { Text, TextProps, TextStyle, StyleProp } from 'react-native';

import Colors from '@theme/colors';
import { Typography } from '@theme/typography';

type TypographyType = keyof typeof Typography;
type ColorType = keyof typeof Colors;

type AppTextProps = TextProps & {
  type?: TypographyType; // e.g. 'title', 'body'
  color?: ColorType; // e.g. 'white', 'primary'
  style?: StyleProp<TextStyle>;
};

const AppText: React.FC<AppTextProps> = ({
  children,
  type = 'body',
  color = 'textPrimary',
  style,
  ...rest
}) => {
  const textStyle: TextStyle = {
    ...(Typography[type] || {}),
    color: Colors[color],
  };

  return (
    <Text style={[textStyle, style]} {...rest}>
      {children}
    </Text>
  );
};

export default AppText;

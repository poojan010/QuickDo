import React from 'react';
import { View, ViewProps, StyleProp, ViewStyle } from 'react-native';

import Colors from '@theme/colors';

type AppViewProps = ViewProps & {
  bg?: keyof typeof Colors; // e.g. 'white', 'primary'
  style?: StyleProp<ViewStyle>;
};

const AppView: React.FC<AppViewProps> = ({ bg, style, children, ...rest }) => {
  const backgroundStyle: ViewStyle = bg ? { backgroundColor: Colors[bg] } : {};
  return (
    <View style={[backgroundStyle, style]} {...rest}>
      {children}
    </View>
  );
};

export default AppView;

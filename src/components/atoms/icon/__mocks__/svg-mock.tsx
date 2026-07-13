import * as React from 'react';
import { View } from 'react-native';

/** Jest stand-in for SVG modules transformed by react-native-svg-transformer. */
export default function SvgMock(props: Record<string, unknown>) {
  return <View {...props} />;
}

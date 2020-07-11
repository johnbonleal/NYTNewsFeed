import React from 'react';
import { View } from 'react-native';

interface DividerProps {
  width?: number;
}

const Divider: React.SFC<DividerProps> = ({ width = 24 }) => <View style={{ width }} />;

export default Divider;

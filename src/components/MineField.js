/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';

import Field from './Field';

export default props => {
  const rows = props.board.map((row, r) => {
    const columns = row.map((field, c) => {
      return <Field {...field} key={c} />;
    });
    return (
      <View key={r} style={styles.eixo}>
        {columns}
      </View>
    );
  });
  return <View style={styles.container}>{rows}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
  },
  eixo: {
    flexDirection: 'row',
  },
});

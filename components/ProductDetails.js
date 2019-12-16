import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderColor: 'green',
    borderWidth: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
  },
});

export default class ProductDetails extends React.Component {
  render = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>DetailsScreen</Text>
      </View>
    );
  };
}

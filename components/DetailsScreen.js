import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    // Man skal altid angive størrelsen på billeeder som loades fra netværk
    image: {
        width: 200,
        height: 200,
        marginRight: 10,
    },
    container: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 24,
    },
});

export default class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: 'https://www.primusdanmark.dk/12392-large_default/rex-120-slibemaskine.jpg' }} />
                <Text style={styles.header}>
                    REX120 Multi slibemaskine
                </Text>
                <Text>Pris: 50 kr/t</Text>
                <Text>Kategori: Værktøj</Text>
                <Text>Beksrivelse: Virker til træ, sten, fliser, polering mm.</Text>
            </View>
        );
    }
}

/*const styles = StyleSheet.create({
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

export default class DetailsScreen extends React.Component {
  render = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>DetailsScreen</Text>
      </View>
    );
  };
}
*/
/* Hardcoded class that contains details about one of the products
*/

import * as React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const styles = StyleSheet.create({
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
        fontSize: 30,
    },
    text: {
        fontSize: 15,
        marginTop: 15,
        fontWeight: 'bold',
    },
});

export default class Sander extends React.Component {
    goToLocation = () => {
        this.props.navigation.navigate('Location');
    };
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: 'https://www.primusdanmark.dk/12392-large_default/rex-120-slibemaskine.jpg' }} />
                <Text style={styles.header}>
                    REX120 Multi slibemaskine
                </Text>
                <Text style={styles.text}>Pris:</Text>
                <Text>50 kr/t</Text>
                <Text style={styles.text}>Kategori:</Text>
                <Text>Værktøj</Text>
                <Text style={styles.text}>Beskrivelse:</Text>
                <Text>Virker til træ, sten, fliser, polering mm.</Text>
                <Button title="Se lokation" onPress={this.goToLocation} />
            </View>
        );
    }
}
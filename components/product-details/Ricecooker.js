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


export default class Ricecooker extends React.Component {
    goToLocation = () => {
        this.props.navigation.navigate('Location');
    };
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: 'https://www.elgiganten.dk/image/dv_web_D18000100246115/FUN179680/funktion-riskoger-fun179680.jpg?$prod_all4one$' }} />
                <Text style={styles.header}>
                    Funktion riskoger
                </Text>
                <Text style={styles.text}>Pris:</Text>
                <Text>20 kr/t</Text>
                <Text style={styles.text}>Kategori:</Text>
                <Text>Køkken</Text>
                <Text style={styles.text}>Beskrivelse:</Text>
                <Text>Volume 1.8L</Text>
                <Button title="Se lokation" onPress={this.goToLocation} />
            </View>
        );
    }
}
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

export default class Volta extends React.Component {
    goToLocation = () => {
        this.props.navigation.navigate('Location');
    };
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: 'https://www.elgiganten.dk/image/dv_web_D18000100282143/UEG42EB/volta-easygo-stoevsuger-ueg42eb.jpg?$prod_all4one$' }} />
                <Text style={styles.header}>
                    Volta easyGo Støvsuger
                </Text>
                <Text style={styles.text}>Pris:</Text>
                <Text>10 kr/t</Text>
                <Text style={styles.text}>Kategori:</Text>
                <Text>Rengøring</Text>
                <Text style={styles.text}>Beskrivelse:</Text>
                <Text>Nyisat pose</Text>
                <Button title="Se lokation" onPress={this.goToLocation} />
            </View>
        );
    }
}
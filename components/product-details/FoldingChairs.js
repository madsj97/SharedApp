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

export default class FoldingChairs extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: 'https://www.harald-nyborg.dk/media/images/800/4955_589169.jpg' }} />
                <Text style={styles.header}>
                    Klapstole
                </Text>
                <Text style={styles.text}>Pris:</Text>
                <Text>10 kr/t</Text>
                <Text style={styles.text}>Kategori:</Text>
                <Text>Møbler</Text>
                <Text style={styles.text}>Beskrivelse:</Text>
                <Text>6 stk</Text>
                <Button title="Se lokation" onPress={this.goToLocation} />
            </View>
        );
    }
}
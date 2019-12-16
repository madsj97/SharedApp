import * as React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

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
        fontSize: 30,
    },
    text: {
        fontSize: 15,
        marginTop: 15,
        fontWeight: 'bold',
    },
});

export default class Makita extends React.Component {
    goToLocation = () => {
        this.props.navigation.navigate('Location');  
    };
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: 'https://resources-stark.impactlive.net/assets/70214.jpg?id=1562625692&mode=pad&anchor=middlecenter&width=400&height=400&scale=both' }} />
                <Text style={styles.header}>
                    Makita Løvblæser
                </Text>
                <Text style={styles.text}>Pris:</Text>
                <Text>30 kr/t</Text>
                <Text style={styles.text}>Kategori:</Text>
                <Text>Værktøj</Text>
                <Text style={styles.text}>Beskrivelse:</Text>
                <Text>Ekstra batteri og lader med</Text>
                <Button title="Se lokation" onPress={this.goToLocation}/>
            </View>
        );
    }
}
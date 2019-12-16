import * as React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        marginRight: 10,
        marginBottom: 25,
    },
    container: {
        borderColor: 'white',
        borderWidth: 20,
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        textAlign: 'justify',
        fontWeight: 'bold',
        fontSize: 25,
        padding: 10,
    },
    button: {
        fontSize: 30,
    },
});

export default class HomeScreen extends React.Component {
    handleGoToAllProducts = () => {
        this.props.navigation.navigate('AllProducts');
    };
    handleGoToCreateProduct = () => {
        this.props.navigation.navigate('CreateProduct')
    };
    render = () => {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('../assets/sharedlogo.png')} />
                <Text style={styles.text}>JyllingeCommunity{"\n"}</Text>
                <Button style={styles.button} title="Alle produkter" onPress={this.handleGoToAllProducts} />
                <Button title="Opret ny vare" onPress={this.handleGoToCreateProduct}/>
            </View>
        );
    };
}

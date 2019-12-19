import * as React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        borderColor: 'white',
        borderWidth: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 50,
    },
    textInput: {
        width: '90%',
        height: 42,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#fff',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginLeft: 17,
        marginBottom: 10,
    },
});

export default class NewProductInfo extends React.Component {
    handleGoToHome = () => {
        this.props.navigation.navigate('Home');
    };
    render = () => {
        return (
            <View styles={styles.container}>
                <TextInput placeholder="Produkt-navn" style={styles.textInput} />
                <TextInput placeholder="Pris pr time" style={styles.textInput} />
                <TextInput placeholder="Kategori" style={styles.textInput} />
                <TextInput placeholder="Beskrivelse" style={styles.textInput} />
                <TextInput placeholder="Lokation" style={styles.textInput} />
                <Button title="Tilføj produktet" onPress={this.handleGoToHome} />
            </View>
        )
    }
}
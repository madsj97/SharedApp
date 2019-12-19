import * as React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'

const styles = StyleSheet.create({
    container: {
        borderColor: 'white',
        borderWidth: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 20,
    },
    image: {
        width: 5,
        height: 5,
        resizeMode: 'cover',
        marginRight: 10,
    },
});

const list = [
    {
        name: 'Volta easyGo Støvsuger',
        avatar_url: 'https://www.elgiganten.dk/image/dv_web_D18000100282143/UEG42EB/volta-easygo-stoevsuger-ueg42eb.jpg?$prod_all4one$',
        subtitle: 'Med ny pose i',
        screen: 'Volta'
    },
    {
        name: 'Makita Løvblæser',
        avatar_url: 'https://resources-stark.impactlive.net/assets/70214.jpg?id=1562625692&mode=pad&anchor=middlecenter&width=400&height=400&scale=both',
        subtitle: 'Ekstra batteri og lader med',
        screen: 'Makita'
    },
    {
        name: 'Klapstole',
        avatar_url: 'https://www.harald-nyborg.dk/media/images/800/4955_589169.jpg',
        subtitle: '6 stk',
        screen: 'FoldingChairs'
    },
    {
        name: 'REX120 Multi slibemaskine',
        avatar_url: 'https://www.primusdanmark.dk/12392-large_default/rex-120-slibemaskine.jpg',
        subtitle: 'Til træ, sten, fliser, polering mm.',
        screen: 'Sander'
    },
    {
        name: 'Funktion riskoger',
        avatar_url: 'https://www.elgiganten.dk/image/dv_web_D18000100246115/FUN179680/funktion-riskoger-fun179680.jpg?$prod_all4one$',
        subtitle: 'Volume 1.8L',
        screen: 'Ricecooker'
    },
]

export default class AllProductsScreen extends React.Component {
    handleGoToProductDetails(screen) {
        this.props.navigation.navigate(screen)
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <TouchableOpacity>
            <ListItem
                title={item.name}
                subtitle={item.subtitle}
                leftAvatar={{ source: { uri: item.avatar_url } }}
                bottomDivider
                chevron
                onPress={() => this.handleGoToProductDetails(item.screen)}
            />
        </TouchableOpacity>
    )

    render() {
        return (
            <FlatList
                keyExtractor={this.keyExtractor}
                data={list}
                renderItem={this.renderItem}
            />
        )
    }

}
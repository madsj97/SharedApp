import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { ListItem } from 'react-native-elements';

const list = [
    {
        name: 'Min profil',
    },
    {
        name: 'Ordrehistorik',
    },
    {
        name: 'Mine produkter',
    },
    {
        name: 'Kontakt vores support',
    },
    {
        name: 'Log ud',
    },
]

const styles = StyleSheet.create({
    list: {
        
    },
});

export default class SettingsScreen extends React.Component {
    handleGoToDetails = () => {
        this.props.navigation.navigate('Details');
    };

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <TouchableOpacity>
            <ListItem 
                title={item.name}
                bottomDivider
                chevron
            />
        </TouchableOpacity>
    )
    render = () => {
        return (
            <FlatList
                style={styles.list}
                keyExtractor={this.keyExtractor}
                data={list}
                renderItem={this.renderItem}
            />
        );
    };
}

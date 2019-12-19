import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class LocationExample extends React.Component {
    state = {
        // Har brugeren acceperet lokation?
        hasLocationPermission: null,
        // Nuværende lokation
        currentLocation: null,
        // De markører som brugeren har sat
        userMarkerCoordinates: [],
        // Koordinatet på valgte markør
        selectedCoordinate: null,
        // Adressen på valgte markør
        selectedAddress: null,
    };

    getLocationPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        this.setState({ hasLocationPermission: status });
    };

    componentDidMount = async () => {
        await this.getLocationPermission();
    };


    handleSelectMarker = coordinate => {
        this.setState({ selectedCoordinate: coordinate });
        this.findAddress(coordinate);
    };

    // Vi finder en adresse, og sætter denne i state
    findAddress = async coordinate => {
        const [selectedAddress] = await Location.reverseGeocodeAsync(coordinate);
        this.setState({ selectedAddress });
    };

    // Vi tømmer adresse og koordinat, og dermed har infoboksen ingen data
    closeInfoBox = () =>
        this.setState({ selectedCoordinate: null, selectedAddress: null });

    renderCurrentLocation = () => {
        const { hasLocationPermission, currentLocation } = this.state;
        // Brugeren har ikke taget stilling. vi viser ingen ting
        if (hasLocationPermission === null) {
            return null;
        }
        // Brugeren har sagt nej, vi viser en fejl
        if (hasLocationPermission === false) {
            return <Text>No location access. Go to settings to change</Text>;
        }
        // Vi viser den modtagne lokation
        return (
            <View>
                {currentLocation && (
                    <Text>
                        {`${currentLocation.latitude}, ${
                            currentLocation.longitude
                            } accuracy:${currentLocation.accuracy}`}
                    </Text>
                )}
            </View>
        );
    };

    render() {
        const {
            userMarkerCoordinates,
            selectedCoordinate,
            selectedAddress,
        } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                {this.renderCurrentLocation()}
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    showsUserLocation
                    region={{
                        latitude: 55.684082,
                        longitude: 12.528108,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,

                    }}>
                    {/* Vi indsætter nogle hardkodede markører på kortet*/}
                    <Marker
                        coordinate={{ latitude: 55.681747, longitude: 12.529662 }}
                        title=""
                        description="Solbjerg Plads 3, 2000 Frederiksberg"
                    />
                    {/* Her løber vi alle koordinater på markørerne fra state, igennem og tilføjer Marker elementer på kortet */}
                    {userMarkerCoordinates.map((coordinate, index) => (
                        <Marker
                            coordinate={coordinate}
                            // Vi bruger index som key
                            key={index.toString()}
                            // Vi opretter en funktion, som kalder vores handleSelectMarker med koordinatet markøren
                            onPress={() => this.handleSelectMarker(coordinate)}
                        />
                    ))}
                </MapView>
                {/* Vi viser kun infoboksen hvis der er valgt en markør */}

                {selectedCoordinate && (
                    <View style={styles.infoBox}>
                        <Text style={styles.infoText}>
                            {selectedCoordinate.latitude}, {selectedCoordinate.longitude}
                        </Text>
                        {/* Vi viser kun adressen hvis der kommet data retur fra reverse geocode, og selectedAddress er sat i state*/}
                        {selectedAddress && (
                            <Text style={styles.infoText}>
                                {selectedAddress.name} {selectedAddress.postalCode}
                            </Text>
                        )}
                        <Button title="close" onPress={this.closeInfoBox} />
                    </View>
                )}
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    map: { 
        flex: 1 
    },
    infoBox: {
        height: 100,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    infoText: {
        fontSize: 20,
    },
});

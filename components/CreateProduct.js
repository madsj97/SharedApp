import * as React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView,
    Linking,
    Platform,
    IntentLauncherAndroid,
    Button,
    Image,
    CameraRoll, 
} from 'react-native';
import Constants from 'expo-constants';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

function openSettings() {
    if (Platform.OS == 'ios') {
        Linking.openURL('app-settings:');
    } else {
        IntentLauncherAndroid.startActivityAsync(
            IntentLauncherAndroid.ACTION_LOCATION_SOURCE_SETTINGS
        );
    }
}

export default class CreateProduct extends React.Component {

    cameraRef = React.createRef();

    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    }

    componentDidMount() {
        this.updateCameraPermission();
        this.updateCameraRollPermission();
    }

    updateCameraPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    };

    updateCameraRollPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        this.setState({ hasCameraRollPermission: status === 'granted' });
    };


    useFrontCamera = () => this.setState({ type: Camera.Constants.Type.front });
    useBackCamera = () => this.setState({ type: Camera.Constants.Type.back });

    handleTakePhoto = async () => {
        if (!this.cameraRef.current) {
            return;
        }
        const result = await this.cameraRef.current.takePictureAsync();
        console.log({ result });
        this.setState({ lastPhoto: result.uri });
        await this.handleSaveToCameraRoll(result.uri);
        this.props.navigation.navigate('NewProduct');
    };

    handleSaveToCameraRoll = async uri => {
        console.log(1);
        try {
            const result = await CameraRoll.saveToCameraRoll(uri, 'photo');
        } catch (error) {
            console.error(error);
        }
    };

    renderCameraView() {
        const { hasCameraPermission, type } = this.state;
        // Vi ingenting så længe vi venter på input fra bruger
        if (hasCameraPermission === null) {
            return <View />;
        }
        // Vis en fejlbesked og en knap til settings hvis brugeren ikke har accepteret adgang
        if (hasCameraPermission === false) {
            return (
                <View>
                    <Text>No access to camera.</Text>
                    <Button title="Go to settings" onPress={openSettings} />
                </View>
            );
        }
        // Vis kamera preview og knapper. Vis en "Front" eller "Back" knap afhængig af state
        return (
            <View>
                {type === Camera.Constants.Type.back && (
                    <Button title="Front camera" onPress={this.useFrontCamera} />
                )}
                {type === Camera.Constants.Type.front && (
                    <Button title="Back camera" onPress={this.useBackCamera} />
                )}
                <Camera style={styles.cameraView} type={type} ref={this.cameraRef}>
                    
                </Camera>
                <Button title="Take photo" onPress={this.handleTakePhoto} />
            </View>
        );
    }

    render = () => {
        return (
            
            <SafeAreaView style={styles.container}>
                <View>{this.renderCameraView()}</View>
            </SafeAreaView>
        );
    };
    
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    cameraView: {
        aspectRatio: 0.8,
        width: '100%',
    },
});

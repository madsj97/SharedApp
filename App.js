import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Image, StyleSheet } from 'react-native';
import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import DetailsScreen from './components/DetailsScreen';
import AllProductsScreen from './components/AllProductsScreen';
import CreateProduct from './components/CreateProduct';
import NewProductInfo from './components/NewProductInfo';
import ProductDetails from './components/ProductDetails';
import Volta from './components/product-details/Volta';
import FoldingChairs from './components/product-details/FoldingChairs';
import Makita from './components/product-details/Makita';
import Sander from './components/product-details/Sander';
import Ricecooker from './components/product-details/Ricecooker';
import LocationExample from './components/product-location/LocationExample';


const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen },
});

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  AllProducts: { screen: AllProductsScreen },
  CreateProduct: { screen: CreateProduct },
  NewProduct: { screen: NewProductInfo },
  ProductDetails: { screen: ProductDetails},
  Details: { screen: DetailsScreen },
  Volta: { screen: Volta},
  FoldingChairs: { screen: FoldingChairs},
  Makita: { screen: Makita},
  Sander: { screen: Sander},
  Ricecooker: { screen: Ricecooker},
  Location: { screen: LocationExample}
});

const styles = StyleSheet.create({
  tabIcon: {
    width: 32,
    height: 32,
  },
});

function getTabBarIcon(routeName, color) {
  switch (routeName) {
    case 'Hjem':
      return (
        <Image
          style={[styles.tabIcon, { tintColor: color }]}
          source={require('./assets/iconfinder_home_126572.png')}
        />
      );
    case 'Indstillinger':
      return (
        <Image
          style={[styles.tabIcon, { tintColor: color }]}
          source={require('./assets/iconfinder_cog-settings-alt_353407.png')}
        />
      );
    default:
      return null;
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Hjem: HomeStack,
    Indstillinger: SettingsStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        tabBarIcon: ({ tintColor }) => {
          return getTabBarIcon(navigation.state.routeName, tintColor);
        },
      };
    },
  }
);

export default createAppContainer(TabNavigator);


/*export default function App() {
  componentWillMount() {
    apiKey: "AIzaSyCYKLAaOMOhGQRwJLtcI5eHXxk7L5o8IlU",
    authDomain: "shared-ae98f.firebaseapp.com",
    databaseURL: "https://shared-ae98f.firebaseio.com",
    projectId: "shared-ae98f",
    storageBucket: "shared-ae98f.appspot.com",
    messagingSenderId: "575337579529",
    appId: "1:575337579529:web:d1c31ba81d031b4ca3e4d8",
    measurementId: "G-SMSZPYT3SZ"
  };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

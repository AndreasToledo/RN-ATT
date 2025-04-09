import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Home/index';
import Catalogo from './src/Catalogo/index';
import Product1 from './src/Product1/index';
import Product2 from './src/Product2/index';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Catalogo" component={Catalogo}/>
        <Stack.Screen name="Product1" component={Product1}/>
        <Stack.Screen name="Product2" component={Product2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

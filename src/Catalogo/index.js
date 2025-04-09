import { Text, SafeAreaView, StyleSheet, Image, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {

const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Nossos produtos</Text>
      <Image source={{uri: 'https://i.pinimg.com/736x/03/8c/f9/038cf939d0cc755259245c0f00680d48.jpg',}}
      style={{
        width: 380,
        height: 300,
        marginBottom: 50,
        marginTop: 20,
        borderRadius: 100,
        alignSelf: 'center'
      }}
      />
      <View 
      style={{
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        backgroundColor: '#000000', 
        borderWidth: 2, 
        borderColor: '#ffffff',
      }}>
        <Image
        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbCSXHhQiMmnleXW3CaAMyWFlvglf8F8TYw&s',}}
        style={{
          width: 100,
          height: 100,
          marginBottom: 50,
          marginTop: 20,
          borderRadius: 10,
          alignSelf: 'center'
        }}
        />
        <Button
        title = 'Pitaya Dragon Plushie'
        onPress={() => navigation.navigate('Product1')}
        >
        </Button>
        <Image source={{uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcStzmiy8COmgD36lFGt9fFDQaTY9k90QHv8kF0lDY5EREqsInRi',}}
        style={{
          width: 100,
          height: 100,
          marginBottom: 50,
          marginTop: 20,
          borderRadius: 10,
          alignSelf: 'center'
        }}
        />
        <Button
        title = 'Shadow Milk Plushie'
        onPress={() => navigation.navigate('Product2')}
        >
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 8,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
  title: {
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 30,
    fontSize: 28,
    color: '#ffffff'
  },
  Text: {
    margin: 15,
    textAlign: 'justify',
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

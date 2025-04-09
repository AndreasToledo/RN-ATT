import { Text, SafeAreaView, StyleSheet, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';

export default function App() {

const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Black Sapphire Shop
      </Text>
      <Text style={styles.paragraph}>
        "Tenho uma apresentação totalmente alinhada para você esta noite"
      </Text>
      <Image source={{uri:"https://preview.redd.it/black-sapphire-cookie-in-gl2-v0-efpatek1e9fe1.jpg?width=457&format=pjpg&auto=webp&s=9e92988bce06e5be3469d6b79d3b0658604de72d"}} 
      style={{
        width:400, 
        height:300, 
        marginLeft:45, 
        marginBottom:20, 
        marginTop:40, 
        borderRadius: 100, 
        alignSelf: 'center'
      }}
      />
      <Card style={{
        backgroundColor: '#000000', 
        borderWidth: 6, 
        borderColor: '#ffffff', 
        margin:20}}
      >
        <Text style={styles.Text}>
          Agradecemos qualquer ato teatral de sua gratidão!
        </Text>
      </Card>
      <Button
      title = 'Veja nossos produtos'
      color = '#180522'
      onPress={() => navigation.navigate("Catalogo")}
      >
      </Button>
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
    color: '#ffffff'
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
    fontSize: 20,
    textAlign: 'justify',
    fontWeight: 'bold',
    color: '#ffffff'
  },
});
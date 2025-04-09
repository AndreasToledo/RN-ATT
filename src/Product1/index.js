import { Text, SafeAreaView, StyleSheet, Image, Button } from 'react-native';
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Pitaya Dragon Cookie 
      </Text>
      <Text style={styles.paragraph}>
        "Prepare-se! Aí vem o lendário dragão carmesim!"
      </Text>
      <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbCSXHhQiMmnleXW3CaAMyWFlvglf8F8TYw&s"}} 
      style={{
        width:300, 
        height:200, 
        marginBottom:20, 
        marginTop:40, 
        borderRadius: 20, 
        alignSelf: 'center'}}
      />
      <Text style={styles.Price}>
        R$80 
      </Text>
      <Card style={{
        backgroundColor: '#000000', 
        borderWidth: 6, 
        borderColor: '#ffffff', 
        margin:10
      }}>
        <Text style={styles.Text}>
          Esta fofa pelúcia do icônico dragão vermelho, além de aquecer naquelas horas em casa, não queima ao contato!
        </Text>
      </Card>
      <Button
      title = 'Comprar'
      color = '#180522'
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
  Price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 30,
  }
});
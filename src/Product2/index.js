import { Text, SafeAreaView, StyleSheet, Image, Button } from 'react-native';
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Shadow Milk Cookie 
      </Text>
      <Text style={styles.paragraph}>
        "Sériamente... Quem poderia dizer não a boa e velha enganação!"
      </Text>
      <Image source={{uri:"https://i5.walmartimages.com/seo/Shadow-Milk-Cookie-Plush-Shadow-Milk-Cookie-Plushie-Shadow-Milk-Plush-Cookie-Run-Kingdom-Merch-Gift-for-Fans_cd7cd5d1-9b95-40dc-bfdd-936037695ed9.fb06e3fe063a778f2ea1d17cde9c6a4b.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF"}} 
      style={{
        width:300, 
        height:200, 
        marginBottom:20, 
        marginTop:40, 
        borderRadius: 20, 
        alignSelf: 'center'
      }}
      />
      <Text style={styles.Price}>
        R$65 
      </Text>
      <Card style={{backgroundColor: '#000000', borderWidth: 6, borderColor: '#ffffff', margin:10}}>
        <Text style={styles.Text}>
          Esta pelúcia travessa está sempre pronta para as mais diversas e malucas aventuras e nunca recusa uma boa diversão!
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
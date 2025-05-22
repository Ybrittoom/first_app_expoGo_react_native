import { StyleSheet, Text, View } from 'react-native';

export default function Page() { // Pode ser Page, Home, ou qualquer outro nome para o componente
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Meu Primeiro App com Expo Router!</Text> {/* Altere aqui */}
        <Text style={styles.subtitle}>Estou aprendendo e me divertindo.</Text> {/* Altere aqui */}
      </View>

      <View>
        <Text>Isso e um exemplo de texto bb</Text>
        <input type="text" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Mantenha ou ajuste seus estilos aqui
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 32, // Talvez um pouco menor para telas de celular
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
});
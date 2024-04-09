import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Contador } from "./src/components/home"

export default function App() {
  return (
    <View style={styles.container}>
      < Contador />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

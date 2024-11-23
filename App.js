import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>Teks di Tengah Layar</Text>

      {/* Kotak-kotak di sisi kiri dan kanan */}
      <View style={styles.row}>
        <View style={[styles.box, styles.leftBox]} />
        <View style={[styles.box, styles.rightBox]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3', // Latar belakang abu-abu terang
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20, // Jarak teks dengan kotak
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20, // Jarak horizontal dari sisi layar
  },
  box: {
    width: 100,
    height: 100,
  },
  leftBox: {
    backgroundColor: 'yellow', // Warna bebas untuk kotak kiri
  },
  rightBox: {
    backgroundColor: 'pink', // Warna bebas untuk kotak kanan
  },
});

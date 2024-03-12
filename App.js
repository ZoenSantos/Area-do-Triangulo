import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const TriangleAreaCalculator = () => {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [area, setArea] = useState(null);

  const calcularTriangulo = () => {
    const baseFloat = parseFloat(base);
    const alturaFloat = parseFloat(altura);

    const areaCalculada = (baseFloat * alturaFloat) / 2;
    setArea(areaCalculada.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Área de Triângulo</Text>
      <TextInput
        style={styles.input}
        placeholder="Base do triângulo"
        onChangeText={(text) => setBase(text)}
        keyboardType="numeric"
        value={base}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura do triângulo"
        onChangeText={(text) => setAltura(text)}
        keyboardType="numeric"
        value={altura}
      />
      <Button title="Calcular Área" onPress={calcularTriangulo} />
      {area !== null && (
        <Text style={styles.result}>Área do triângulo: {area}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default TriangleAreaCalculator;

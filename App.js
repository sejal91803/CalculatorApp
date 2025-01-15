import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const CalculatorApp = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['C', '0', '=', '+'],
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Display area for input and result */}
      <View style={styles.display}>
        <Text style={styles.input}>{input || '0'}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>

      {/* Button layout */}
      <View style={styles.buttons}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((btn) => (
              <TouchableOpacity
                key={btn}
                style={[styles.button, btn === '=' && styles.equalsButton]}
                onPress={() => handlePress(btn)}
              >
                <Text style={styles.buttonText}>{btn}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      {/* Footer with the "Calc by Sejal" text */}
      <Text style={styles.footer}>Calc by Sejal</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f4f4' },
  display: { flex: 1, justifyContent: 'center', alignItems: 'flex-end', padding: 20, backgroundColor: '#fff' },
  input: { fontSize: 36, color: '#333' },
  result: { fontSize: 24, color: '#888' },
  buttons: { flex: 2, padding: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5 },
  button: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  equalsButton: { backgroundColor: 'green' },
  buttonText: { fontSize: 24, color: '#333' },
  footer: { textAlign: 'center', padding: 10, fontSize: 16, backgroundColor: '#ddd' },
});

export default CalculatorApp;

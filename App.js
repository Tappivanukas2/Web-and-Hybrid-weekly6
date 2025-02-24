import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';

const CatFactApp = () => {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCatFact = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      setFact('Failed to fetch a cat fact. Try again!');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random Cat Fact</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#ff6b6b" />
      ) : (
        <Text style={styles.fact}>{fact}</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={fetchCatFact}>
        <Text style={styles.buttonText}>Get New Fact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fce4ec',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  fact: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    borderColor: '#333',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CatFactApp;

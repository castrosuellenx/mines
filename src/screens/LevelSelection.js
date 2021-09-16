/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Modal} from 'react-native';

const Level = props => {
  return (
    <TouchableOpacity style={props.stylesButton} onPress={props.onSelect}>
      <Text style={props.stylesButtonText}>{props.levelText}</Text>
    </TouchableOpacity>
  );
};

export default props => {
  return (
    <Modal
      onRequestClose={props.onCancel}
      visible={props.isVisible}
      animationType="slide"
      transparent={true}>
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Selecione o Nível</Text>
          <Level
            stylesButton={[styles.button, styles.bgEasy]}
            onSelect={() => props.onLevelSelected(0.1)}
            stylesButtonText={styles.buttonLabel}
            levelText={'Fácil'}
          />
          <Level
            stylesButton={[styles.button, styles.bgNormal]}
            onSelect={() => props.onLevelSelected(0.2)}
            stylesButtonText={styles.buttonLabel}
            levelText={'Intermediário'}
          />
          <Level
            stylesButton={[styles.button, styles.bgHard]}
            onSelect={() => props.onLevelSelected(0.3)}
            stylesButtonText={styles.buttonLabel}
            levelText={'Difícil'}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  container: {
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    borderRadius: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    padding: 10,
    borderRadius: 15,
    width: 200,
  },
  buttonLabel: {
    fontSize: 20,
    color: '#EEE',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bgEasy: {
    backgroundColor: '#49b65d',
  },
  bgNormal: {
    backgroundColor: '#2765F7',
  },
  bgHard: {
    backgroundColor: '#F26337',
  },
});

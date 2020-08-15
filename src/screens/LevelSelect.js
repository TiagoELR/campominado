import React from 'react';
import {Modal, View, TouchableOpacity, StyleSheet, Text} from 'react-native';

export default (props) => {
  return (
    <Modal
      onRequestClose={props.onCancel}
      visible={props.isVisible}
      animationType="slide"
      transparent={true}>
      <View style={styles.frame}>
        <View style={styles.container}>
            <Text style={styles.title}>Selecione o nível</Text>
            <TouchableOpacity style={[styles.button, styles.bgEasy]}
            onPress={() =>props.onLevelSelect(0.1)}>
                <Text style={styles.buttonLabel}>Facil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.bgNormal]}
            onPress={() =>props.onLevelSelect(0.2)}>
                <Text style={styles.buttonLabel}>Normal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.bgHard]}
            onPress={() =>props.onLevelSelect(0.3)}>
                <Text style={styles.buttonLabel}>Difícil</Text>
            </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    frame:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,6)',
    },
    container:{
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        padding: 15,
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
    },
    button:{
        marginTop: 10,
        padding: 5,
    },
    buttonLabel:{
        fontSize: 20,
        color: '#034f84',
        fontWeight: 'bold'
    },
    bgEasy:{
        backgroundColor: '#b5e7a0',
        borderRadius: 5,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgNormal:{
        backgroundColor: '#ffef96',
        borderRadius: 5,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgHard:{
        backgroundColor: '#f7786b',
        borderRadius: 5,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

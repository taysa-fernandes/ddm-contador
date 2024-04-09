import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity,Text } from 'react-native';
import { styles } from './styles';

export const Contador = () => {
    const [contador, setContador] = useState(0);

    const adicionarPessoa = () => {
        setContador(contador + 1);
    };

    const removerPessoa = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };

    return (
        <View style={styles.cont}>
            <Text style={styles.textCont}>Contador de pessoas</Text>
            <TextInput
                style={styles.inputCont}
                value={contador.toString()}
                editable={false}
            />
            <TouchableOpacity onPress={adicionarPessoa}
            style={styles.click}>
                <Text style={styles.botao}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={removerPessoa}>
                <Text style={styles.botao}>-</Text>
            </TouchableOpacity>
        </View>
    );
};

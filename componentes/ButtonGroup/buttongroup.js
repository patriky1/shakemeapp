import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Bebidas from '../grid1/grid1.js';

const BtnGroup = () => {

    const [selection, setSelection] = useState(1);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.btnGroup}>
                <TouchableOpacity style={[styles.btn, selection === 1 ? { backgroundColor: "#219EBC"} : null]} onPress={() => setSelection(1) }>
                    <Text style={[styles.btnText, selection === 1 ? { color: "white" } : null]}>Todos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, selection === 2 ? { backgroundColor: "#219EBC" } : null]} onPress={() => setSelection(2)}>
                    <Text style={[styles.btnText, selection === 2 ? { color: "white" } : null]}>Gin</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, selection === 3 ? { backgroundColor: "#219EBC" } : null]} onPress={() => setSelection(3)}>
                    <Text style={[styles.btnText, selection === 3 ? { color: "white" } : null]}>Vodka</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, selection === 4 ? { backgroundColor: "#219EBC" } : null]} onPress={() => setSelection(4)}>
                    <Text style={[styles.btnText, selection === 4 ? { color: "white" } : null]}>Agua Tônica</Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        top:"2%",
    },
    btnGroup: {
        flexDirection: 'row',
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginHorizontal:"2%",
    },
    btn: {
        flex: 1,
        borderRightWidth: 0.25,
        borderLeftWidth: 0.25,
        borderColor: 'white',
        borderRadius: 10,       
    },
    btnText: {
        textAlign: 'center',
        paddingVertical: 16,
        fontSize: 14
    }
});

module.exports = BtnGroup;
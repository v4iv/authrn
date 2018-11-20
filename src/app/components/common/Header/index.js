import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

const Header = (props) => (
    <SafeAreaView style={styles.viewStyle}>
        <Text style={styles.textStyle}>{props.headerText}</Text>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 85,
        paddingTop: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
});

export { Header };

import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => (
    <View style={styles.containerStyles}>
        {props.children}
    </View>
);

const styles = StyleSheet.create({
    containerStyles: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#ffffff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#dddddd',
        position: 'relative'
    }
});

export { CardSection };

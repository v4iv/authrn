import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => (
    <View style={styles.containerStyles}>
        {props.children}
    </View>
);

const styles = StyleSheet.create({
    containerStyles: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#dddddd',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
});

export { Card };

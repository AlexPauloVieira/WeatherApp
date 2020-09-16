import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';


const Header = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{children}</Text>
        </View>
    );
}

export default Header;
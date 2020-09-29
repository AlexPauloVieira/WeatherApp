import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

export default class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    handleChangeText = (text) => {
        this.setState({ text: text });
    };

    handleSubmitEditing = () => {
        const { onSubmit } = this.props;
        const { text } = this.state;

        if (!text) return;

        onSubmit(text);
        this.setState({ text: '' });
    }

    render() {
        const { placeholder } = this.props;
        const { text } = this.state;

        return (
            <View style={styles.container}>
                <TextInput
                    value={text}
                    placeholder={placeholder}
                    placeholderTextColor='#fff'
                    style={styles.textInput}
                    onChangeText={this.handleChangeText}
                    onSubmitEditing={this.handleSubmitEditing}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        marginTop: 20,
        backgroundColor: '#666',
        marginHorizontal: 40,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    textInput: {
        flex: 1,
        color: '#fff'
    }
});

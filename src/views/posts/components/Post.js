import React, { Component } from 'react';

import { View } from 'react-native';

// import { Container } from './styles';


export default class Post extends Component {

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.postTitle}>Titulo Post</Text>
            <Text style={styles.postDescription}>Lorem ipsum</Text>            
        </View>
    );
  }

}

const styles = StyleSheet.create({

    container: {        
        borderWidth: 1,
        padding: 10,
        marginTop: 10
    },

    postTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    postDescription: {
        marginTop: 10
    }

});
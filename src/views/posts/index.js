import React, { Component } from 'react';

import { 
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Post from './components/Post';
import Profile from '.src/views/profile'

// import { Container } from './styles';

export default class Posts extends Component {

  static navigationOptions = {
    title: 'Posts'
  };

  render() {

    const {navigate} = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity 
          onPress={() => { navigate('Perfil') }}
          style={styles.perfilBotao}          
          >
          <text style={styles.perfilBotaoTexto}>Meu Perfil</text>
        </TouchableOpacity>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#FFF'
  },

  perfilBotao: {
    flex: 1,
    backgroundColor: '#069',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10
  },

  perfilBotaoTexto: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold'
  }

});
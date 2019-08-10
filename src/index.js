import React, {Component} from 'react';
import {Platform, StyleSheet, View, Button, Text} from 'react-native';

import Todo from './components/Todo';

export default class App extends Component {
  state = {
    todos: [{id: 0, text: 'Fazer café'}, {id: 1, text: 'Estudar o GoNative'}],
  };

  addTodo = () => {
    console.tron.log('teste');
    this.setState({
      todos: [...this.state.todos, {id: Math.random, text: 'novo'}],
    });
  };

  render() {
    return (
      <View>
        {this.state.todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        ))}
        <Button title="Add ToDo" onPress={this.addTodo} />
        <View style={styles.container}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box}>
            <Text style={styles.boxText}>oi</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    /*
    justifyContent: 'center',
    alignItems: 'center',
    */
    //flex: 1,
    backgroundColor: '#333',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: '#F00',
    margin: 10,
    transform: [
      {
        rotateZ: '20deg',
      },
    ],
  },
  boxText: {
    color: '#FFF',
  },
});

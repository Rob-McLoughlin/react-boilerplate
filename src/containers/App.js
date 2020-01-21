import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App js constructor");
  }
  state = {
    persons: [
      {id: 'abc1', name: 'Rob', age: '23'},
      {id: 'abc2', name: 'Max', age: '28'},
      {id: 'abc3', name: 'Sorcha', age: '23'}
    ],
    showPersons: false,
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] Component did mount');
  }

  togglePersonsHandler = () => {
    let newState = this.state.showPersons;
    this.setState({
      showPersons: !newState
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person

    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({
      persons: persons,
    });
  }

  render() {
    console.log('[App.js] render');
    let people;
    if (this.state.showPersons) {
      people = (
        <div className="persons">
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />
        </div>
      )
    }
    return (
      <div className={classes.App}>
        <Cockpit clicked={this.togglePersonsHandler} />
        {people}
      </div>
    );
  }
}

export default App;

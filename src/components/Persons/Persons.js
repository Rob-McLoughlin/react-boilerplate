import React from 'react';
import Person from './Person/Person';

class Persons extends React.Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("persons.js get getDerivedStateFromProps");
  //   return state;
  // }
  shouldComponentUpdate(nextProps, nextState){
    console.log("persons.js shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Perosns.js getSnapshotBeforeUpdate");
  }
  componentDidUpdate() {
    console.log("Persons.js did update!");
  }
  render() {
    console.log('[Persons.js] is rendering');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          changed={event => this.props.changed(event, person.id)}
        />
      )
    })
  }
}

export default Persons

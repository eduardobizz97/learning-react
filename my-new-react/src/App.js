import Person from "./Person/Person";
import "./App.css";
import { Component } from "react";
import styled from 'styled-components';


const StyledButton = styled.button`

  background-color: ${props => props.alt ? 'red' : 'green' };
  color: white;
  font: inherit;
  border: 5px solid black;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen' };
    color: white;
  }
`;

class App extends Component {

  state = {
    persons: [
      { id: 'as', name: "Eduardo", edad: 23 },
      { id: '1sad', name: "Vivi", edad: 20 },
      { id: 'asd', name: "Vivi", edad: 20 },
    ],
    showPersons: false

  };

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] }

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;


    this.setState({ persons: persons });
  };

  deletePerson = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {

    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow
    })

  }


  render() {

    let persons = null;

    if (this.state.showPersons) {

      persons = (

        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePerson(index)}
              name={person.name}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'white'
      // }
    }

    let classes = [];
    
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      
        <div className="App">
          <p className={classes.join(' ')}>hi</p>
          <StyledButton
            alt={this.state.showPersons}
            onClick={this.togglePersonHandler}>boton</StyledButton>
          {persons}

        </div>
      
    );
  };


};

export default App;

/* state = {
  persons: [
    { name: "Eduardo", edad: 23 },
    { name: "Vivi", edad: 20 },
  ],
};

switchNameHandler = () => {
  this.setState({
    persons: [
      { name: "Eduardo2", edad: 23 },
      { name: "Vivi2", edad: 20 },
    ],
  });
};
 */

/* const [ personsState, setPersonsState ] = useState({
  persons: [
    { name: "Eduardo", edad: 23 },
    { name: "Vivi", edad: 20 },

  ],

});




const switchNameHandler = () => {

  setPersonsState(
    {
      persons:
      [
        { name: "Eduardo2", edad: 23 },
        { name: "Vivi2", edad: 20 }
      ],
    }
  ) */
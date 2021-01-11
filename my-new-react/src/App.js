import Person from "./Person/Person";
import "./App.css";
import { Component } from "react";

class App extends Component {
  
  state = {
    persons: [
      { name: "Eduardo", edad: 23 },
      { name: "Vivi", edad: 20 },
    ],
    showPersons: false

  };
  
  deletePerson=()=>{
    
  }

  togglePersonHandler = () =>{
    
    const doesShow = this.state.showPersons;
    
    this.setState({
      showPersons: !doesShow
    })

  }


  render() {

    let persons =   null;
    if (this.state.showPersons) {
      persons = (

        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name}/>
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <button onClick={this.togglePersonHandler}>boton</button>
        { persons }
        
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


  nameChangeHandler = ( event ) => {
    
    this.setState({
      persons: [
        { name: event.target.value, edad: 23 },
        { name: "Vivi2", edad: 20 },
      ]
    });
  };

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
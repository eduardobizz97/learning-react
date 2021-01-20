import { Component } from 'react';
import './App.css';
import CharComponent from './CharComponent/CharComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';

class App extends Component {
  state = {

    texto : ''
  }

  textChangeHandler = (event) =>{
    const texto = event.target.value;
    // const textoState = [...this.state.texto];
    this.setState({
      texto: texto
    });

  }

  deleteLetter = (index) =>{
    const texto = this.state.texto.split("");
    texto.splice(index,1);
    const newText = texto.join("");
    this.setState({
      texto: newText
    });
    
  }

  render(){

    const tamanho = this.state.texto.length;
    const textArray = this.state.texto.split("");

    return(
      <div>
        <input type="text" onChange={(event)=>this.textChangeHandler(event)} value={this.state.texto} />
        <p>{this.state.texto.length}</p>
        <ValidationComponent tamanho={tamanho}/>
        {textArray.map((item, index)=>{
          return <CharComponent letter={item} click={()=>this.deleteLetter(index)}/>
        })}

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './estilo.css'
import biscoito from './image/biscoito.png'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {textofrase: ''};

    this.quebrabiscoito = this.quebrabiscoito.bind(this);

    this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'];
  
    }

    quebrabiscoito(){
      let state = this.state;
      let numeroaleatorio =Math.floor(Math.random() * this.frases.length);
      state.textofrase = ' " ' + this.frases[numeroaleatorio] + ' " ';
      this.setState(state);

  
    }
  
  render(){
    return(
      <div className='conteiner'>
        <img src={biscoito} className='img'/>
        <h3 className='textofrases'>{this.state.textofrase}</h3>
        <Botao nome="Abrir biscoito" acaobtn={this.quebrabiscoito}/>
      </div>

    );
  }
}
  class Botao extends Component{
    render(){
      return(
        <div>
          <button onClick={this.props.acaobtn}>{this.props.nome}</button>
        </div>
      );
  }
}
  
export default App;

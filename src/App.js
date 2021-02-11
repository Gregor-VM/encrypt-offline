import React from 'react';
import './App.css';

function Header() {
  return (
    <header>
      <h1>Sustitución Random</h1>
    </header>
  );
}

function GenerateButton(params) {
  return (<div className="containerButton">
  <button>Generar</button>
  <img src="#"></img>
</div>);
}

/*
const abc = 'qwertyuiopasdfghjklñzxcvbnm';
const code = '1234567890*!"#$%&/()=?¡¿qw';
const text = ' alsjflasjf ';

text.split('').map((e, i) => abc.indexOf(e.toLowerCase()) == -1 ? ' ' : code.split('')[ abc.indexOf(e.toLowerCase())] ).join('');
 */

class GetBox extends React.Component{

  render(){
    return (
      <div className="containerBox">
        <GenerateButton></GenerateButton>
        <textarea className="generateTextArea"></textarea>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Header></Header>
      <GetBox></GetBox>
    </div>

  );
}

export default App;

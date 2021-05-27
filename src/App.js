import {useState} from 'react';
import './App.css';
import Header from './components/Header';
import CardContainer from './components/CardContainer'

function App() {

  const [state,setState] = useState(0);

  return (
    <div className="App">
      <header className="App-header">       
        <CardContainer />
        <Header name={state}/>
        <button onClick={()=>setState(state +1)}>Botao</button>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {useState} from 'react';



function App() {

  
  const [escritor, setEscritor] = useState('Hello React!!!')
  
  function handleButtonClick(params) {
    alert("And then just close me");
    setEscritor('Till I can get my')
    
  }
  
  
  return (
    
    
    <div className="App">
      
      
      <header className="App-header">
        <Header title={escritor}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>          
          Hello World!
        </p>

       
        <input type="button" value="Click me" onClick={handleButtonClick}/>
      </header>
    </div>
  );
}

export default App;

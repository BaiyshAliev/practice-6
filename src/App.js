import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from "react";


function App() {

  const [red , setRed] = useState("white")

  const redHandler = () =>{
    setRed("red")
  }

  const greenHandler = () =>{
    setRed("green")
  }

  return (
    <div className="App">
      <Main red={redHandler} green={greenHandler}/>
      <Header red={red}/>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import Header from "./components/Header"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Customize from './Customize'
import Checkout from './components/Checkout';

function App() {
     const [ingredients, setIngredients] = useState({
        basil: false,
        cheese: false,
        mushroom: false,
        olive: false,
        pineapple: false,
        tomato: false,
  });

  useEffect (() => {
    const data = localStorage.getItem('ingredients');
    if(data){
      setIngredients(JSON.parse(data));
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
            <Route exact path="/">
              <Customize ingredients={ingredients} 
              setIngredients={setIngredients} /> 
            </Route>
            <Route path="/checkout">
              <Checkout ingredients={ingredients}/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

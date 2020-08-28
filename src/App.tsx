import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMassage from "./Component/AddMassage/AddMassage";
import classes from './App.module.css';
import Tusk from "./Component/Tusks/Tusk";
import Greeting from "./Component/Greeting/Greeting";
import { Route } from 'react-router-dom';
import Stage from "./Component/Stage/Stage";



function App() {
    debugger
  return (
      <div className={classes.positionAll}>
          <div className={classes.headerMenu}>
              <div className={classes.menu + ' container'}>
                  <Stage/>
              </div>
          </div>
          <Route path={'/preJunior'} render={()=>
              <div className={classes.positionContent + ' container'}>
                  <div className={'row'}>
                      <AddMassage/>
                      <Tusk/>
                  </div>
                  <div className={classes.greetBlock}>

                      <Greeting/>
                  </div>
              </div>
          }/>
      </div>
  );
}

export default App;

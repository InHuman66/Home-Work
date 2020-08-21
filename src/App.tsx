import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMassage from "./Component/AddMassage/AddMassage";
import classes from './App.module.css';
import Tusk from "./Component/Tusks/Tusk";
import Greeting from "./Component/Greeting/Greeting";

function App() {
  return (
    <div>
      <div className={classes.positionContent + ' container'}>
        <div className={'row'}>
                <AddMassage/>
                <Tusk/>

        </div>
        <div className={classes.greetBlock}>
            <Greeting/>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMassage from "./Component/AddMassage/AddMassage";
import classes from './App.module.css';

function App() {
  return (
    <div>
      <div className={classes.positionContent + ' container'}>
        <div className={'row'}>
            <div className={'col-7'}>
                <AddMassage/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import classes from "./AddMassage.module.css";
import Massage from "./Massage/Massage";

const AddMassage=()=> {
    let [txt]= useState([
        {txt:'awdawdawdawdaw' , time:'12:00' , name: 'Sanchek', id: 1,},
        {txt:'awdawdawdawdaw' , time:'12:00' , name: 'Sanchek', id: 2,},
        {txt:'awdawdawdawdaw' , time:'12:00' , name: 'Sanchek', id: 3,},
        {txt:'awdawdawdawdaw' , time:'12:00' , name: 'Sanchek', id: 4,},
    ]);
  return (
    <div>
      <div className={'row'}>
        <div className={classes.addMenu + ' col-7'}>
          <button> Send</button>
          <textarea/>
        </div>
        <div className={'col-5'}>
            {txt.map((date)=><Massage key={date.id} time={date.time} name={date.name} txt={date.txt}/>)}
        </div>
      </div>
    </div>
  );
};

export default AddMassage;

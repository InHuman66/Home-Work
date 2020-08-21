import React, {useState} from 'react';
import classes from "./AddMassage.module.css";
import Massage from "./Massage/Massage";

const AddMassage=()=> {
    let [txt]= useState([
        {txt:'Good' , time:'12:00' , name: 'Sanchek', id: 1,},
        {txt:'test txt' , time:'12:00' , name: 'Sanchek', id: 2,},
        {txt:'....' , time:'12:00' , name: 'Sanchek', id: 3,},
        {txt:'Hello' , time:'12:00' , name: 'Sanchek', id: 4,},
    ]);
  return (
    <div className={'col-3'}>
        {txt.map((date)=><Massage key={date.id} time={date.time} name={date.name} txt={date.txt}/>)}
    </div>
  );
};

export default AddMassage;

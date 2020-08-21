import React from 'react';
import classes from "./Item.module.css";


type Mass ={
    txt: string
    prior: string
    id: number
    removeTusk: (id:number)=> void
}

const Item:React.FC<Mass>=(props)=> {
    let styleForPrior = classes.hight;
    if (props.prior === 'hight'){
        styleForPrior = classes.hight
    }else if(props.prior === 'low'){
        styleForPrior = classes.low
    }else if(props.prior === 'medium'){
        styleForPrior = classes.medium
    }
  return (
    <div className={classes.tusk}>
        <p>{props.txt}:</p>
        <p className={styleForPrior}>Priority: {props.prior}</p>
        <button onClick={()=>{props.removeTusk(props.id)}}>Здать</button>
    </div>
  );
};

export default Item;

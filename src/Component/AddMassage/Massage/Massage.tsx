import React from 'react';
import classes from "./Massage.module.css";
import Avatar from '../../../Recors/avatar7.png'

const Massage: React.FC<{time:string, name:string,txt:string,}>=(props)=> {
  return (
    <div className={classes.massage + ' row'}>
      <img src={Avatar}/>
      <p className={classes.name}>{props.name}</p>
      <p className={classes.time}>{props.time}</p>
      <div className={classes.txt + ' col-11 offset-1'}>
        <p>{props.txt}</p>
      </div>
    </div>
  );
};

export default Massage;

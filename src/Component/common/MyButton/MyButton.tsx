import React from 'react';
import classes from "./MyButton.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

type TypeProps ={
  text: string
  click: ()=>void
  type?: "delete" | "default" | "escape" | "select"
  disabled?: boolean
}

const MyButton=(props:TypeProps)=> {
  let styleForButton = classes.default
  if(props.type === "delete"){
    styleForButton = classes.delete
  }else if(props.type ==="default" ){
    styleForButton = classes.default
  }else if(props.type === "escape"){
    styleForButton = classes.escape
  }else if(props.type === "select"){
    styleForButton = classes.select
  }
  return (
    <button disabled={props.disabled} className={styleForButton} onClick={props.click}>{props.text}</button>
  );
};

export default MyButton;

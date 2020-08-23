import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./MyChekBox.module.css";

type TypeMyCheckBox ={
  checked: boolean
  changeStatus: (value:boolean)=>void
  style?: string
}

const MyCheckBox=(props:TypeMyCheckBox)=> {
  let styleValue = classes.normal

  if (props.style === 'small'){
    styleValue = classes.small
  }else if (props.style === 'medium'){
    styleValue = classes.medium
  }else if (props.style === 'big'){
    styleValue = classes.big
  }

  let changeStatus = (e:React.ChangeEvent<HTMLInputElement>)=>{
    props.changeStatus(e.currentTarget.checked)
  }
  return (
    <input
        className={styleValue}
        type={"checkbox"}
        checked={props.checked}
        onChange={changeStatus}
    />
  );
};

export default MyCheckBox;

import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import  classes from './Greeting.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyInput from "../common/MyInput/MyInput";
import MyButton from "../common/MyButton/MyButton";

const Greeting=()=> {
    let [greetData, setGreetData] = useState('');
    let addNewTxtInput =(e:string)=>{
        setGreetData(e)
        test(e)

    }
    let onKeyPress =()=>{
            addAlert();
    }
    let addAlert = ()=>{
        if (greetData === ''){
            setError(classes.errorTxt);
            setErrorSymbol(classes.normalSymbol)
        }
        if(greetData !== ''){
            alert(greetData)
            setError(classes.normalTxt);
        }
    }
    let test =(e:string)=>{
        if (/[@?,."%$#!&*()+0-9]/.test(e)){
            setStyleForInput('error')
            setErrorSymbol(classes.errorSymbol)
            setDisabledForButton(true)
        }else{
            setError(classes.normalTxt);
            setStyleForInput('default')
            setErrorSymbol(classes.normalSymbol)
            setDisabledForButton(false)
        }
    };
    let [styleForErrorEmpti, setError]= useState(classes.normalTxt);
    let [styleForErrorSymbol, setErrorSymbol]= useState(classes.normalSymbol);
    let [styleForInput, setStyleForInput] = useState('default')
    let [disabledForButton, setDisabledForButton] = useState(false)
  return (
    <div>
        <h1>Ну давай поздороваемся</h1>
        <div className={'row'}>
            <div className={classes.greet}>
                {/*<button onClick={addAlert}>to greet</button>*/}
                <MyButton disabled={disabledForButton} text={'to greet'} click={addAlert}/>
                <MyInput
                    style={styleForInput}
                    placeHolderValue={'Давай своё имя братан'}
                    change={addNewTxtInput}
                    value={greetData}
                    pressEnter={onKeyPress}
                />
            </div>
            <div className={classes.positionError}>
                <p className={styleForErrorEmpti}> *Строка не может быть пустой</p>
                <p className={styleForErrorSymbol}> *Строка не может содержать цифры, cимволы:@, ., "</p>
            </div>
        </div>
    </div>
  );
};

export default Greeting;

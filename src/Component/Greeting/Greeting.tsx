import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import  classes from './Greeting.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export type FilterType =  'all'|'hight'|'medium'|'low';

const Greeting=()=> {
    let [greetData, setGreetData] = useState('');
    let addNewTxtInput =(e: ChangeEvent<HTMLInputElement>)=>{
        setGreetData(e.currentTarget.value)
        setError(classes.normalTxt)
        setErrorSymbol(classes.normalSymbol)

    }
    let onKeyPress =(e: KeyboardEvent<HTMLInputElement>)=>{
        if ( e.charCode === 13){
                addAlert();
        }
    }
    let addAlert = ()=>{
        if (greetData === ''){
            setError(classes.errorTxt);
            setErrorSymbol(classes.normalSymbol)
        }
        if(greetData !== ''){
            setError(classes.normalTxt);
            test();
        }
    }
    let test =()=>{
        let arr= greetData.split('')
        let resoltTest: boolean = arr.every((e)=>{
            switch (e) {
                case '0':  return false; break;
                case '1':  return false; break;
                case '2':  return false; break;
                case '3':  return false; break;
                case '4':  return false; break;
                case '5':  return false; break;
                case '6':  return false; break;
                case '7':  return false; break;
                case '8':  return false; break;
                case '9':  return false; break;
                case '@':  return false; break;
                case '.':  return false; break;
                case '"':  return false; break;
                default: return true;
            }
        });
        console.log(resoltTest)
        if (resoltTest === true){
            setErrorSymbol(classes.normalSymbol)
            setGreetData('')
            alert(greetData)
        }else if(resoltTest === false){
            setErrorSymbol(classes.errorSymbol)
        }
    };

    let [styleForErrorEmpti, setError]= useState(classes.normalTxt);
    let [styleForErrorSymbol, setErrorSymbol]= useState(classes.normalSymbol);
  return (
    <div>
        <h1>Ну давай поздороваемся</h1>
        <div className={'row'}>
            <div className={classes.greet}>
                <button onClick={addAlert}>to greet</button>
                <input onChange={addNewTxtInput} onKeyPress={onKeyPress}  placeholder={'Your Name'} value={greetData}/>
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

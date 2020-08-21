import React, {useState} from 'react';
import classes from "./Tusk.module.css";
import Item from "./Item/Item";
import 'bootstrap/dist/css/bootstrap.min.css';
export type FilterType =  'all'|'hight'|'medium'|'low';

const Tusk=()=> {
    let [txt, setTxt]= useState([
        {tusk:'работа' , priority:'hight' , id: 1,},
        {tusk:'залипать в монитор по 5 минут' , priority:'low' , id: 2,},
        {tusk:'игры' , priority:'hight' , id: 3,},
        {tusk:'спать' , priority:'low' , id: 4,},
        {tusk:'чудить' , priority:'medium' , id: 5,},
    ]);
    let  removeTusk = (id:number)=>{
        let newDate = txt.filter(t => t.id != id);
        setTxt(newDate);
    }
    let [filter, setFilter]=useState<FilterType>('all');
    let chengeFilteer =(filter:FilterType)=>{
      setFilter(filter)
    };
    let OnClickAll =()=>{chengeFilteer('all')};
    let OnClickLow =()=>{chengeFilteer('low')};
    let OnClickMedium =()=>{chengeFilteer('medium')};
    let OnClickHight =()=>{chengeFilteer('hight')};
    let filterData = txt;
    if (filter === "low"){
        filterData = txt.filter(t => t.priority === 'low')
    }
    if (filter === "hight"){
        filterData = txt.filter(t => t.priority === 'hight')
    }
    if (filter === "medium"){
        filterData = txt.filter(t => t.priority === 'medium')
    }
  return (
    <div className={classes.position + ' row'}>
        <h2 className={'col-12 text-center'}>Задачи</h2>
        <div>
            {filterData.map((item)=><Item key={item.id}  removeTusk={removeTusk} txt={item.tusk} prior={item.priority} id={item.id}/>)}
            <div className={classes.buttons}>
                <div className={classes.priorityBlock}>
                    <p>Choose priority:</p>
                    <button onClick={OnClickHight}>Hight</button>
                    <button onClick={OnClickMedium}>Medium</button>
                    <button onClick={OnClickLow}>Low</button>
                    <button onClick={OnClickAll}>All</button>
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
  );
};

export default Tusk;

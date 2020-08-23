import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./MyInput.module.css";

type TypeMyInput = {
    change: (text: string) => void
    value: string
    pressEnter: () => void
    placeHolderValue?:string
    style?: string
}


const MyInput = (props: TypeMyInput) => {
    let styleForInput = classes.error
    if (props.style === 'default'){
        styleForInput = classes.default
    }else if (props.style === 'error'){
        styleForInput = classes.error
    }

    let OnChenge = (e: React.FormEvent<HTMLInputElement>) => {
        props.change(e.currentTarget.value)
    };

    let OnPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.pressEnter();
        }
    }
    return (
        <input
            className={styleForInput}
            placeholder={props.placeHolderValue}
            onKeyPress={OnPressEnter}
            onChange={OnChenge}
            value={props.value}
        />
    );
};

export default MyInput;

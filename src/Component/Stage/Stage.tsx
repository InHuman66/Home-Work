import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./Stage.module.css";
import { NavLink } from 'react-router-dom';




const Stage = () => {
    let [styleForMenu, setStyleForMenu] = useState(classes.DropdownMenu)
    let showMenu = ()=>{
        setStyleForMenu(classes.DropdownMenuShow)
    }
    let hideMenu = ()=>{
        setStyleForMenu(classes.DropdownMenu)
    }
    return (
        <div onMouseEnter={showMenu} onMouseLeave={hideMenu} className={classes.container}>
            <div className={classes.dropdown}>
                <div className={classes.select}>
                    <span >Stage</span>
                </div>
                <ul className={styleForMenu}>
                    <li>
                        <NavLink  to="/preJunior">PreJunior</NavLink>
                    </li>
                    <li>
                        <NavLink to="/junior">Junior</NavLink>
                    </li>
                    <li>
                        <NavLink to="/junior+">Junior+</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Stage;

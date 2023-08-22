import classes from "./MenuItem.module.css"
import {NavLink} from "react-router-dom";

const setClasses = ({isActive})=> isActive ? [classes.active, classes.item].join(" ") : classes.item;


function MenuItem(props) {

    return (
        <NavLink to={props.url} className={setClasses} >{props.title}</NavLink>
    )
}

export default MenuItem;
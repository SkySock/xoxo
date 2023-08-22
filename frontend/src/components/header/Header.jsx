import sLogo from "../../assets/imgs/s-logo.svg"
import classes from "./Header.module.css"
import LogoutButton from "../ui/logout/LogoutButton.jsx";
import MenuItem from "../ui/menuItem/MenuItem.jsx";


const menu = [
    ['Игровое поле', '/game'],
    ['Рейтинг', '/top'],
    ['Активные игроки', '/active-players'],
    ['История игр', '/history'],
    ['Список игроков', '/players'],
];
function Header() {
    return (
        <header>
            <div className={classes.logo}><img src={sLogo}/></div>
            <div className={classes.navPanel}>
                {menu.map((item, id) => <MenuItem key={id} url={item[1]} title={item[0]} isActive={false}/>)}
            </div>
            <LogoutButton />
        </header>
    )

}

export default Header;
import smallTiger from '../../assets/smallTiger.webp'
import style from './Header.module.scss'
import menu from '../../assets/menuButton.svg'
import {useState} from "react";
import NavBurger from "./NavBurger/NavBurger";


const Header = () => {

    const [showMenu, setShowMenu] = useState(false)


    const changeBurgerMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <div className={style.header}>
            <button className={style.menu}
                    onClick={changeBurgerMenu}><img src={menu} alt=""/></button>
            {showMenu && <NavBurger/>}
            <img className={style.img} src={smallTiger} alt="tiger"/>
            <div className={style.navBar}>
                <div className={style.point}>Point</div>
                <div className={style.point}>Point</div>
                <div className={style.point}>Point</div>
                <div className={style.point}>Point</div>
                <div className={style.btn}>Button</div>
            </div>
        </div>
    );
};

export default Header;
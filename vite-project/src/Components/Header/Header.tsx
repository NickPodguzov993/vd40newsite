import smallTiger from '../../assets/smallTiger.png'
import style from './Header.module.scss'
import menu from '../../assets/menuButton.svg'

const Header = () => {
    return (
        <div className={style.header}>
            <button className={style.menu}><img src={menu} alt=""/></button>
            <img className={style.img}  src={smallTiger} alt="tiger"/>
            <div className={style.navBar}>
                <div className={style.point}>Point</div>
                <div className={style.point}>Point</div>
                <div className={style.point}>Point</div>
                <div className={style.point}>Point</div>
                <div className={style.btn}>Button</div>
            </div>

            <div></div>
        </div>
    );
};

export default Header;
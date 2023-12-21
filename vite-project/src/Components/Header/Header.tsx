import smallTiger from '../../assets/smallTiger.png'
import style from './Header.module.scss'

const Header = () => {
    return (
        <div className={style.header}>
            <button>yellow</button>
            <img className={style.img}  src={smallTiger} alt="tiger"/>
            <div className={style.navBar}>
                <div>Point</div>
                <div>Point</div>
                <div>Point</div>
                <div>Point</div>
                <div>Button</div>
            </div>

            <div></div>
        </div>
    );
};

export default Header;
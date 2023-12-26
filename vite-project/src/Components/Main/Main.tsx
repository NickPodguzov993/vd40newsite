import Tiger from '../../assets/top.webp'
import style from '../Main/Main.module.scss'
import Statistic from "./Statistic/Statistic";
import tiger from '../../assets/fortuneTiger.webp'
const Main = () => {
    return (

        <div>
            <div className={style.mainImage}>
                <img src={Tiger}/>
            </div>
            <div className={style.container}>
                <div className={style.buttons}>
                    <img src={tiger} alt=""/>
                    <button className={style.btn}>Button</button>
                    <button className={style.btn}>Jogar</button>
                </div>
               <Statistic/>
            </div>
        </div>

    );
};

export default Main;
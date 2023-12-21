import Tiger from '../../assets/mainTiger.png'
import style from '../Main/Main.module.scss'
import Statistic from "./Statistic/Statistic";
import tiger from '../../assets/fortuneTiger.png'
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
                    <button className={style.btn}>Button</button>
                </div>
               <Statistic/>
            </div>
        </div>

    );
};

export default Main;
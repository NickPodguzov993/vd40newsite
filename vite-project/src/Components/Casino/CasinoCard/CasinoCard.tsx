import style from '../CasinoCard/CasinoCard.module.scss'

const CasinoCard = () => {
    return (
        <div className={style.container}>
            <div className={style.img}></div>
            <h3 className={style.title}>Casino Name</h3>
            <p className={style.stars}>⭐⭐⭐🌟</p>
           <button className={style.btn}>Button</button>
        </div>
    );
};

export default CasinoCard;
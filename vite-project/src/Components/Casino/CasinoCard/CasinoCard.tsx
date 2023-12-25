import style from '../CasinoCard/CasinoCard.module.scss'

type CasinoCardType = {
    image:string
}

const CasinoCard = ({image}:CasinoCardType) => {
    return (
        <div className={style.container}>
            <div className={style.img}><img src={image}/></div>
            <h3 className={style.title}>Casino Name</h3>
            <p className={style.stars}>⭐⭐⭐🌟</p>
           <button className={style.btn}>Button</button>
        </div>
    );
};

export default CasinoCard;
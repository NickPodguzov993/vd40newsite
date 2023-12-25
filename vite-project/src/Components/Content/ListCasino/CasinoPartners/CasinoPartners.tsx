import style from '../CasinoPartners/CasinoPartners.module.scss'

type CasinoPartnersType = {
    title:string
    description: string
    image:string
}

const CasinoPartners = ({title,description,image}:CasinoPartnersType) => {
    return (
        <div className={style.container}>
            <div className={style.img}><img src={image}/></div>
            <div>
                <h2 className={style.title}>{title}</h2>
                <p className={style.description}>{description}</p>
            </div>
            <div className={style.button}><button>Jogar</button></div>
        </div>
    );
};

export default CasinoPartners;
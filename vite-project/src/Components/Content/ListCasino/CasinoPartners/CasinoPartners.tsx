import style from '../CasinoPartners/CasinoPartners.module.scss'

type CasinoPartnersType = {
    title:string
    description: string
}

const CasinoPartners = ({title,description}:CasinoPartnersType) => {
    return (
        <div className={style.container}>
            <div className={style.img}></div>
            <div>
                <h2 className={style.title}>{title}</h2>
                <p className={style.description}>{description}</p>
            </div>
            <div className={style.button}><button>Button</button></div>
        </div>
    );
};

export default CasinoPartners;
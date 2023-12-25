import style from '../PartMultiplicator/PartMultiplicator.module.scss'

type PartMultiplicatorType = {
    img:string
    title: string
    xx: string
}

const PartMultiplicator = ({img,title,xx}:PartMultiplicatorType) => {
    return (
        <div className={style.container}>
           <div><img src={img}/></div>
            <p>{title}</p>
            <p>{xx}</p>
        </div>
    );
};

export default PartMultiplicator;
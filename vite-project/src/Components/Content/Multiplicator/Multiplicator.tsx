import style from './Multiplicator.module.scss'
import PartMultiplicator from "./PartMultiplicator/PartMultiplicator";

const Multyplicator = () => {
    return (
        <div>
            <div className={style.container}>
                <p>Символ</p>
                <p>Имя символа</p>
                <p>Мультипликатор</p>
            </div>
            <PartMultiplicator/>
            <PartMultiplicator/>
            <PartMultiplicator/>
            <PartMultiplicator/>
            <PartMultiplicator/>
            <PartMultiplicator/>
        </div>
    );
};

export default Multyplicator;
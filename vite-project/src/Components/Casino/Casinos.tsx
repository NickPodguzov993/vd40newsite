import CasinoCard from "./CasinoCard/CasinoCard";
import style from '../Casino/Casinos.module.scss'

const Casinos = () => {
    return (
        <div className={style.container}>
            <h2 className={style.title}>Em quais cassinos jogar o game Fortune Tiger</h2>
            <p className={style.description}>Se quiser tentar a sua sorte e jogar Fortune Tiger a dinheiro real, aqui estão alguns dos melhores casinos para jogar:</p>
            <div className={style.casinos}>
                <CasinoCard/>
                <CasinoCard/>
                <CasinoCard/>
                <CasinoCard/>
                <CasinoCard/>
            </div>

        </div>
    );
};

export default Casinos;
import CasinoCard from "./CasinoCard/CasinoCard";
import style from '../Casino/Casinos.module.scss'
import casino1win from '../../assets/casino 1win.png'
import betano from '../../assets/casino betano.webp'
import braBet from '../../assets/casino brabet.webp'
import estrella from '../../assets/casino estrela.webp'
import gbg from '../../assets/casino gbg.webp'

const Casinos = () => {
    return (
        <div className={style.container}>
            <h2 className={style.title}>Em quais cassinos jogar o game Fortune Tiger</h2>
            <p className={style.description}>Se quiser tentar a sua sorte e jogar Fortune Tiger a dinheiro real, aqui estão alguns dos melhores casinos para jogar:</p>
            <div className={style.casinos}>
                <CasinoCard image={casino1win}/>
                <CasinoCard image={betano}/>
                <CasinoCard image={braBet}/>
                <CasinoCard image={estrella}/>
                <CasinoCard image={gbg}/>
            </div>

        </div>
    );
};

export default Casinos;
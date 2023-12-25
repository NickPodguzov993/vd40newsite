import CasinoPartners from "./CasinoPartners/CasinoPartners";
import style from '../ListCasino/ListCasino.module.scss'
import casino1w from '../../../assets/casino 1win.png'
import brabet from '../../../assets/casino brabet.webp'
import betano from '../../../assets/casino betano.webp'
import gbg from '../../../assets/casino gbg.webp'
import estrella from '../../../assets/casino estrela.webp'


const LIstCasino = () => {
    return (
        <div className={style.container}>
            <h2 >Onde jogar Fortune Tiger?</h2>
           <CasinoPartners image={casino1w} title={'Casino Name'} description={'500% para o primeiro depósito e 250 FS'}/>
           <CasinoPartners image={brabet} title={'Casino Name'} description={'500% para o primeiro depósito e 250 FS'}/>
           <CasinoPartners image={betano} title={'Casino Name'} description={'500% para o primeiro depósito e 250 FS'}/>
           <CasinoPartners image={gbg} title={'Casino Name'} description={'500% para o primeiro depósito e 250 FS'}/>
           <CasinoPartners image={estrella} title={'Casino Name'} description={'500% para o primeiro depósito e 250 FS'}/>
        </div>
    );
};

export default LIstCasino;
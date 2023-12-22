import CasinoPartners from "./CasinoPartners/CasinoPartners";
import style from '../ListCasino/ListCasino.module.scss'


const LIstCasino = () => {
    return (
        <div className={style.container}>
            <h2 >Onde jogar Fortune Tiger?</h2>
           <CasinoPartners title={'Casino Name'} description={'500% para o primeiro depósito e 250 FS'}/>
           <CasinoPartners title={'Casino Name'} description={'500% para o primeiro depósito e 250 FS'}/>
           <CasinoPartners title={'Casino Name'} description={'500% para o primeiro depósito e 250 FS'}/>
        </div>
    );
};

export default LIstCasino;
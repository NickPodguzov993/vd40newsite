import style from './Multiplicator.module.scss'
import PartMultiplicator from "./PartMultiplicator/PartMultiplicator";
import orange from '../../../assets/fortune-tiger-2.webp'
import fogos from '../../../assets/Fogos-de-artificio.webp'
import vermelho from '../../../assets/Envelope-vermelho.webp'
import saco from '../../../assets/Saco-de-Moedas-de-Ouro.webp'
import estatueta from '../../../assets/Estatueta-de-Dragao-de-Jade.webp'
import sycee from '../../../assets/Saco-de-Moedas-de-Ouro.webp'
import tigreDaFortuna from '../../../assets/wild.webp'

const Multyplicator = () => {
    return (
        <div>
            <div className={style.container}>
                <p>Símbolo</p>
                <p>Nome do símbolo</p>
                <p>Multiplicador</p>
            </div>
            <PartMultiplicator title={'Tangerina'} img={orange} xx={'x3'}/>
            <PartMultiplicator title={'Fogos de artifício'} img={fogos} xx={'x5'}/>
            <PartMultiplicator title={'Envelope vermelho'} img={vermelho} xx={'x8'}/>
            <PartMultiplicator title={'Saco de Moedas de Ouro'} img={saco} xx={'x10'}/>
            <PartMultiplicator title={'Estatueta de Dragão de Jade'} img={estatueta} xx={'x25'}/>
            <PartMultiplicator title={'Sycee Gold'} img={sycee} xx={'x100'}/>
            <PartMultiplicator title={'Tigre da Fortuna Selvagem'} img={tigreDaFortuna} xx={'x250'}/>

        </div>
    );
};

export default Multyplicator;
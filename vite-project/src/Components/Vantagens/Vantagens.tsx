import style from '../Vantagens/Vantagens.module.scss'
import green from '../../assets/green.svg'
import red from '../../assets/red.svg'
const Vantagens = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Vantagens e desvantagens do slot</h1>
            <div className={style.content}>
                <div className={style.advantages}>
                   <div className={style.flexAdvantages}><div><img src={green}/> </div> <p>Jogo de jackpot progressivo;</p></div>
                   <div className={style.flexAdvantages}><div><img src={green}/> </div> <p>Disponível para computador e smartphone;</p></div>
                   <div className={style.flexAdvantages}> <div><img src={green}/> </div> <p>243 maneiras de ganhar;</p></div>
                   <div className={style.flexAdvantages}> <div><img src={green}/> </div> <p>Recurso de giros grátis;</p></div>
                   <div className={style.flexAdvantages}> <div><img src={green}/> </div> <p>RTP alto;</p></div>

                </div>
                <div className={style.disAdvantages}>
                    <div className={style.flexAdvantages}><div><img src={red}/> </div> <p>A trilha sonora pode se tornar enjoativa;</p></div>
                    <div className={style.flexAdvantages}><div ><img src={red}/> </div> <p>Linhas de pagamento fixas – O caça-níquel tem um número fixo de linhas de pagamento,
                        limitando as opções de apostas para os jogadores que preferem mais flexibilidade.</p></div>
                </div>
            </div>
        </div>
    );
};

export default Vantagens;
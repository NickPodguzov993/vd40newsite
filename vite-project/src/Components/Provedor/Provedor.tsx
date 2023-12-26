import style from '../Provedor/Provedor.module.scss'
import img from '../../assets/fortune-tiger-provedor.webp'

const Provedor = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <img src={img}/>
            </div>
            <div className={style.provedor}>
                <h2 className={style.title}>Provedor</h2>
                <p className={style.description}>PG Soft, muitas vezes referida como Pocket Games Soft, é uma empresa em rápido crescimento no sector do desenvolvimento de jogos de casino. Com licenças da Malta Gaming Authority e da UK Gambling Commission, a PG SOFT está a trabalhar arduamente para realizar os seus produtos.
                    A PG Soft mostra realmente a sua excelência em fornecer um ambiente de jogo seguro e justo. Todas as suas slots são examinadas pelos laboratórios BMM e GA Tasting Labs, de modo a que cada volta da slot machine seja completamente aleatória e equitativa.
                </p>
            </div>

        </div>
    );
};

export default Provedor;
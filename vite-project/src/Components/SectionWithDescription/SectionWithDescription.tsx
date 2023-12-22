import style from './SectionWithDescription.module.scss'
import firstImage from '../../assets/firstImage.jpg'
import secondImage from '../../assets/secondImage.jpg'


const SectionWithDescription = () => {
    return (
        <div className={style.container}>
            <div className={style.img}>
                <img src={firstImage} alt=""/>
            </div>
            <p>Agora, vamos nos aprofundar nas regras do jogo.
                Ao familiarizar-se com essas diretrizes,
                você aumentará suas chances de sucesso no cativante mundo do Fortune Tiger.
                O jogo apresenta um layout simples,
                no qual você encontrará sete símbolos distintos organizados em uma grade 3×3
                na interface do jogo.
                Para ganhar, seu objetivo é alinhar três ou mais símbolos idênticos.
                Vale ressaltar também que a criação de uma disposição diagonal de três símbolos dá direito
                a um prêmio. O objetivo é obter uma série de vitórias nas linhas de pagamento disponíveis,
                que incluem as três linhas horizontais e as duas diagonais.
                O pagamento depende tanto do símbolo em si quanto do valor apostado.
                Essas combinações podem resultar em prêmios de até 2.500 vezes a aposta inicial.</p>
            <div  className={style.img2} >
                <img src={secondImage} alt=""/>

            </div>
        </div>
    );
};

export default SectionWithDescription;
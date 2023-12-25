import PartLeft from "./PartLeft/PartLeft";
import PartRight from "./PartRight/PartRight";
import style from '../AdvantagePart/AdvantagePart.module.scss'

const AdvantagePart = () => {
    return (
        <div className={style.container}>
            <PartLeft description={'Símbolo Wild: O emblema do Fortune Tiger é o símbolo curinga do jogo. Esse símbolo pode substituir qualquer outro símbolo nos cilindros, exceto o scatter, para formar combinações vencedoras. A presença de vários símbolos curinga alinhados em uma linha de pagamento ativa tem o potencial de levar a recompensas significativas.'}/>
            <PartRight description={'Símbolo Scatter: No Fortune Tiger, um gongo dourado brilhante assume o papel de símbolo de dispersão. Para acionar a rodada de bônus de giros grátis, é necessário acertar três ou mais símbolos scatter em qualquer lugar dos cilindros.'}/>
            <PartLeft description={'Símbolo Wild: O emblema do Fortune Tiger é o símbolo curinga do jogo. Esse símbolo pode substituir qualquer outro símbolo nos cilindros, exceto o scatter, para formar combinações vencedoras. A presença de vários símbolos curinga alinhados em uma linha de pagamento ativa tem o potencial de levar a recompensas significativas.'}/>
            <PartRight description={'Símbolo Scatter: No Fortune Tiger, um gongo dourado brilhante assume o papel de símbolo de dispersão. Para acionar a rodada de bônus de giros grátis, é necessário acertar três ou mais símbolos scatter em qualquer lugar dos cilindros.'}/>
            <PartLeft description={'Rodadas Grátis: Os jogadores que ativarem o bônus de Giros Grátis (FS) ao conseguirem símbolos scatter receberão um número específico de giros grátis com base na quantidade de scatters conseguidos. Notavelmente, a chance de garantir recompensas substanciais aumenta, pois todos os ganhos obtidos durante a fase de rodadas grátis estão sujeitos a um determinado multiplicador que os duplica. Além disso, o recurso de rodadas grátis pode ser acionado novamente ao se obter símbolos scatter adicionais durante a rodada em andamento.'}/>
            <PartRight description={'Jackpot Fortune Tiger: O recurso de jackpot progressivo do Fortune Tiger oferece aos jogadores a oportunidade de ganhar prêmios monumentais. Esse recurso pode ser acionado em intervalos aleatórios durante o jogo, apresentando aos jogadores uma roda com diversos níveis de jackpot. Um giro da roda pode cair em um desses segmentos de jackpot, permitindo que o jogador sortudo reivindique a recompensa de jackpot associada.'}/>
            <PartLeft description={'Recurso Comprar: Para aqueles que buscam acesso imediato aos elementos de bônus do jogo, o Fortune Tiger apresenta a opção Buy Feature. Ao pagar uma quantia predeterminada, os jogadores podem ativar diretamente o recurso de rodadas grátis, ignorando o jogo base.'}/>
        </div>
    );
};

export default AdvantagePart;
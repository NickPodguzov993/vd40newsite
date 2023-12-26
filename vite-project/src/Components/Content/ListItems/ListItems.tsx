import Items from "./Items/Items";

const ListItems = () => {
    return (
        <div>
            <Items spanBold={'Símbolo Wild:'} description={' O emblema do Fortune Tiger é o símbolo curinga do jogo. Esse símbolo pode substituir qualquer outro símbolo nos cilindros, exceto o scatter, para formar combinações vencedoras. A presença de vários símbolos curinga alinhados em uma linha de pagamento ativa tem o potencial de levar a recompensas significativas.'}/>
            <Items spanBold={'Símbolo Scatter:'} description={' No Fortune Tiger, um gongo dourado brilhante assume o papel de símbolo de dispersão. Para acionar a rodada de bônus de giros grátis, é necessário acertar três ou mais símbolos scatter em qualquer lugar dos cilindros.'}/>
            <Items spanBold={'Rodadas Grátis:'} description={' Os jogadores que ativarem o bônus de Giros Grátis (FS) ao conseguirem símbolos scatter receberão um número específico de giros grátis com base na quantidade de scatters conseguidos. Notavelmente, a chance de garantir recompensas substanciais aumenta, pois todos os ganhos obtidos durante a fase de rodadas grátis estão sujeitos a um determinado multiplicador que os duplica. Além disso, o recurso de rodadas grátis pode ser acionado novamente ao se obter símbolos scatter adicionais durante a rodada em andamento.'}/>
            <Items spanBold={'Jackpot Fortune Tiger:'} description={' O recurso de jackpot progressivo do Fortune Tiger oferece aos jogadores a oportunidade de ganhar prêmios monumentais. Esse recurso pode ser acionado em intervalos aleatórios durante o jogo, apresentando aos jogadores uma roda com diversos níveis de jackpot. Um giro da roda pode cair em um desses segmentos de jackpot, permitindo que o jogador sortudo reivindique a recompensa de jackpot associada.'}/>
            <Items spanBold={'Recurso Comprar:'} description={' Para aqueles que buscam acesso imediato aos elementos de bônus do jogo, o Fortune Tiger apresenta a opção Buy Feature. Ao pagar uma quantia predeterminada, os jogadores podem ativar diretamente o recurso de rodadas grátis, ignorando o jogo base.'}/>
            <p>Com a combinação certa de multiplicadores e giros extras,
                o jogo com tema de tigre apresenta um pagamento máximo de 2.500 vezes a aposta inicial.
                Por exemplo, com uma aposta de R$10, isso se traduz em <span>um prêmio substancial de R$25.000!</span> </p>
        </div>
    );
};

export default ListItems;
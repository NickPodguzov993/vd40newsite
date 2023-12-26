import style from '../TitleWithDescription/TitleWithDescription.module.scss'

const TitleWithDescription = () => {
    return (
        <div >
            <div className={style.container}>
                <h2>
                    Robôs Fortune Tiger
                </h2>
                <p>
                    É muito importante ser cético em relação a robôs, bots ou pequenos programas que prometem um determinado resultado.
                    Conforme mencionado acima, o Fortune Tiger trabalha com o princípio do RNG (gerador de números aleatórios). Os resultados do jogo têm uma natureza aleatória constante. Consequentemente, não há nenhum método concebível para o robô prever com precisão os próximos resultados.
                </p>
            </div>
            <div className={style.container}>
                <h2>
                    Jogo responsável
                </h2>
                <p>
                    Jogar Fortune Tiger deve ser divertido, não uma forma de ganhar dinheiro. É importante estabelecer limites, tanto de tempo quanto de dinheiro, e se ater a eles. Se sentir que está perdendo o controle, pare de jogar. Aconselhamos também o uso de ferramentas especiais para limitar depósitos, perdas e sessões de jogo que muitos cassinos online oferecem. Ao fazer isso, você garantirá uma experiência de jogo segura e responsável.
                </p>
            </div>
            <div className={style.container}>
                <h2>
                    Considerações finais
                </h2>
                <p>
                    O Fortune Tiger ganhou imensa popularidade entre os jogadores brasileiros devido aos seus grandes prêmios e à jogabilidade clara e simples. Esse jogo tem um RTP (Retorno ao Jogador) razoavelmente alto, volatilidade média e oferece aos jogadores bônus decentes. Se você quiser tentar a sorte, se divertir e aproveitar a jogabilidade, recomendamos que experimente o Fortune Tiger. Mas não se esqueça de jogar com responsabilidade!
                </p>
            </div>
        </div>
    );
};

export default TitleWithDescription;
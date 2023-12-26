import ContentSection from "./ContentSection/ContentSection";
import Tiger1 from '../../assets/1.webp'
import Tiger2 from '../../assets/2.webp'
import Tiger3 from '../../assets/3.webp'
import Tiger4 from '../../assets/4.webp'
import Tiger10 from '../../assets/10.webp'
import Tiger11 from '../../assets/11.webp'
import Tiger12 from '../../assets/12.webp'
import Tiger5 from '../../assets/tiger5.webp'
import Tiger6 from '../../assets/tiger6.webp'
import Tiger7 from '../../assets/tiger7.webp'
import tigerSmall from '../../assets/9small.webp'
import Vantagens from "../Vantagens/Vantagens";
import SectionWithDescription from "../SectionWithDescription/SectionWithDescription";
import style from './Content.module.scss'
import Provedor from "../Provedor/Provedor";
import Multiplicator from "./Multiplicator/Multiplicator";
import ContentPart from "./ContentPart/ContentPart";
import LIstCasino from "./ListCasino/LIstCasino";
import DescriptionHeading from "../DescriptionHeading/DescriptionHeading";
import {useState} from "react";
import ListItems from "./ListItems/ListItems";
import DescriptionAboutPlatform from "./DescriptionAboutPlatform/DescriptionAboutPlatform";
import ElementsDescription from "./ElementsDescription/ElementsDescription";
import ElementsWithPicture from "./ElementsWithPicture/ElementsWithPicture";
import TitleWithDescription from "./TitleWithDescription/TitleWithDescription";

const Content = () => {
    const [showMenu, setShowMenu] = useState(false)
    const changeBurgerMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <div className={style.container}>
            <div onClick={changeBurgerMenu} className={style.btn}>
                <div className={style.contentBtn}>Contente</div>
                {showMenu && <div>sfsfd
                </div>}
                <div className={style.blackCube}></div>
            </div>

            <div id='title1'>
                <ContentSection title={'Fortune Tiger – resumo do jogo'} image={Tiger1}
                                description={'O mundo dos jogos de casino online é enorme e continua a crescer com novas opções. Um dos jogos mais populares que se tem destacado recentemente é o Fortune   Tiger, que muitos jogadores chamam  de “Jogo do Tigre“.\n' +
                                    'Desenvolvida pela PG Soft e lançada em março de 2022, está slot online baseia-se na cultura e nas imagens asiáticas para criar uma experiência de jogo divertida e vibrante com várias mecânicas de jogo.\n' +
                                    'Os jogadores de cassinos online no Brasil têm sido cada vez mais cativados pelo Fortune Tiger devido ao seu visual atrativo e potencial para ganhar dinheiro.Este jogo de slot Fortune Tiger tem uma tabela de jogo mais pequena do que a maioria dos outros jogos de casino online, com uma grelha de 3 carretéis, 3 linhas e 5 linhas de pagamento. O jogo tem uma mecânica simples e clara, o que o torna acessível a jogadores de qualquer idade e habilidade. Para ganhar dinheiro, o jogador precisa de fazer combinações de símbolos que correspondam às linhas de pagamento.\n' +
                                    'A Pocket Games Soft criou um produto fantástico que está disponível em alguns dos melhores casinos online. Pode obter respins e multiplicadores que o podem ajudar a ganhar até 2500x a sua aposta original!'}/>

            </div>
            <Provedor/>
            <div id='title2'>
                <ContentSection title={'Graphics and interface'} image={Tiger2}
                                description={'Este jogo de caça-níqueis tem uma atmosfera asiática, com um tigre como a estrela do show. Os tigres são vistos como símbolos de poder e sucesso em muitas culturas, portanto, não é de se admirar que esse jogo seja um sucesso entre os jogadores.\n' +
                                    'A tela de jogo é cercada por colunas vermelhas com uma linha dourada ao longo delas. Acima, há um arco com as mesmas cores, com pétalas de flores de cerejeira flutuando.\n' +
                                    'O jogo de caça-níqueis Fortune Tiger tem uma atmosfera asiática, mas também tem alguns toques modernos, como o próprio Fortune Tiger. Ele está vestido para impressionar com uma camisa de seda vermelha e óculos escuros e senta-se no topo da grade com um grande sorriso para o jogador. Ele tem até uma pequena bandeira que pode dar aos seus ganhos um multiplicador de x10 – sempre pronto para dar um grande impulso ao seu dinheiro!\n' +
                                    'Os visuais são realmente incríveis, com todos os pequenos detalhes e cores brilhantes, emergindo totalmente os jogadores em uma atmosfera asiática única. A música de fundo também é muito intensa e contribui para uma experiência geral emocionante.'}/>

            </div>
            <div id='title3'>
                <ContentSection title={'Tamanhos de apostas, RTP e Volatilidade'} image={Tiger3}
                                description={'Ao jogar caça-níqueis, é essencial observar a taxa RTP (Retorno ao Jogador) – quanto dinheiro você receberá de volta ao jogar. De modo geral, um RTP mais alto significa que mais dinheiro será devolvido aos jogadores ao longo do tempo. O Fortune Tiger tem um Retorno ao Jogador (RTP) teórico de 96,81%, um dos mais altos na categoria de caça-níqueis de 3 cilindros. Isso significa que você perderá dinheiro a longo prazo, mas você não está lá para isso, não é mesmo? Você só quer ganhar um jackpot de tamanho razoável e sair do jogo.\n' +
                                    'Entretanto, é importante observar que há vários fatores a serem considerados e um RTP alto nem sempre garante a melhor experiência para o tipo de jogo de sua preferência. Outra característica crucial de uma máquina caça-níqueis que geralmente é monitorada é a volatilidade.\n' +
                                    'Volatilidade é a frequência dos pagamentos feitos pela máquina de jogo. Os jogos de baixa volatilidade oferecem pagamentos mais frequentes, embora em valores menores. O Fortune Tiger tem uma volatilidade média, proporcionando aos jogadores uma sessão de jogo emocionante sem riscos desnecessários. Quanto às apostas, a aposta mínima é de 0,25 R$, enquanto a aposta máxima chega a 250 R$ por rodada. Não se esqueça de que o maior prêmio que pode ser obtido nesse caça-níquel é 2500 vezes a aposta inicial. Além disso, os jogadores ainda têm a oportunidade de reivindicar o jackpot inteiro a qualquer momento.'}/>

            </div>
            <div id='title4'>
                <Vantagens/>
            </div>
            <div id='title5'>
                <ContentSection title={'Como jogar Fortune Tiger?'} image={Tiger4}
                                description={'Para começar a jogar Fortune Tiger, você precisará de um dispositivo (como um smartphone ou computador) e uma conta em um cassino online de boa reputação que ofereça o jogo. Para sua conveniência, você pode baixar o app Fortune Tiger em seu telefone.\n' +
                                    'Siga estas etapas simples para começar a jogar com dinheiro real:\n' +
                                    'Escolha um desses cassinos on-line de boa reputação (todos eles são certificados e têm boas opções de pagamento).\n' +
                                    'Acesse o site do cassino e registre uma conta. Não se esqueça de aplicar nosso código promocional para receber giros grátis. Lembre-se: você pode registrar apenas uma conta por cassino!\n' +
                                    'Deposite em sua conta para poder apostar.\n' +
                                    'Procure o jogo, abra-o e defina a aposta.\n' +
                                    'Depois de definir a aposta, você poderá girar os rolos e torcer para que os símbolos se alinhem em uma combinação vencedora.\n' +
                                    'É isso aí! Fácil, não é?'}/>

            </div>
            <div id='title6'>
                <ContentSection title={'Regras do jogo'} image={Tiger5}
                                description={'Agora, vamos nos aprofundar nas regras do jogo. Ao familiarizar-se com essas diretrizes, você aumentará suas chances de sucesso no cativante mundo do Fortune Tiger.\n' +
                                    'O jogo apresenta um layout simples, no qual você encontrará sete símbolos distintos organizados em uma grade 3×3 na interface do jogo. Para ganhar, seu objetivo é alinhar três ou mais símbolos idênticos. Vale ressaltar também que a criação de uma disposição diagonal de três símbolos dá direito a um prêmio. O objetivo é obter uma série de vitórias nas linhas de pagamento disponíveis, que incluem as três linhas horizontais e as duas diagonais. O pagamento depende tanto do símbolo em si quanto do valor apostado. Essas combinações podem resultar em prêmios de até 2.500 vezes a aposta inicial.'}/>

            </div>
            <SectionWithDescription/>
            <div id='title7'>
                <ContentSection title={'Símbolos e combinações'} image={Tiger6}
                                description={'Antes de começar a jogar Fortune Tiger, você precisa inicialmente entender o significado dos símbolos do jogo. Quando você forma uma combinação vencedora de três símbolos idênticos, cada um deles pode trazer prêmios que variam de 0,6 a 20 vezes a sua aposta. Há dois conjuntos diferentes de símbolos nesse jogo de cassino on-line: símbolos com pagamentos mais altos e símbolos com pagamentos mais baixos. Os mais baixos são Tangerina, Fogos de Artifício e Envelope Vermelho. Os que pagam mais são Bag of Gold Coins, Jade Dragon Figurine, Sycee Gold e Fortune Tiger Wild.\n' +
                                    'Os símbolos do jogo estão intimamente relacionados ao Ano Novo Chinês de 2022, que corresponde ao ano do Tigre no zodíaco chinês. Portanto, além do próprio tigre, o jogo contém objetos tradicionalmente associados a esse feriado. Cada símbolo corresponde a um determinado multiplicador, dependendo do tamanho da aposta:'}/>

            </div>
            <Multiplicator/>
            <div id='title8'>
                <ContentSection title={'Opções de bônus no Fortune Tiger'} image={Tiger7}
                                description={'O Fortune Tiger traz uma série de recursos de bônus cativantes que injetam emoção e elevam o potencial de ganhos substanciais. Vamos nos aprofundar nesses atributos notáveis:'}/>

            </div>
            <ListItems/>
            <ContentPart title={'O que é um Super Mega Ganho Tigre?'}
                         image={tigerSmall}
                         description={'PG Soft, muitas vezes referida como Pocket Games Soft, é uma empresa em rápido crescimento no sector do desenvolvimento de jogos de casino. Com licenças da Malta Gaming Authority e da UK Gambling Commission, a PG SOFT está a trabalhar arduamente para realizar os seus produtos.\n' +
                             'A PG Soft mostra realmente a sua excelência em fornecer um ambiente de jogo seguro e justo. Todas as suas slots são examinadas pelos laboratórios BMM e GA Tasting Labs, de modo a que cada volta da slot machine seja completamente aleatória e equitativa.\n' +
                             'O Super Mega Ganho Tigre lhe dá a oportunidade de obter um grande prêmio mesmo sem uma aposta significativa. Isso significa que você pode apostar apenas alguns centavos e ainda assim obter um maravilhoso Super Mega Ganho nesse jogo do tigre. Portanto, esse é o cobiçado prêmio que todo jogador almeja.'}/>
            <LIstCasino/>
            <DescriptionAboutPlatform title={'Como escolher a melhor plataforma?'}
                                      description={'A escolha da melhor plataforma para jogar caça-níqueis no Brasil requer a consideração de vários fatores. Aqui estão algumas dicas para ajudá-lo a escolher:\n' +
                                          '1. Certifique-se de que o cassino escolhido tenha um jogo Fortune Tiger. Basta digitar o nome do caça-níquel no campo de busca da plataforma do cassino.\n' +
                                          '2. Métodos de pagamento: Certifique-se de que a plataforma ofereça métodos de pagamento seguros e convenientes para depósitos e saques.\n' +
                                          '3. Suporte ao cliente: Uma boa plataforma deve ter um suporte ao cliente eficiente e ágil para ajudar com quaisquer problemas ou dúvidas.\n' +
                                          '4. Bônus e promoções: Verifique se a plataforma oferece bônus e promoções atraentes para os jogadores, mas leia os termos e condições para entender os requisitos de apostas.\n' +
                                          '5. Avaliações e reputação: Pesquise as avaliações de outros jogadores e a reputação da plataforma para ter uma ideia de sua confiabilidade.\n' +
                                          '\n Lembre-se de que o jogo deve ser uma forma de entretenimento e deve ser praticado com responsabilidade. Nunca gaste mais dinheiro do que você pode se dar ao luxo de perder.'}/>
            <div id='title9'>
                <ContentSection title={'Como funciona o Fortune Tiger'} image={Tiger10}
                                description={'A slot Fortune Tiger tem uma jogabilidade bastante simples e direta. Aqui está uma explicação de como funciona a slot Fortune Tiger.\n' +
                                    'A jogabilidade do caça-níquel Fortune Tiger é baseada em um esquema clássico, mas com um toque especial. O jogo consiste em uma grade 3×3 cheia de símbolos. Para iniciar o jogo, você precisa clicar no botão “Spin” (Girar). Depois disso, 3 rolos começarão a girar e pararão, revelando os símbolos localizados nas linhas de pagamento.\n' +
                                    'O objetivo do jogo Fortune Tiger é obter combinações vencedoras de símbolos nas linhas de pagamento. Para determinar quais símbolos trazem os maiores pagamentos, você pode consultar a tabela de pagamentos ou as regras do jogo. Símbolos especiais, como Wild e Scatter, podem formar combinações vencedoras ou ativar recursos adicionais.\n' +
                                    'Vale ressaltar que o jogo Tiger usa o algoritmo RNG (gerador de números aleatórios). O que é isso? É uma tecnologia que fornece resultados aleatórios. Nos jogos baseados em RNG, tanto o cassino quanto o jogador não podem manipular o resultado. Isso significa que o Fortune Tiger é um jogo totalmente confiável.'}/>

            </div>
            <div id='title10'>
                <ContentSection title={'Por que esse jogo é tão popular?'} image={Tiger11}
                                description={'No mundo acelerado dos jogos on-line, as tendências podem mudar rapidamente. Por exemplo, o caça-níquel “Fortune Tiger”, desenvolvido pela PG Soft, apareceu recentemente no mercado brasileiro. Agora, esse tradicional jogo de caça-níqueis “Fortune Tiger” está experimentando uma explosão de popularidade. Assim como em jogos como Aviator e Mines, a nova fama do Fortune Tiger parece estar intimamente relacionada ao fenômeno TikTok. O jogo se tornou uma tendência nessa plataforma, com pessoas famosas e não tão famosas compartilhando suas experiências de ganhos e perdas, bem como dicas e estratégias relacionadas ao jogo. O tema empolgante do jogo, combinado com a jogabilidade original, leva os jogadores a uma verdadeira aventura asiática. Essa popularidade do jogo nas mídias sociais parece ser um dos principais fatores que contribuem para sua crescente popularidade.'}/>

            </div>
            <div id='title11'>
                <ContentSection title={'Fortune Tiger – como depositar e sacar dinheiro'} image={Tiger12}
                                description={'O jogo Tiger já ganhou grande popularidade nas mídias sociais e em vários cassinos on-line entre os brasileiros. No entanto, ainda há algumas incertezas, como o processo de depósito e saque. Como o Fortune Tiger opera como um caça-níquel classificado como “jogo de azar”, somente as casas de apostas ou os cassinos on-line têm acesso a ele.\n' +
                                    'Consequentemente, é necessário depositar dinheiro real por meio de um cassino para participar do Fortune Tiger. Se ganhar, você terá a oportunidade de retirar seus ganhos diretamente para a sua conta. Mas como é todo esse processo? Vamos entrar em detalhes:'}/>

            </div>
            <ElementsDescription/>
            <ElementsWithPicture/>
            <TitleWithDescription/>
            <DescriptionHeading/>
        </div>
    );
};
export default Content;
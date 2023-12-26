import PictureElement from "./PictureElement/PictureElement";
import telegram from '../../../assets/13 telegram.webp'
import smallTiger from '../../../assets/13 small.webp'

const ElementsWithPicture = () => {
    return (
        <div>
            <PictureElement title={'Fortune Tiger Telegram'} image={telegram} description={'O Telegram, uma plataforma de mensagens instantâneas amplamente conhecida, há muito tempo foi além de seu objetivo principal – a comunicação. Agora, o Telegram oferece uma oportunidade de receber informações com a ajuda de bots especiais. Um ótimo exemplo é o bot Fortune Tiger do Telegram, que oferece aos usuários uma abordagem inovadora para interagir com o popular jogo de caça-níqueis. Aqui estão os atributos distintivos do bot do Telegram Fortune Tiger:\n' +
                'Notificações: Os jogadores têm a opção de se inscrever para receber notificações oportunas sobre bônus exclusivos, rodadas grátis e outras promoções relacionadas ao Fortune Tiger.\n' +
                'Fácil acesso às regras do jogo: Com o bot, os jogadores podem acessar facilmente detalhes importantes, como as regras do jogo, a tabela de pagamentos e outras informações relevantes, permitindo que se mantenham atualizados o tempo todo.'}/>
            <p>Aqui está o link para nosso bot do Telegram:</p>
            <PictureElement title={'Grupo do WhatsApp do Fortune Tiger'} image={smallTiger} description={'Os chamados robôs Fortune Tiger estão amplamente difundidos no Telegram e no WhatsApp, onde os vendedores adicionam pessoas a grupos e vendem sinais de jogos.\n' +
                'Aconselhamos cautela com essas ofertas, pois as pessoas que as vendem estão interessadas principalmente em seu próprio lucro, não no seu. A eficácia dos sinais que esses bots geram para obter lucro está longe de ser garantida.\n' +
                'Em última análise, esses vendedores estão essencialmente vendendo sonhos. Você deve ter cuidado ao se deparar com grupos do Fortune Tiger no WhatsApp.'}/>
        </div>
    );
};

export default ElementsWithPicture;
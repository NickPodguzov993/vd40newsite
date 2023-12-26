import Element from "./Element/Element";

const ElementsDescription = () => {

    return (
        <div>
            <Element title='Depósitos'
                     description={'1. Escolha de um cassino: Antes de fazer um depósito, certifique-se de que o cassino on-line escolhido inclua o Fortune Tiger em sua seleção de jogos.\n' +
                         '2. Registro: Crie uma conta na plataforma do cassino.\n' +
                         '3. Métodos de pagamento: Vá para a seção Banco ou Caixa, que oferece uma variedade de métodos de pagamento. Estes incluem cartões de crédito/débito, carteiras eletrônicas como PayPal ou Skrill e até mesmo transferências bancárias. Alguns cassinos podem oferecer a opção de usar criptomoedas.\n' +
                         '4. Transação: Selecione o método de sua preferência, insira o valor do depósito desejado e siga as instruções na tela para concluir a transação.\n' +
                         '5. Comece a jogar: Depois de fazer um depósito com sucesso, vá para a seção de jogos, procure o Fortune Tiger e comece a jogar.'}/>
            <Element title={'Retirada:'}
                     description={'1. Iniciando uma retirada: Depois de acumular seus ganhos, vá para a seção de caixa do cassino. Lá, selecione a opção “Retirada de fundos”.\n' +
                         '2. Seleção de um método: Escolha um método de saque que seja conveniente para você. Para garantir transações tranquilas, geralmente é recomendável escolher o mesmo método usado no depósito.\n' +
                         '3. Especificação do valor: Especifique o valor exato que você deseja sacar.\n' +
                         '4. Tempo de processamento: Depois que a retirada é iniciada, há um período de processamento. Durante esse estágio, o cassino verifica a legitimidade da transação. A duração desse processo pode variar de acordo com a política do cassino e o método de saque escolhido.'}/>
        </div>
    );
};

export default ElementsDescription;







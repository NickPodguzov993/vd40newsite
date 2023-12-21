import CasinoCard from "./CasinoCard/CasinoCard";

const Casinos = () => {
    return (
        <div>
            <h2>Em quais cassinos jogar o game Fortune Tiger</h2>
            <p>Se quiser tentar a sua sorte e jogar Fortune Tiger a dinheiro real, aqui estão alguns dos melhores casinos para jogar:</p>
            <div>
                <CasinoCard/>
                <CasinoCard/>
                <CasinoCard/>
                <CasinoCard/>
                <CasinoCard/>
            </div>

        </div>
    );
};

export default Casinos;
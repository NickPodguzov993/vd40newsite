import style from '../NavBurger/NavBurger.module.scss'
import { Link} from 'react-scroll'

const NavBurger = () => {
    return (
        <div className={style.container}>
            <h2>Contente</h2>
            <Link  to="title1"
                   spy={true}
                   smooth={true}
                   offset={-70}
                   duration={500}
            > <h3>Fortune Tiger – resumo do jogo</h3></Link>
            <Link  to="title2"
                   spy={true}
                   smooth={true}
                   offset={-70}
                   duration={500}
            > <h3>Graphics and interface
            </h3></Link>
            <Link  to="title3"
                   spy={true}
                   smooth={true}
                   offset={-70}
                   duration={500}
            > <h3>Tamanhos de apostas, RTP e Volatilidade</h3></Link>
            <Link  to="title4"
                   spy={true}
                   smooth={true}
                   offset={-70}
                   duration={500}
            > <h3>Vantagens e desvantagens do slot</h3></Link>
            <Link  to="title5"
                   spy={true}
                   smooth={true}
                   offset={-70}
                   duration={500}
            > <h3>Como jogar Fortune Tiger?
            </h3></Link>
            <Link  to="title6"
                   spy={true}
                   smooth={true}
                   offset={-70}
                   duration={500}
            > <h3>Regras do jogo</h3></Link>
            <Link  to="title7"
                   spy={true}
                   smooth={true}
                   offset={-70}
                   duration={500}
            > <h3>Símbolos e combinações
            </h3></Link>
            <Link  to="title8"
                   spy={true}
                   smooth={true}
                   offset={-70}
                   duration={500}
            > <h3>Opções de bônus no Fortune Tiger</h3></Link>
            <Link  to="title9"
                   spy={true}
                   smooth={true}
                   offset={-70}
                   duration={500}
            > <h3>Heading 48</h3></Link>

        </div>
    );
};

export default NavBurger;
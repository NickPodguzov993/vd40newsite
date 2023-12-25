import style from '../Footer/Footer.module.scss'
import tiger from '../../assets/smallTiger.png'

const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.navBar}>
                <div className={style.img}><img src={tiger} /></div>
                <div>Estratégias</div>
                <div>Demo</div>
                <div>Fortune Tiger Betano</div>
                <div>Fortune Tiger Brabet</div>
                <div>Fortune Tiger Baixar</div>
            </div>

            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <p>O site é apenas para fins informativos e não aceita pagamentos dos usuários.
                18+ O site contém informações apenas para pessoas maiores de idade.
                As informações publicadas neste site não são anúncios
                e são apenas para fins informativos. Email: fortunetigerjogo@protonmail.com</p>
            <p></p>
        </div>
    );
};

export default Footer;
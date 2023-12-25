import style from '../Footer/Footer.module.scss'
import tiger from '../../assets/smallTiger.png'

const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.navBar}>
                <div className={style.img}><img src={tiger} /></div>
                <div className={style.partNav}>Estratégias</div>
                <div className={style.partNav}>Demo</div>
                <div className={style.partNav}>Fortune Tiger Betano</div>
                <div className={style.partNav}>Fortune Tiger Brabet</div>
                <div className={style.partNav}>Fortune Tiger Baixar</div>
            </div>

            <div className={style.imageContentBar}>
                <div className={style.imageContent}></div>
                <div className={style.imageContent}></div>
                <div className={style.imageContent}></div>
            </div>
            <div className={style.casinoBar}>
                <div  className={style.casinoContent}></div>
                <div  className={style.casinoContent}></div>
                <div className={style.casinoContent}></div>
                <div className={style.casinoContent}></div>
                <div className={style.casinoContent}></div>
            </div>
            <p>O site é apenas para fins informativos e não aceita pagamentos dos usuários.
                18+ O site contém informações apenas para pessoas maiores de idade.
                As informações publicadas neste site não são anúncios
                e são apenas para fins informativos. Email:<br/> fortunetigerjogo@protonmail.com</p>
            <p>Copyright © 2023 Fortune Tiger</p>
        </div>
    );
};

export default Footer;
import style from './AccordionHeading.module.scss'
import plus from '../../../assets/blackPlus.svg'
import {useState} from "react";

type AccordionHeadingType = {
    title:string
    description:string
}


const AccordionHeading = ({title,description}:AccordionHeadingType) => {
    const [showMenu, setShowMenu] = useState(false)

    const changeMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div>
            {
                showMenu ? <div className={style.content}>
                    <div className={style.contentPart}>
                        <h2>{title}</h2>
                        <button onClick={changeMenu}><img src={plus}/></button>
                    </div>
                    <p className={style.description}>{description}</p>
                </div> : <div className={style.content}>
                    <div className={style.contentPart}>
                        <h2>{title}</h2>
                        <button onClick={changeMenu}><img src={plus}/></button>
                    </div>
                </div>
            }
        </div>

    );
};

export default AccordionHeading;
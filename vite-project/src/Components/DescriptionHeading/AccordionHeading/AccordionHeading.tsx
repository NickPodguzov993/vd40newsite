import style from './AccordionHeading.module.scss'
import plus from '../../../assets/blackPlus.svg'

type AccordionHeadingType = {
    title:string
    description:string
}


const AccordionHeading = ({title,description}:AccordionHeadingType) => {
    return (
        <div className={style.content}>
            <div className={style.contentPart}>
                <h2>{title}</h2>
                <button><img src={plus}/></button>
            </div>

            <p className={style.description}>{description}</p>
        </div>
    );
};

export default AccordionHeading;
import style from '../Element/Element.module.scss'

type ElementType = {
    title:string
    description:string
}
const Element = ({title,description}:ElementType) => {
    return (
        <div className={style.container}>
            <h2 className={style.title}>{title}</h2>
            <p className={style.description}>{description}</p>
        </div>
    );
};

export default Element;
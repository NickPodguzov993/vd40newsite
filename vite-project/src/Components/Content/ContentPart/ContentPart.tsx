import style from './ContentPart.module.scss'

type ContentPartType = {
    title:string
    description:string
}

const ContentPart = ({title,description}:ContentPartType) => {
    return (
        <div className={style.container}>
            <h2 className={style.title}>{title}</h2>
            <div className={style.content}>
                <div className={style.img}></div>
                <p className={style.description}>{description}</p>
            </div>
        </div>
    );
};

export default ContentPart;
import style from './ContentPart.module.scss'

type ContentPartType = {
    title:string
    description:string
    image:string
}

const ContentPart = ({title,description,image}:ContentPartType) => {
    return (
        <div className={style.container}>
            <h2 className={style.title}>{title}</h2>
            <div className={style.content}>
                <div className={style.img}><img src={image}/></div>
                <p className={style.description}>{description}</p>
            </div>
        </div>
    );
};

export default ContentPart;
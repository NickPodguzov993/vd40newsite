import style from '../DescriptionAboutPlatform/DescriptionAboutPlatform.module.scss'
type DescriptionAboutPlatformType = {
    title:string
    description:string
}

const DescriptionAboutPlatform = ({title,description}:DescriptionAboutPlatformType) => {
    return (
        <div className={style.container}>
            <h2 className={style.title}>{title}</h2>
            <p className={style.description}>{description}</p>
        </div>
    );
};

export default DescriptionAboutPlatform;
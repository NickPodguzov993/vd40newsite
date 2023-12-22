import style from '../ContentSection/ContentSection.module.scss'
type ContentSectionType = {
    image: string
    description: string
    title: string
}
const ContentSection = ({image, description, title}: ContentSectionType) => {
    return (
        <div className={style.contentSection}>
            <h2 className={style.title}>{title}</h2>
            <img className={style.image} src={image}/>
            <div className={style.description}>{description}</div>
        </div>
    );
};
export default ContentSection;
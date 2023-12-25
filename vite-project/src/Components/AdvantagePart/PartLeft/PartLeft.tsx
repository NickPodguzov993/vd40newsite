import style from '../PartLeft/PartLeft.module.scss'

type PartLeft = {
    description: string
}

const PartLeft = ({description}:PartLeft) => {
    return (
        <div className={style.container}>
<div className={style.contentImage}></div>
            <p>{description}</p>
        </div>
    );
};

export default PartLeft;
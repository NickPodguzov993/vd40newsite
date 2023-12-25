import style from '../PartLeft/PartLeft.module.scss'

type PartLeft = {
    description: string
}

const PartRight = ({description}:PartLeft) => {
    return (
        <div className={style.container}>
            <p>{description}</p>
            <div className={style.contentImage}></div>
        </div>
    );
};

export default PartRight;
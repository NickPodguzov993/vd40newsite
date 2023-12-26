import style from '../../ElementsWithPicture/PictureElement/PictureElement.module.scss'

type PictureElement = {
    title:string
    image:string
    description:string
}


const PictureElement = ({title,image,description}:PictureElement) => {
    return (
        <div className={style.container}>
            <h2>{title}</h2>
          <div>
              <img src={image}/>
              <p>{description}</p>
          </div>

        </div>
    );
};

export default PictureElement;
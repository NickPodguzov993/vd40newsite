

type ElementType = {
    title:string
    description:string
}
const Element = ({title,description}:ElementType) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Element;
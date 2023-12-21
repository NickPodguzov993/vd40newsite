type GameRuleType = {
    image:string
    description:string
}


const GameRule = ({description, image}:GameRuleType) => {
    return (
        <div>
            <img src={image} alt=""/>
            <p>{description}</p>
        </div>
    );
};

export default GameRule;
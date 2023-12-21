import smallTiger from '../assets/smallTiger.png'

const Header = () => {
    return (
        <div>
            <button>yellow</button>
            <img src={smallTiger} alt="tiger"/>
            <div>
                <div>Point</div>
                <div>Point</div>
                <div>Point</div>
                <div>Point</div>
                <button>Button</button>
            </div>
        </div>
    );
};

export default Header;
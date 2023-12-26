import group from '../../../../assets/Group.svg'
import style from '../Items/Items.module.scss'

type ItemsType = {
    spanBold: string
    description: string
}

const Items = ({spanBold, description}: ItemsType) => {
    return (
        <div className={style.container}>
            <div><img src={group}/></div>
            <p>
                <span>
                    {spanBold}
                </span>
                {description}
            </p>
        </div>
    );
};

export default Items;
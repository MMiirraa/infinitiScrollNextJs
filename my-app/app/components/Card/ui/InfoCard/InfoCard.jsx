import { memo } from 'react';
import cls from './InfoCard.module.scss'

const InfoCard = (props) => {
    const {
        description,
        price,
        color,
    } = props

    return (
        <div className={cls.InfoCard}>
            <div className={cls.description}>
                <p>{description}</p>
            </div>
            <div className={cls.price}>
                <p>{price} руб.</p>
            </div>
            <div style={{backgroundColor: `#${color}`}} className={cls.color} />
        </div>
    )
}

export default memo(InfoCard);

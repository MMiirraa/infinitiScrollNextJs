import { memo } from 'react';
import ImgCard from '../ImgCard/ImgCard';
import InfoCard from '../InfoCard/InfoCard';
import cls from './Card.module.scss'

const Card = (props) => {
    const {
        widthImg = 300,
        heightImg = 480,
        description,
        price,
        color,
        img,
    } = props

    return (
        <div className={cls.Card}>
            <ImgCard 
                img={img}
                widthImg={widthImg}
                heightImg={heightImg}
            />
            <InfoCard 
                description={description}
                price={price}
                color={color}
            />
        </div>
    )
}

export default memo(Card);

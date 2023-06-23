import { memo } from 'react';
import cls from './ImgCard.module.scss'

const ImgCard = (props) => {
    const {
        widthImg,
        heightImg,
        img
    } = props

    return (
        <div>
            <img 
                src={img}
                style={{width: widthImg, height: heightImg}} 
                className={cls.ImgCard}
            />
        </div>
    )
}

export default memo(ImgCard);

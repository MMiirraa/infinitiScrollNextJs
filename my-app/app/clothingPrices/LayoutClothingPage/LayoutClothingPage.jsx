import cls from './LayoutClothingPage.module.scss'

const LayoutClothingPage = (props) => {
    const {
        children
    } = props


    return (
        <div className={cls.wrap}>
            { children }
        </div>
    )
}

export default LayoutClothingPage;

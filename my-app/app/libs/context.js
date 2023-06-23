"use client"
import { 
    createContext, 
    useCallback, 
    useEffect, 
    useState, 
    useContext 
} from "react";
import { getMeClothes } from "../api/clothes";

const Context = createContext();

const Provider = ({ children }) => {
    const [clothes, setClothes] = useState([])
    const [category, setCategory] = useState('clothes')
    const [lang, setLang] = useState(1)
    const [shop, setShop] = useState(1)
    const [limit, setLimit] = useState(4)
    const [page, setPage] = useState(1)
    const [isStopPagination, setIsStopPagination] = useState(false)

    useEffect(() => {
        getClothes()
    }, [])

    const getClothes = useCallback(async () => {
        if(!isStopPagination) {
            const res = await getMeClothes({
                category,
                lang,
                shop,
                limit,
                page,
            })
            const result = res.api_data.aProduct.map(product => ({
                description: product.name,
                price: product.price,
                color: product.colors.current.value,
                img: product.photos[0].thumbs['384_512'],
                id: product.id,
            }))
            if(result.length) {
                setPage(page+1)
                setClothes(prevState => [...prevState, ...result])
            } else {
                setIsStopPagination(true)
            }
        }
    }, [page, clothes])

    const exposed = {
        clothes,
        getClothes,
        page,
        setPage,
        isStopPagination,
    }

    return <Context.Provider value={exposed}>{children}</Context.Provider>
}

export const useClothes = () => useContext(Context)

export default Provider;

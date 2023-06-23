"use client"
import { useEffect, useRef } from "react";
import { Card } from "../components/Card";
import { useObserverApi } from "../helpers/observerApi";
import { useClothes } from "../libs/context";
import LayoutClothingPage from "./LayoutClothingPage/LayoutClothingPage";

function ClothingPrices () {
    const store = useClothes()
    const triggerRef = useRef()

    useEffect(() => {
        let newObserver;
        if(store.clothes.length) {
            newObserver = useObserverApi(store.getClothes)
            if(triggerRef.current) newObserver.observe(triggerRef.current)
        }

        return () => newObserver?.disconnect()
    }, [store.clothes, store.isStopPagination])
    
    return (
        <LayoutClothingPage>
            {
                store.clothes.map(el => (
                    <Card 
                        key={el.id}
                        description={el.description}
                        price={el.price}
                        color={el.color}
                        img={el.img}
                    />
                ))
            }
            <div ref={triggerRef} className="trigger"></div>
        </LayoutClothingPage>
    )
}

export default ClothingPrices;

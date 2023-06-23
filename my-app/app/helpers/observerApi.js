const options = {
    threshold: 0.2
}

export const useObserverApi = (fn) => {
    return new IntersectionObserver((entries) => {
        const entrie = entries[0]
        if(entrie.isIntersecting) {
            fn();
        }
    }, options)
}

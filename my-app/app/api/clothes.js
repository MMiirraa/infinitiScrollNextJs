export const getMeClothes = async ({ category, lang, shop, limit, page }) => {
    const quary = `category=${category}&lang=${lang}&shop=${shop}&limit=${limit}&page=${page}`
    const res = await fetch(`https://api.lichi.com/category/get_category_product_list?${quary}`)
    return await res.json()
}

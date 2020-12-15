export function addGoodsToCart(id){
    return{
        type:'ADD_GOOD_TO_CART',
        payload:{id:id}
    }
}

export function removeGoodfromCart(id){
    return{
        type:'REMOVE_CART',
        payload:{id:id}
    }
}
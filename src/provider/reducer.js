export const initialState = {
    basket: []
}

export const reducer = (state, action) => {
    console.log(state.basket.filter(item => item.id !== action.item.id))

    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case "REMOVE_FROM_BASKET":
            return{
                ...state,
                basket: state.basket.filter(item => item.id !== action.item.id)
            }
        default:
            return state
    }
}
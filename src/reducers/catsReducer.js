const initialState = {
    loading: false,
    cats: []
}

export default function catsReducer(state= initialState, action){

    switch(action.type){

        case "LOADING_CATS":

            return  {...state, loading: true}
        case "ADD_CATS":
            return {...state, loading: false, cats: action.payload}
        default:
            return state
    }
}

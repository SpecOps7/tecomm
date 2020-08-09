export const initialState = {
    basket: [],

};

const reducer = (state, action) => {
    console.log(action.type);

    switch(action.type) {
        case 'ADD_TO_BASKET' :
            return { state };
            break;
        case 'REMOVE_FROM_BASKET': 
            return { state };

        //lo
        break;
        default:
            return state;
    }
} 

export default reducer;

/**
 * 
 * 
 */
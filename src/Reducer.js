
export const initialState={
    basket: [{
        id:"12345",
        title:"Heimvision Sunrise Alarm Clock, Smart Wake up Light Work with Alexa, Sleep Aid Digital Alarm Clock with Sunset Simulation",
        price:33.98,
        rating:5,
        image:"https://images-na.ssl-images-amazon.com/images/I/61o-DHjEdyL._AC_SL1000_.jpg",
    }],
    user: null,
}

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state, //return it with the state how it actually looked plus below
                basket: [...state.basket, action.item]
            }
            
        case 'REMOVE_FROM_BASKET':

            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if(index >= 0){
                newBasket.splice(index, 1);
            }
          

            return {...state, basket: newBasket };
            
        default:
            return state;
    }
}

export default reducer;
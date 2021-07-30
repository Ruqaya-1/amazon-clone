export const initialState = {
    basket: [],
    user: null
};
// initial value of basket is empty

//Selector (for displaying total price in the basket)
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);


// a reducer is like a listener
// whenever a a reducer listens "ADD_TO_BASKET" it will return the state of whaterver the state is was originally but the basket will change to
// whatever the state it eas originally + the action we did.

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
            case "ADD_TO_BASKET":
                return {
                    ...state,
                    basket: [...state.basket, action.item],
                };
            
            case "EMPTY_BASKET":
                return{
                    ...state,
                    basket:[]
                }
        

            case "REMOVE_FROM_BASKET":
               const index = state.basket.findIndex(
                   // finds index of the basketItem starting from 0
                   (basketItem) => basketItem.id === action.id
               );
               let newBasket = [...state.basket];
            //    let newBasket is the original state of basket

               if (index >= 0){
                   newBasket.splice(index, 1);
                   // splice removes the basketItem founded on the index
                   // ex: [ 23, 34, 45] we want to remove the element 34
                   // index of 34 is 1 so it becomes splice( 1, 1) i.e at position 1 remove 1 item
                   // 34 is removed and the output arr is [ 23, 45]
               } else{
                   console.warn(
                       `Cant remove product ( id: ${action.id}) as its not in basket`
                   )
               }

               return{
                   ...state,
                   basket: newBasket
               }

               case 'SET_USER':
                   return{
                       ...state,
                       user: action.user
                   }

        default:
            return state;
    };
};

export default reducer;
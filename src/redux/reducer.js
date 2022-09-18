

const initialState = {
  nesto: 'bla bla',
  products: [
    {
      id: 1,
      naziv: 'Majica',
      cena: 1000
    },
    {
      id: 2,
      naziv: 'Farmerke',
      cena: 1200
    },
    {
      id: 3,
      naziv: 'Duks',
      cena: 2000
    },
    {
      id: 4,
      naziv: 'Bluza',
      cena: 1700
    },
    {
      id: 5,
      naziv: 'Patike',
      cena: 5000
    },
  ],
  cart: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case 'EMPTY_CART':
      return {
        ...state,
        cart: []
      };

    default:
      return state;
  }
};

export default reducer;
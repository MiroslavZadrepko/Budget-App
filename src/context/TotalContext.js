import { createContext } from 'react';
import { useReducer } from 'react';

export const TotalContext = createContext();

export const TotalProvider = (props) => {
    const [state, dispatch] = useReducer(TotalReducer, initialState);
    return (
        <TotalContext.Provider
            value={{
                totalIncome: state.totalIncome,
                totalExpenditure: state.totalExpenditure,
                transactions: state.transactions,
                dispatch
            }}>
            {props.children}
        </TotalContext.Provider>
    )
}

/**u inital state naći način da se ubaci local storage ili Mongo */
const initialState = {
    totalIncome: 0,
    totalExpenditure: 0,
    transactions: [{
        description: "",
        amount: "",
        tip: "",
        id: ""
    }]
}

const TotalReducer = (state, action) => {
    switch (action) {
        default:
            return state;
    }
} 
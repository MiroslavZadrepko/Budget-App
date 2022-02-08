import React from 'react';

const Totals = ({totalIncome, totalExpenditure, totalSaldo}) => {
    return (
        <>
            <div>
               <p>Total Income: {totalIncome}</p> 
               <p>Total Expenditure: {totalExpenditure}</p> 
               <p>Saldo: {totalSaldo} </p> 
            </div>

        </>
    );
}

export default Totals;
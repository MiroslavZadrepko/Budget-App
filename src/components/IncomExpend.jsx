import React from 'react';
import Transaction from './Transaction';


const IncomeExpend = ({ transactions, setTransactions, setTotalIncome, setTotalExpenditure, setTotalSaldo, totalIncome, totalExpenditure, totalSaldo }) => {
    return (
        <>
            {totalIncome == 0 && totalExpenditure == 0 ? setTimeout(() => {
                setTransactions(0)
            }, 500)  
            :            
            transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} transactions={transactions} setTransactions={setTransactions} setTotalIncome={setTotalIncome} setTotalExpenditure={setTotalExpenditure} setTotalSaldo={setTotalSaldo} totalIncome={totalIncome} totalExpenditure={totalExpenditure} totalSaldo={totalSaldo}/>)}
 
        </>
    );
}

export default IncomeExpend;
import React from 'react';

const Transaction = ({ transaction, transactions, setTransactions, setTotalIncome, setTotalExpenditure, setTotalSaldo, totalIncome, totalExpenditure, totalSaldo }) => {
    /**rešiti prosleđivanje totalSaldo i ubacivanje u lokal storage */
    const handleDeletee = (id) => {
        let filtered = transactions.filter(transaction => transaction.id !== id)
        setTimeout(() => {
            setTransactions(filtered);

            if (transaction.tip == 'prihod') {
                setTotalIncome(prev => prev - Number(transaction.amount))
            } else if (transaction.tip == 'rashod') {
                setTotalExpenditure(prev => prev - Number(transaction.amount))
            }
 
        }, 1000);

    }   

    localStorage.setItem(`totalIncome`, totalIncome)
    localStorage.setItem(`totalExpenditure`, totalExpenditure)
    localStorage.setItem(`totalSaldo`, totalSaldo)
    localStorage.setItem(`transactions`, JSON.stringify(transactions))

    return (
        <> {transaction.tip == 'prihod' ?
            <div className='transactParent' style={{ backgroundColor: "rgb(5, 223, 60)" }}>
                <p className='transactDesc transact' >{transaction.description} </p>
                <p className='transactAmo transact'> {transaction.amount}</p>
                <button onClick={() => handleDeletee(transaction.id)}><span className='message'>delete</span></button>
            </div>
            :
            <div className='transactParent' style={{ backgroundColor: "rgb(247, 38, 38)" }}>
                <p className='transactDesc transact' >{transaction.description} </p>
                <p className='transactAmo transact'> {transaction.amount}</p>
                <button onClick={() => handleDeletee(transaction.id)}> <span className='message'>delete</span> </button>
            </div>
            }
        </>
    );
}

export default Transaction;
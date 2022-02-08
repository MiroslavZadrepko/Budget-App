import React, { useEffect, useState } from 'react';
import IncomeExpend from './IncomExpend';
import { v4 as uuidv4 } from 'uuid';

const Forma = ({ setTotalIncome, setTotalExpenditure, setTotalSaldo, totalIncome, totalExpenditure, totalSaldo }) => {

    const [oneTransaction, setOneTransaction] = useState({
        description: "",
        amount: "",
        tip: "",
        id: ""
    });

    const [transactions, setTransactions] = useState([])
    let getTransactions
    useEffect(() => {
        getTransactions = JSON.parse(localStorage.getItem(`transactions`) || "[]");
    setTransactions(getTransactions)
    }, []);
   
    

    const handleSubmit = (e) => {
        e.preventDefault()
        oneTransaction.tip == 'prihod' ? setTotalIncome(prev => prev + Number(oneTransaction.amount)) : setTotalExpenditure(prev => prev + Number(oneTransaction.amount))
        setTransactions((prev) => {
            return [...prev, oneTransaction]
        })

        setOneTransaction({
            description: "",
            amount: "",
            tip: "",
            id: ""
        });
    }

    useEffect(() => {
        setTotalSaldo(totalIncome - totalExpenditure)
    }, [totalIncome, totalExpenditure])

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setOneTransaction((prevState) => {
            return {
                ...prevState,
                [name]: value,
                id: uuidv4()
            }
        });
    }

    const { description, amount} = oneTransaction;
        
    return (
        <>
            <div className='inputDiv'>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="description" value={description} onChange={handleInputChange} placeholder='Description' required /> <br></br>
                    <input type="number" name="amount" value={amount} onChange={handleInputChange} placeholder='Amount' required/><br></br>

                    <button
                        onClick={() => (oneTransaction.tip = 'prihod')}
                        type='submit'
                        name='btn1'
                        value='prihod'
                        className='btnIncome'
                    >Prihod</button>
                    <button
                        onClick={() => (oneTransaction.tip = 'rashod')}
                        type='submit'
                        name='btn2'
                        value='rashod'
                        className='btnRashod'
                    >Rashod</button>

                </form>
            </div>
            <div>
                {transactions != '' ? <IncomeExpend setTransactions={setTransactions} transactions={transactions} setTotalIncome={setTotalIncome} setTotalExpenditure={setTotalExpenditure} setTotalSaldo={setTotalSaldo} totalIncome={totalIncome} totalExpenditure={totalExpenditure} totalSaldo={totalSaldo}/> : ''}
            </div>

        </>
    );
}

export default Forma;


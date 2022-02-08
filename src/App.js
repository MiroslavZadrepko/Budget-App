import React, { useEffect, useState } from "react";
import Forma from "./components/Forma";
import Totals from "./components/Totals";

function App() {

  const [totalIncome, setTotalIncome] = useState();
  const [totalExpenditure, setTotalExpenditure] = useState();
  const [totalSaldo, setTotalSaldo] = useState()

  useEffect(() => {
    Number(localStorage.getItem(`totalIncome`)) ? setTotalIncome(Number(localStorage.getItem(`totalIncome`))) : setTotalIncome(0);
    Number(localStorage.getItem(`totalExpenditure`)) ? setTotalExpenditure(Number(localStorage.getItem(`totalExpenditure`))) : setTotalExpenditure(0);
    Number(localStorage.getItem(`totalSaldo`)) ? setTotalSaldo(Number(localStorage.getItem(`totalSaldo`))) : setTotalSaldo(0);
  }, [])

  const clearStorage = (e) => {
    e.preventDefault();
    localStorage.clear();
    setTotalIncome(0);
    setTotalExpenditure(0);
    setTotalSaldo(0)
    window.location.reload();
  }

  return (

    <div className="app inputDiv">
      <Totals totalIncome={totalIncome} totalExpenditure={totalExpenditure} totalSaldo={totalSaldo} />
      <button onClick={clearStorage} name='btn3'>Clear All</button> 
      <Forma setTotalIncome={setTotalIncome} setTotalExpenditure={setTotalExpenditure} setTotalSaldo={setTotalSaldo} totalIncome={totalIncome} totalExpenditure={totalExpenditure} totalSaldo={totalSaldo}/>
    </div>

  );
}

export default App;
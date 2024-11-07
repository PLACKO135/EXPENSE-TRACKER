import  { useContext } from 'react'
import { GlobalContext } from './GlobalContext/GlobalContext'
const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount)
  
  const income = amounts.filter(amount=>amount >0).reduce((total,amounts)=> (total+=amounts),0).toFixed(2)
  const expense = amounts.filter(amount=>amount <0).reduce((total,amounts)=> (total+=amounts),0).toFixed(2)
    return (
        <div className="incExpContainer">
            <div className="income">
                <h4>Income</h4>
                <p>${income}</p>
            </div>
            <div className="expense">
                <h4>Expense</h4>
                <p>-${Math.abs(parseInt(expense))}</p>
            </div>
        </div>
    )
}

export default IncomeExpense
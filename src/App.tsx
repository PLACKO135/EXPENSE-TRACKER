import AddTransaction from "./components/Addtransaction"
import Balance from "./components/Balance"
import Header from "./components/Header"
import TransactionList from "./components/transactionlist"
import './App.css'
import IncomeExpense from "./components/INCOMEExpense"

const App = () => {
    return (
        <div className="container">
            <Header />
            <Balance />
            <IncomeExpense />
            <TransactionList />
            <AddTransaction />
        </div>
    )
}

export default App
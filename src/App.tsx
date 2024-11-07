import AddTransaction from "./components/Addtransaction"
import Balance from "./components/Balance"
import Header from "./components/Header"
import TransactionList from "./components/Transactionlist"
import './App.css'
import GlobalProvider from "./components/GlobalContext/GlobalContext"
import IncomeExpense from "./components/INCOMEExpense"

const App = () => {
    return (
        <div className="container"><GlobalProvider>

        <Header />
            <Balance />
            <IncomeExpense />
            <TransactionList />
            <AddTransaction />
        </GlobalProvider>
        </div>
    )
}

export default App
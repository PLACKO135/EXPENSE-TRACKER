import Header from "./components/Header"
import Balance from "./components/Balance"
import Transactionlist from "./components/transactionlist"
import Addtransaction from "./components/Addtransaction"
const App = () => {
  return (
  <>
    <Header/>
    <Balance/>
    <Transactionlist/>
    <Addtransaction/>
  </>
  )
}

export default App
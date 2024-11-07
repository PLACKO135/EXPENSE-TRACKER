import { useState, createContext, ReactNode } from "react"

type childrenProps={
children:ReactNode
}

type transactiontype={
id:number,
Text:string,
amount:number
}

type Globalstate={
  transactions:transactiontype[],
  deltra:(id:number)=>void,
  addtra:(transaction:transactiontype)=>void
}

const initialState={transactions:[{id:1,Text:'Flowers', amount:-30},
  {id:2,Text:'Salary', amount:300},
  {id:3,Text:'Book', amount:-10}
]}

export const GlobalContext=createContext<Globalstate>(
  {
  transactions:initialState.transactions,
  deltra:()=>{},
  addtra:()=>{}
})

const GlobalProvider = ({children}:childrenProps) => {
    
    const [transactions, setTransaction] = useState<transactiontype[]>(initialState.transactions)

    const deltra=(id:number)=>{setTransaction(transactions.filter(transaction=>transaction.id!==id))}


    const addtra=(transaction:transactiontype)=>{setTransaction(prev=>([...prev,transaction]))}

    return (
   
<GlobalContext.Provider value={{transactions,deltra,addtra}}>
    {children}
</GlobalContext.Provider>
   
  )
}

export default GlobalProvider
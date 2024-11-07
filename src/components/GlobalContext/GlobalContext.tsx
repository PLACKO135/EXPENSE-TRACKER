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
  deltra:(id:number)=>void
}

const initialState={transactions:[{id:1,Text:'Flowers', amount:-30},
  {id:2,Text:'Salary', amount:300},
  {id:3,Text:'Book', amount:-10}
]}

export const GlobalContext=createContext<Globalstate>(
  {
  transactions:initialState.transactions,
  deltra:()=>{}
})

const GlobalProvider = ({children}:childrenProps) => {
    
    const [transactions, setTransaction] = useState<transactiontype[]>(initialState.transactions)

    const deltra=(id:number)=>{setTransaction(transactions.filter(transaction=>transaction.id!==id))}

    return (
   
<GlobalContext.Provider value={{transactions,deltra}}>
    {children}
</GlobalContext.Provider>
   
  )
}

export default GlobalProvider
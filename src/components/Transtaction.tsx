import { useContext } from "react"
import { GlobalContext } from "./GlobalContext/GlobalContext"

type transactionProps ={
    id:number,
    Text:string,
    amount:number
}

const Transaction = (props:transactionProps) => {
  
    const {deltra}=useContext(GlobalContext)

    return (
      
              <li className={props.amount>0?'plus':'minus'}>
                  {props.Text}
                  <span>
                    {props.amount>0?'':'-'}
                    $
                    {Math.abs(props.amount)}
                    </span>
                  <button onClick={()=>deltra(props.id)} className="delete">✖</button>
              </li>
      
  )
}
export default Transaction
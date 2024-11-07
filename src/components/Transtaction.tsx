type transactionProps ={
    id:number,
    Text:string,
    amount:number
}

const Transaction = (props:transactionProps) => {
  return (
      
              <li className={props.amount>0?'plus':'minus'}>
                  {props.Text}
                  <span>
                    {props.amount>0?'':'-'}
                    $
                    {Math.abs(props.amount)}
                    </span>
                  <button className="delete">X</button>
              </li>
      
  )
}
export default Transaction
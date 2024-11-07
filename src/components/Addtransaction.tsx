import { FormEvent, useContext, useState } from "react"
import { GlobalContext } from "./GlobalContext/GlobalContext"

const AddTransaction = () => {
const {addtra}=useContext(GlobalContext)
const [Text,settext]=useState('')
const [amount,setamount]=useState(0)

const handtext=(e:React.ChangeEvent<HTMLInputElement>)=>{settext(e.target.value)}
const handamount=(e:React.ChangeEvent<HTMLInputElement>)=>{setamount(parseInt(e.target.value))}

const handsubm=(e:FormEvent)=>{
    e.preventDefault()
    addtra({id:Math.floor(Math.random()*100000),
    Text,
    amount})
    settext('');
    setamount(0);
}

    return (
        <div>
            <h3>Add transaction</h3>
            <form action="" onSubmit={handsubm}>
                <div className="form-control">
                    <label htmlFor="text"></label>
                    <input value={Text} onChange={handtext}  type="text" id="text" placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input value={amount} onChange={handamount} type="number" id="amount" placeholder="Enter amount..."/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
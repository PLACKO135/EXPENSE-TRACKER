
const Addtransaction = () => { 
    return(
        <div>
            <h3>Add transaction</h3>
            <form action="">
                <div className="form-control">
                    <label htmlFor="text"></label>
                    <input type="text" placeholder="Enter text..." />
                </div>
                <div>
                    <label htmlFor="">negative-expense, positive-income</label> 
                    <input type="number" />
                </div>
            </form>
        </div>
    )



}

export default Addtransaction
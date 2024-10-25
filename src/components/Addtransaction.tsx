const AddTransaction = () => {
    return (
        <div>
            <h3>Add transaction</h3>
            <form action="">
                <div className="form-control">
                    <label htmlFor="text"></label>
                    <input type="text" id="text" placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input
                        type="number"
                        id="amount"
                        placeholder="Enter amount..."
                    />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
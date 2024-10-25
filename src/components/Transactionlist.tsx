const TransactionList = () => {
  return (
      <div>
          <h3>History</h3>
          <ul className="list">
              <li className="expense">
                  Flowers <span>-$30</span>
                  <button className="delete">X</button>
              </li>
          </ul>
      </div>
  )
}
export default TransactionList
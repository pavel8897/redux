import './style.css'
import {useDispatch, useSelector} from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  console.log(useSelector(state => state))
  
  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }
  
  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }

  return (
   <div className="app">
     <div style={{fontSize:'3em'}}>{cash}</div>
     <div style={{display:'flex'}}>
       <button onClick={() => addCash(Number(prompt()))}>Add count</button>
       <button onClick={() => getCash(Number(prompt()))}>Get count</button>
     </div>
   </div>
  )
}

export default App
import React, { useContext } from 'react'
import { DataContext } from '../Hooks/DataProvider'
import { useNavigate } from 'react-router'


const Score = () => {
  const [state, dispatch] = useContext(DataContext)

  const navigate = useNavigate()

  const reset = () => {
    dispatch({type: 'reset'})
    navigate('/')
  }
  return (
    <div>
      Score
      <hr />
      {state.points} / {state.numberOfQuestions}
      <button onClick={reset}> Reset </button>
    </div>
  )
}

export default Score

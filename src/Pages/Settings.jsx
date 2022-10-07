import React, { useContext } from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import SelectField from '../Components/SelectField'
import { DataContext } from '../Hooks/DataProvider'


const Settings = () => {
  const [state, dispatch] = useContext(DataContext)
  // const [direction, setDirection] = useState('')

  let navigate = useNavigate();

  const getQuestions = () => {
    let url = 'https://the-trivia-api.com/api/questions?'
    if(state.category !== ''){
        url = url.concat(`categories=${state.category.replace(' ', '_').replace('&', 'and')}`)
    }
    if(state.difficulty !== '' && state.category !== ''){
        url = url.concat(`&difficulty=${state.difficulty}`)
    }

    if(state.category !== ''){
        url = url.concat(`&limit=${state.numberOfQuestions}`)
    }else{
        url = url.concat(`limit=${state.numberOfQuestions}`)
    }
    dispatch({type: 'setUrl', payload: url})
    navigate('/question')
}

  return (
    <div>
      <h1>Quiz app</h1>
      <div>
        <SelectField />
        <label>Selet amout of questions: </label>
        <input type='range' min='1' max='10' value={state.numberOfQuestions} onChange={e => dispatch({type: 'setNumberOfQuestions', payload: e.target.value})} />
      </div>
      <button onClick={getQuestions}>enter</button>
      {state.url}
    </div>
  )
}

export default Settings

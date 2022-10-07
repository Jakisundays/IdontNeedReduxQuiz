import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../Hooks/DataProvider'

const difficultyModes = ['easy','medium','hard']

const SelectField = () => {
const [state, dispatch] = useContext(DataContext)
const info = state.data
// console.log('los datos son: ', info)

  return (
    <>
        <div>
            <label>Select category: </label>
            <select onChange={e => dispatch({type: 'setCategory', payload: e.target.value})}>
            <option value="" disabled selected>Select your category</option>
                {info.map((data) => 
                <option key={data.id} value={data.category}> {data.category} </option>
                )}
            </select>
        </div>
        <div>
            <label>Select difficulty: </label>
            <select onChange={e => dispatch({type: 'setDifficulty', payload: e.target.value})}>
            <option value="" disabled selected>Select your difficulty</option>
                {difficultyModes.map((mode) => 
                <option key={mode} value={mode}> {mode} </option>
                )}
            </select>
        </div>
        
    </>
    

  )
}

export default SelectField

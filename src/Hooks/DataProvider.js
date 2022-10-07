import React, { createContext, useEffect, useReducer } from 'react'
import axios from 'axios'

export const DataContext = createContext()

const informacion = {
    category: '',
    difficulty: '',
    numberOfQuestions: 5,
    url: 'https://the-trivia-api.com/api/questions?',
    data: [],
    index: 0,
    points: 0,
}

const changer = (state, action) => {
    switch(action.type){
        case 'setCategory':
            return {
                ...state,
                category: action.payload
            }
        case 'setDifficulty':
            return{
                ...state,
                difficulty: action.payload
            }
        case 'setNumberOfQuestions':
            return{
                ...state,
                numberOfQuestions: action.payload
            }
        case 'setData':
            return{
                ...state,
                data: action.payload
            }
        case 'setUrl':
            return{
                ...state,
                url: action.payload
            }
        case 'setPoints':
            return{
                ...state,
                points: state.points + 1
            }
        case 'reset':
            return{
                ...informacion,
                data: [...state.data]
            }
        default:
            return state
    }
}

const DataProvider = ({children}) => {

    const [state, dispatch] = useReducer(changer, informacion)

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const url = "https://the-trivia-api.com/api/questions";
                const result = await axios(url);
                // console.log(result)
                dispatch({ type: 'setData', payload: result.data})
            } catch (error) {
                console.log('fail')
            }
        }
        obtenerDatos()
    },[])

    

    

  return (
    <DataContext.Provider value={[state, dispatch]}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider

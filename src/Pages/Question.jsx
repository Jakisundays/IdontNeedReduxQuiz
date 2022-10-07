import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { DataContext } from '../Hooks/DataProvider';

const Question = () => {
  const [state, dispatch] = useContext(DataContext)
  const [preguntas, setPreguntas] = useState([])
  const [pregActual, setPregActual] = useState(0)
  const [show, setShow] = useState(true)
  
  let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async() => {
          let arr = []
          try {
            const result = await axios(state.url)
            console.log('El length es: ', result.data.length);
            for(let i = 0; i < result.data.length; i++){
                let list = {
                question: result.data[i].question,
                options: [...result.data[i].incorrectAnswers, result.data[i].correctAnswer],
                correct: result.data[i].correctAnswer
                }
                arr = [...arr, list]
              } 
              setPreguntas(arr)
              setShow(false)
            } catch (error) {
            console.log('fail')
          }
        };
        fetchData();
      }, []);

  const check = (value, correct) => {
    if(value === correct){
      dispatch({type: 'setPoints'})
    }

    if(pregActual + 1 < preguntas.length){
      setPregActual(pregActual + 1)
    }else{
      navigate('/score')
    }
    setPregActual(pregActual + 1)
  }
     

  return (
    <div>
      {show ? (
        <>
        <div>
        Question - 
          {state.url}
        </div>
        </>
      ) : (
        <>
          <h1> {preguntas[pregActual].question} </h1>
        {preguntas[pregActual].options.map((ans) =>
          <button value={ans} onClick={() => check(ans, preguntas[pregActual].correct)} > {ans} </button>
        )}
        </>
      )}
      <hr />
      {state.points} / {state.numberOfQuestions}
      <button onClick={console.log(preguntas)} >Get</button> 
    </div>
  )
}

export default Question

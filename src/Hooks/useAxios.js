import React, { useContext, useEffect } from 'react'
import { DataContext } from './DataProvider';
import axios from 'axios';

const useAxios = () => {
const [state, dispatch] = useContext(DataContext)

    useEffect(() => {
        const fetchData = async() => {
          try {
            const result = await axios(state.url)
            console.log(result)
            dispatch({type: 'setUrl', payload: result})
          } catch (error) {
            console.log('fail')
          }
        };
        fetchData();
      }, []);

  return (
    <div>
      {state.url}
    </div>
  )
}

export default useAxios

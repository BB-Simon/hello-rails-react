import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../store/greeting/greetingSlice';
import { useEffect } from 'react';

const Greeting = ({}) => {
  const { message, loading } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting);
  }, []);


  if(loading) {
    return <p>Loading...!</p>
  }

  return (
    <h1>{message}</h1>
  )
}

export default Greeting
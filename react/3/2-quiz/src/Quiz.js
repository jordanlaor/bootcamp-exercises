import React from 'react';
import QuizTitle from './QuizTitle';
import Q1 from './Q1';
import Q2 from './Q2';

const Quiz = () => {
  return (
    <div style={{margin: '20px', padding: '15px 15px 40px', border: '2px dotted blue', width: 'fit-content'}}>
      <QuizTitle />
      <Q1 />
      <Q2 />
    </div>
  )
}

export default Quiz
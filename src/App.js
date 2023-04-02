import { useState } from 'react';
import Button from './Button';
import Statistics from './Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return(
    <>
      <h1>give feedback</h1>
      <Button name={`good`} value={good} onClick={setGood}/>
      <Button name={`neutral`} value={neutral} onClick={setNeutral}/>
      <Button name={`bad`} value={bad} onClick={setBad}/>
      {<Statistics good={good} bad={bad} neutral={neutral}/>}
    </>
  )
}

export default App;
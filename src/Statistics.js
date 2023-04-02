import StatisticLine from './StatisticLine';

const Statistics = ({ good, bad, neutral } ) => {
  const positive = good / (good + bad + neutral)
  return (
    <>
      <h2>statistics</h2>
      <br />
      {good || neutral || bad ? 
      (<table>
      <StatisticLine name={'good'} value={good} />
      <StatisticLine name={'neutral'} value={neutral} />
      <StatisticLine name={'bad'} value={bad} />
      <StatisticLine name={'all'} value={good + bad + neutral} />
      <StatisticLine name={'average'} value={((good+ bad + neutral) / 3).toFixed(2)}/>
      <StatisticLine name={'positive'} value={isNaN(positive) ? `0%` : `${positive.toFixed(2)}%`} />
      </table>
      ) : 'No feedback given'
  }
    </>
  );
};

export default Statistics;
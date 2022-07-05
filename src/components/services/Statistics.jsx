import PropTypes from 'prop-types';
import { Info, Value } from './Statistics.styled';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <Info>
        Good: <Value>{good}</Value>
      </Info>

      <Info>
        Neutral: <Value>{neutral}</Value>
      </Info>
      <Info>
        Bad: <Value>{bad}</Value>
      </Info>
      <Info>
        Total: <Value>{total}</Value>
      </Info>
      <Info>
        Positive feedback:
        <Value>{positivePercentage} %</Value>
      </Info>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
 
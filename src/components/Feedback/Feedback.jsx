import { useState } from "react";
import PropTypes from 'prop-types';
import Section from '../UI/Section';
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";

export const Feedback = () => {
  const options = ['GOOD', 'NEUTRAL', 'BAD'];
  
const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);
 
  
   const countTotalFeedback = () => {
    return good + neutral + bad;
  };
   const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);  
  };

  const handleClick = (e) => {
    const name = e;

    switch (name) {
       case options[0]:
        setGood( good => good + 1);
        break;
      case options[1]:
        setNeutral( neutral => neutral + 1);
        break;
     case options[2]:
        setBad( bad => bad + 1);
        break;
      
      default:
        return;
    }
  };
  
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions  options={options} onLeaveFeedback={handleClick} />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }

export default Feedback;
Feedback.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}
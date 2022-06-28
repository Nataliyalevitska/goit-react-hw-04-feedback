import React from 'react';
import PropTypes from 'prop-types';
const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button id="good" type="button" onClick={onLeaveFeedback}>
        Good
      </button>
      <button id="neutral" type="button" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button id="bad" type="button" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
};
export default FeedbackOptions;
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './FeedbackOptions.styled';
import {
  HiEmojiHappy,
  HiEmojiSad,
  HiDotsCircleHorizontal,
} from 'react-icons/hi';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <StyledButton id="good" type="button" onClick={onLeaveFeedback}>
        <HiEmojiHappy></HiEmojiHappy>
        Good
      </StyledButton>

      <StyledButton id="neutral" type="button" onClick={onLeaveFeedback}>
        <HiDotsCircleHorizontal></HiDotsCircleHorizontal>
        Neutral
      </StyledButton>
      <StyledButton id="bad" type="button" onClick={onLeaveFeedback}>
        <HiEmojiSad></HiEmojiSad>
        Bad
      </StyledButton>
    </div>
  );
};
export default FeedbackOptions;
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

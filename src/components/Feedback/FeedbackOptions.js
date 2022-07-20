import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './FeedbackOptions.styled';
import { HiDotsCircleHorizontal } from 'react-icons/hi';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => {
        return (
          <StyledButton key={option} onClick={() => onLeaveFeedback(option)}>
            <HiDotsCircleHorizontal></HiDotsCircleHorizontal>
            {option}
          </StyledButton>
        );
      })}
    </>
  );
};

export default FeedbackOptions;
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

//     <div>
//       <StyledButton
//         id="good"
//         type="button"
//         onClick={() => onLeaveFeedback(option)}
//       >
//         <HiEmojiHappy></HiEmojiHappy>
//         Good
//       </StyledButton>

//       <StyledButton id="neutral" type="button" onClick={onLeaveFeedback}>
//         <HiDotsCircleHorizontal></HiDotsCircleHorizontal>
//         Neutral
//       </StyledButton>
//       <StyledButton id="bad" type="button" onClick={onLeaveFeedback}>
//         <HiEmojiSad></HiEmojiSad>
//         Bad
//       </StyledButton>
//     </div>
//   );
// };

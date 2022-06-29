import styled from '@emotion/styled';
// import { HiEmojiHappy } from 'react-icons/hi';

// export const Button = ({ type = 'button', id, children }) => {
//   return <StyledButton type={type}>{(id, children)}</StyledButton>;
// };
// допоможіть розібратися як правильно передати функцію
// onClick = { onLeaveFeedback }
//  щоб компонент button був перевикористованим ?

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.spacing(2)}px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.valueColor};
  border: 2px solid ${props => props.theme.colors.border};
  padding-top: ${p => p.theme.spacing(4)}px;
  padding-left: ${p => p.theme.spacing(6)}px;
  padding-right: ${p => p.theme.spacing(6)}px;
  padding-bottom: ${p => p.theme.spacing(4)}px;
  border-radius: ${p => p.theme.radii.normal};
  margin-left: ${p => p.theme.spacing(4)}px;
  color: ${props => props.theme.colors.InfoColor};
  font-size: 20px;
  :hover,: focus {
    background-color: ${props => props.theme.colors.border};
  }
`;

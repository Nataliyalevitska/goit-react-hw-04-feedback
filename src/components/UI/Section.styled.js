import styled from '@emotion/styled';

export const SectionStyled = styled.section`
  margin: 0 auto;
  padding: ${props => props.theme.spacing(18)}px;
  background-color: ${props => props.theme.colors.bgColor};
`;

export const Title = styled.h2`
  margin-bottom: 50px;
  font-size: 50px;
  font-weight: 700;
  color: ${props => props.theme.colors.titleColor};
`;

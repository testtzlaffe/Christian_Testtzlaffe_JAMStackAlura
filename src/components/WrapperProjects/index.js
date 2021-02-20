import styled, { css } from 'styled-components';
import { Cards } from './Cards';

const Wrapper = styled.section`
  padding: 36px 0;
`;

export const WrapperProjects = () => {
  return (
    <Wrapper>
      <Cards />
    </Wrapper>
  );
};

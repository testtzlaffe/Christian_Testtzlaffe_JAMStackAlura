import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { Card, CardDestaque } from './Card';

const secondaryProjects = [
  { name: 'Projeto 1', imageUrl: '' },
  { name: 'Projeto 2', imageUrl: '' },
  { name: 'Projeto 3', imageUrl: '' },
];

const projectDestaque = {
  name: 'Projeto 4',
  imageUrl: '',
  text: 'Lorem Ipsom',
};

const WrapperCards = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpointsMedia({
    md: css`
      flex-direction: row;
    `,
  })}
  margin-top: 20px;
`;

export const Cards = () => {
  return (
    <>
      <WrapperCards>
        {secondaryProjects.map((project) => {
          return <Card key={project.name} name={project.name} />;
        })}
      </WrapperCards>

      <CardDestaque name={projectDestaque.name} />
    </>
  );
};

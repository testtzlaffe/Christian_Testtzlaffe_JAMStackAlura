import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { Card, CardDestaque } from './Card';

const secondaryProjects = [
  {
    name: 'NETFENIX',
    url: 'https://github.com/testtzlaffe/netfenix',
    img:
      'https://raw.githubusercontent.com/testtzlaffe/netfenix/master/src/assets/img/netfenix2.png',
    tags: ['React'],
  },
  {
    name: 'INSTALURA',
    url: 'https://github.com/testtzlaffe/instalura-base',
    img:
      'https://raw.githubusercontent.com/testtzlaffe/netfenix/master/src/assets/img/netfenix2.png',
    tags: ['React', 'Next.js'],
  },
  {
    name: 'PROJETO 3',
    url: '',
    img:
      'https://raw.githubusercontent.com/testtzlaffe/netfenix/master/src/assets/img/netfenix2.png',
    tags: ['Node.js'],
  },
  {
    name: 'PROJETO 4',
    url: '',
    img:
      'https://raw.githubusercontent.com/testtzlaffe/netfenix/master/src/assets/img/netfenix2.png',
    tags: ['React', 'Next.js'],
  },
];

const projectDestaque = {
  name: 'Projeto 4',
  imageUrl: '',
  text: 'Lorem Ipsom',
};

const WrapperCards = styled.div`
  ${breakpointsMedia({
    lg: css`
      display: flex;
      justify-content: space-between;
    `,
  })}
  margin-top: 20px;
`;

export const Cards = () => {
  return (
    <>
      <WrapperCards>
        {secondaryProjects.map((project) => {
          return (
            <Card
              key={project.name}
              name={project.name}
              url={project.url}
              img={project.img}
              tags={project.tags}
              href={project.url}
            />
          );
        })}
      </WrapperCards>

      {/* <CardDestaque name={projectDestaque.name} /> */}
    </>
  );
};

import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { Card } from './Card';

const projects = [
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
      'https://raw.githubusercontent.com/testtzlaffe/instalura-base/main/public/images/instalura.png',

    tags: ['React', 'Next.js'],
  },
];

const WrapperCards = styled.div`
  ${breakpointsMedia({
    md: css`
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    `,
  })}
  margin-top: 20px;
`;

export const Cards = () => {
  return (
    <>
      <WrapperCards>
        {projects.map((project) => {
          const { name, url, img, tags } = project;
          return (
            <Card
              key={name}
              name={name}
              url={url}
              img={img}
              tags={tags}
              href={url}
              target="_blank"
            />
          );
        })}
      </WrapperCards>
    </>
  );
};

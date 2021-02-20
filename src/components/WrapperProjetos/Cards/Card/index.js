import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { Text } from '../../../Text';

const CardBase = styled.a`
  text-decoration: none;
  min-width: 400px;
  ${breakpointsMedia({
    md: css`
      max-width: 320px;
    `,
  })}
  margin: 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  &:hover {
    transform: scale(1.05);
  }
`;

CardBase.Image = styled.img`
  max-width: 100%;
`;

CardBase.Header = styled.div``;

CardBase.Body = styled.div`
  background-color: white;
  padding: 20px;
  color: ${({ theme }) => theme.colors.background.main.color};
`;

CardBase.Title = styled.div`
  margin-bottom: 20px;
`;

CardBase.Tags = styled.div`
  background-color: white;
  display: flex;
`;

CardBase.Tag = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.light.color};
  color: ${({ theme }) => theme.colors.primary.main.contrastText};
  border-radius: ${({ theme }) => theme.borderRadiusButton};
  padding: 6px 12px;
  margin-right: 4px;
`;

export const Card = ({ name, tags, img, ...props }) => {
  return (
    <CardBase {...props}>
      <CardBase.Header>
        <CardBase.Image src={img} />
      </CardBase.Header>
      <CardBase.Body>
        <CardBase.Title>
          <Text tag="p" variant="paragraph1">
            {name}
          </Text>
        </CardBase.Title>
        <CardBase.Tags>
          {tags.map((tag) => (
            <CardBase.Tag key={`${name}-${tag}`}>
              <Text>{tag}</Text>
            </CardBase.Tag>
          ))}
        </CardBase.Tags>
      </CardBase.Body>
    </CardBase>
  );
};

import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { Text } from '../../../commons/Text';
import { theme } from '../../../../theme';

const borderRadiusCard = theme.borderRadiusCard;

const CardBase = styled.a`
  text-decoration: none;
  display: block;
  min-width: 320px;
  ${breakpointsMedia({
    md: css`
      max-width: 320px;
    `,
  })}
  margin: 20px;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  ${breakpointsMedia({
    md: css`
      opacity: 0.8;
    `,
  })}
  &:hover {
    transform: scale(1.05);
    opacity: 1;
  }
`;

CardBase.Header = styled.div`
  ${breakpointsMedia({
    xs: css`
      height: 200px;
    `,
    md: css`
      height: 180px;
    `,
  })}
`;

CardBase.Image = styled.img`
  object-fit: inherit;
  border-radius: ${borderRadiusCard} ${borderRadiusCard} 0 0;
  opacity: inherit;

  ${breakpointsMedia({
    xs: css`
      width: 100%;
      height: 200px;
    `,
    md: css`
      height: 180px;
      width: 320px;
    `,
  })}
`;

CardBase.Body = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.main.color};
  padding: 20px;
  border-radius: 0 0 ${borderRadiusCard} ${borderRadiusCard};
  color: ${({ theme }) => theme.colors.secondary.main.contrastText};
`;

CardBase.Title = styled.div`
  margin-bottom: 20px;
`;

CardBase.Tags = styled.div`
  display: flex;
`;

CardBase.Tag = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.light.color};
  color: ${({ theme }) => theme.colors.primary.light.contrastText};
  border-radius: ${({ theme }) => theme.borderRadiusButton};
  padding: 6px 12px;
  margin-right: 12px;
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

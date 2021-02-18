import styled from 'styled-components';
import { Text } from '../../../Text';

const CardImage = styled.div`
  height: 390px;
  width: 287px;
  background-color: #ccc;
`;

const CardText = styled.div`
  height: 120px;
  width: 287px;
  margin-right: 18px;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardDestaqueImage = styled.div`
  height: 320px;
  width: 593px;
  background-color: #aaa;
`;

const CardDestaqueText = styled.div`
  height: 320px;
  width: 306px;
  background-color: #ddd;
`;

const CardDestaqueWrapper = styled.div`
  display: flex;
`;

export const Card = ({ name }) => {
  return (
    <div>
      <CardImage />
      <CardText>
        <Text tag="p" variant={{ xs: 'paragraph2XS', md: 'paragraph2' }}>
          {name}
        </Text>
      </CardText>
    </div>
  );
};

export const CardDestaque = ({ name }) => {
  return (
    <CardDestaqueWrapper>
      <CardDestaqueImage />
      <CardDestaqueText>
        <Text tag="p" variant={{ xs: 'paragraph2XS', md: 'paragraph2' }}>
          {name}
        </Text>
      </CardDestaqueText>
    </CardDestaqueWrapper>
  );
};

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from '../Text';

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const Input = styled(Text)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
  padding: 6px 12px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadiusCard};
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};

export function TextField({ placeholder, tag, name, onChange, value }) {
  return (
    <InputWrapper>
      <Input
        tag={tag}
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </InputWrapper>
  );
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

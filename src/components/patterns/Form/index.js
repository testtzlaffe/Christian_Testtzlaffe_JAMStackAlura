import styled from 'styled-components';

const FormWrapper = styled.div`
  background-color: red;
`;

export function Form() {
  return (
    <FormWrapper>
      <form>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" />
      </form>
    </FormWrapper>
  );
}

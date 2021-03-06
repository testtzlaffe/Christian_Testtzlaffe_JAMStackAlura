import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../commons/Button';
import { Text } from '../../commons/Text';
import { TextField } from '../../commons/TextField';

const FormWrapper = styled.div`
  /* background-color: #222; */
`;

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

export function Form(props) {
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);
  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  const buttonDisabled = !formInfo.name || !formInfo.email || !formInfo.message;

  function handleSubmit(event) {
    event.preventDefault();

    setIsFormSubmited(true);
    setSubmissionStatus(formStates.LOADING);

    const { name, email, message } = formInfo;

    fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Não foi possível cadastrar o usuário');
      })
      .then((json) => {
        setSubmissionStatus(formStates.DONE);

        props.onSubmitForm();

        setTimeout(() => {
          props.onClose();
          props.resetHasFormSubmited();
        }, 3000);
      })
      .catch((error) => {
        setSubmissionStatus(formStates.ERROR);

        console.error(error);
      });
  }

  function handleChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setFormInfo({ ...formInfo, [fieldName]: fieldValue });
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        {/* <Text tag="p" variant="paragraph1">
          Nome:
        </Text> */}
        <TextField
          placeholder="Nome"
          name="name"
          onChange={handleChange}
          value={formInfo.name}
        />

        {/* <Text tag="p" variant="paragraph1">
          E-mail:
        </Text> */}
        <TextField
          placeholder="E-mail"
          name="email"
          onChange={handleChange}
          value={formInfo.email}
        />

        {/* <Text tag="p" variant="paragraph1">
          Mensagem:
        </Text> */}
        <TextField
          tag="textarea"
          placeholder="Mensagem"
          name="message"
          onChange={handleChange}
          value={formInfo.message}
        />

        <Button
          disabled={buttonDisabled}
          type="submit"
          variant="primary.main"
          padding={{ xs: '10px 40px', md: '10px 60px' }}
          marginTop={{ xs: '20px', md: '20px' }}
          fullWidth
        >
          <Text tag="span" variant={{ xs: 'subTitle2XS', md: 'subTitle2' }}>
            {submissionStatus === formStates.LOADING ? 'ENVIANDO' : 'ENVIAR'}
          </Text>
        </Button>
      </form>
    </FormWrapper>
  );
}

import React, { useState } from 'react';
import { Header } from '../src/components/Header';
import { Capa } from '../src/components/Capa';
import { Container } from '../src/components/commons/Container';
import { Footer } from '../src/components/Footer';
import { WrapperProjects } from '../src/components/WrapperProjects';
import { Modal } from '../src/components/commons/Modal';
import { Form } from '../src/components/patterns/Form';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasFormSubmited, setHasFormSubmited] = useState(false);

  return (
    <>
      <Header />
      <Container>
        <Capa click={() => setIsModalOpen(true)} />
        <WrapperProjects />
      </Container>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        hasFormSubmited={hasFormSubmited}
      >
        {(modalProps) => (
          <Form
            modalProps={modalProps}
            onSubmitForm={() => setHasFormSubmited(true)}
            onClose={() => {
              setIsModalOpen(false);
              setHasFormSubmited(false);
            }}
            resetHasFormSubmited={() => setHasFormSubmited(false)}
          />
        )}
      </Modal>

      <Footer />
    </>
  );
}

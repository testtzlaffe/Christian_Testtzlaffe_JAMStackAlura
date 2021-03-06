import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const up = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
`;

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  ${({ isOpen }) => {
    if (!isOpen) {
      return css`
        display: none;
      `;
    }
  }}
`;

const SafeArea = styled.div`
  border: 1px solid yellow;
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 40px;

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        animation: ${up} 0.7s;
      `;
    }
  }}
`;

export function Modal({ isOpen, onClose, children }) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-safe-area="true"]');
        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      <SafeArea isOpen={isOpen} data-safe-area="true">
        {children()}
      </SafeArea>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

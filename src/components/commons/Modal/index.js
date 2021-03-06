import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { Lottie } from '@crello/react-lottie';
import successAnimation from './animations/success.json';

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
  display: flex;
  justify-content: center;
  padding: 40px;
  background-color: #222;
  border-radius: ${({ theme }) => theme.borderRadiusCard}
    ${({ theme }) => theme.borderRadiusCard} 0 0;

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        animation: ${up} 0.7s;
      `;
    }
  }}
`;

export function Modal({
  isOpen,
  onClose,
  children,
  hasFormSubmited,
  resetHasFormSubmited,
}) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-safe-area="true"]');
        if (!isSafeArea) {
          onClose();
          // resetHasFormSubmited();
        }
      }}
    >
      {hasFormSubmited && (
        <div>
          <div>
            <Lottie
              width="250px"
              height="250px"
              className="lottie-container basic"
              config={{
                animationData: successAnimation,
                loop: false,
                autoplay: true,
              }}
            />
          </div>
        </div>
      )}

      {!hasFormSubmited && (
        <SafeArea isOpen={isOpen} data-safe-area="true">
          {children()}
        </SafeArea>
      )}
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

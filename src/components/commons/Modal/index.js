import { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { Lottie } from '@crello/react-lottie';
import successAnimation1 from './animations/success1.json';
import successAnimation2 from './animations/success2.json';
import successAnimation3 from './animations/success3.json';

const up = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
`;

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
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
  background-color: ${({ theme }) => theme.colors.background.light.color};
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

const SuccessAnimation = styled.div`
  position: fixed;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export function Modal({ isOpen, onClose, children, hasFormSubmited }) {
  const [animation, setAnimation] = useState(successAnimation1);
  const [animationLength, setAnimationLength] = useState(200);
  const [animationSpeed, setAnimationSpeed] = useState(2);

  useEffect(() => {
    const randomNumber = Math.ceil(Math.random() * 3);

    if (randomNumber > 2) {
      setAnimation(successAnimation3);
      setAnimationLength(250);
      setAnimationSpeed(1.1);
    } else if (randomNumber > 1) {
      setAnimation(successAnimation2);
      setAnimationLength(600);
      setAnimationSpeed(0.7);
    } else {
      setAnimation(successAnimation1);
      setAnimationLength(200);
      setAnimationSpeed(2);
    }
  }, [isOpen]);

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
        <SuccessAnimation>
          <Lottie
            width={`${animationLength}px`}
            height={`${animationLength}px`}
            speed={animationSpeed}
            className="lottie-container basic"
            config={{
              animationData: animation,
              loop: false,
              autoplay: true,
            }}
          />
        </SuccessAnimation>
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

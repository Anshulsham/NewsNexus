import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulseAnimation = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.1); }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  z-index: 1000;
  animation: ${fadeInUp} 0.5s ease-out;
`;
  
export const LoadingCircle = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #667eea;
  border-right: 4px solid #764ba2;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation: ${pulseAnimation} 2s ease-in-out infinite;
  }
`;

export const LoadingText = styled.div`
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  animation: ${pulseAnimation} 2s ease-in-out infinite;
  
  &::after {
    content: '';
    animation: dots 1.5s steps(4, end) infinite;
  }
  
  @keyframes dots {
    0%, 20% { content: ''; }
    40% { content: '.'; }
    60% { content: '..'; }
    80%, 100% { content: '...'; }
  }
`;

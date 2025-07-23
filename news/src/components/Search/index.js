import styled from "styled-components";

export const Header = styled.h1`
  text-align: center;
  margin-top: 120px;
  color: #fff;
  margin-bottom: 40px;
  font-size: 3.5rem;
  font-weight: 700;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    margin-top: 100px;
  }
  
  @media screen and (max-width: 425px) {
    font-size: 2rem;
    margin-top: 90px;
  }
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
  
  @media screen and (max-width: 768px) {
    width: 95%;
    padding: 0 10px;
  }
`;

export const card = {
  marginTop: "20px",
  marginBottom: "30px",
  padding: "0 10px"
};

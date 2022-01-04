import styled from "styled-components";

export const History = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};
  display: flex;
  align-items: center;
  padding: 0px 32px;
  justify-content: center;
  position: relative;

  img {
    position: absolute;
    width: 500px;
    height: 481px;
    opacity: 20%;
    left: 50%;
    transform: translateY(-50%);
    transform: translateX(-50%);
  }

  p {
    color: ${props => props.theme.colors.text};
    width: 800px;
    font-size: 26px;
  }

  @media (max-width: 800px) {
    padding-top: 48px;

    img {
      width: 300px;
      height: 281px;
    }

    p {
      display: flex;
      align-items: center;
      text-align: center;
      height: 100%;
      font-size: 18px;
    }
  }
`;

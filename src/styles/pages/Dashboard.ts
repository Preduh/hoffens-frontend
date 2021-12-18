import styled from "styled-components";

export const Container = styled.div`
  color: ${color => color.theme.colors.text};
  width: 100vw;
`;

export const CharWrapper = styled.div`
  max-width: 100vw;
  min-height: calc(100% - 80px);
  padding: 80px 64px 32px 44px;
  display: flex;
  flex-wrap: wrap;

  #addCharBtn {
    background-color: #3e3e3e70;
    width: 280px;
    height: 350px;
    border-radius: 8px;
    box-shadow: 0px 0px 8px black;
    border: none;
    margin-top: 32px;
    margin-left: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.1s linear;

    img {
      width: 108px;
      height: 108px;
    }

    :hover {
      background-color: #24242470;
      box-shadow: 0px 0px 14px #ff6320;
    }

    :active {
      transform: scale(0.95);
    }
  }
`;

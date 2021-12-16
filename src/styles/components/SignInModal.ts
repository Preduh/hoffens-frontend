import styled from "styled-components";

export const Form = styled.form`
  background-color: #080808;
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: row;
  padding-top: 80px;
  justify-content: space-between;
  align-items: center;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: calc(100vh - 80px);
    background-color: #080808;

    img {
      width: 400px;
      height: 400px;
    }
  }

  .wrapper {
    height: calc(100vh - 80px);
    width: 60%;
    padding: 16px 48px;
    background-color: ${props => props.theme.colors.background};
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 32px;
      width: 100%;

      h1 {
        color: ${props => props.theme.colors.text};
        text-align: center;
        font-weight: 900;
        font-size: 39px;
        margin-bottom: 64px;
      }

      input {
        width: 100%;
        height: 48px;
        border: 1px solid #979797;
        border-radius: 4px;
        outline: none;
        color: ${props => props.theme.colors.primary};
        font-size: 22px;
        padding: 0px 16px;
        margin-bottom: 32px;

        &::placeholder {
          color: #979797;
        }

        &:focus {
          border: 1px solid ${props => props.theme.colors.primary};
        }
      }

      button {
        background-color: #080808;
        color: ${props => props.theme.colors.text};
        font-size: 28px;
        font-weight: 700;
        border: none;
        height: 48px;
        border-radius: 4px;
        cursor: pointer;

        &:active {
          transform: scale(0.97);
        }
      }

      .error {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        padding: 4px;
        border-radius: 4px;
        border: 1px solid ${props => props.theme.colors.primary};

        img {
          width: 24px;
          margin-right: 16px;
        }

        p {
          color: ${props => props.theme.colors.primary};
        }
      }
    }
  }

  @media (max-width: 1000px) {
    .title {
      img {
        width: 300px;
        height: 300px;
      }
    }
  }

  @media (max-width: 800px) {
    .title {
      img {
        width: 200px;
        height: 200px;
      }
    }
  }

  @media (max-width: 560px) {
    .title {
      display: none;
    }

    .wrapper {
      width: 100%;
      height: 100%;
    }
  }
`;

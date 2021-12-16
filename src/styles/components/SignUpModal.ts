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

  .logo {
    display: flex;
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
    flex-direction: column;

    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      flex-wrap: nowrap;

      h1 {
        color: ${props => props.theme.colors.text};
        text-align: center;
        font-weight: 900;
        font-size: 39px;
        margin-bottom: 64px;
      }
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 32px;
      width: 100%;

      input {
        width: 49%;
        height: 48px;
        border: 1px solid ${props => props.theme.colors.text};
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
        color: #fff;
        font-size: 28px;
        font-weight: 700;
        border: none;
        width: 100%;
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
        padding: 4px;
        border-radius: 4px;
        border: 1px solid ${props => props.theme.colors.text};

        img {
          position: inherit;
          width: 24px;
          margin-right: 16px;
        }

        p {
          color: ${props => props.theme.colors.text};
        }
      }
    }
  }

  @media (max-width: 1050px) {
    .logo {
      img {
        width: 300px;
        height: 300px;
      }
    }
  }

  @media (max-width: 800px) {
    .logo {
      img {
        width: 200px;
        height: 200px;
      }
    }
  }

  @media (max-width: 560px) {
    .logo {
      display: none;
    }

    .wrapper {
      width: 100%;
      height: 100%;

      .title {
        margin: 0;

        h1 {
          margin: 0px;
        }
      }

      div {
        input {
          width: 100%;
        }
      }
    }
  }
`;

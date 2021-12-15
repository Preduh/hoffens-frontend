import styled from "styled-components";

export const Background = styled.div`
  background-color: #000000ba;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

export const Form = styled.form`
  background-color: white;
  height: 600px;
  width: 700px;
  border-radius: 12px;
  position: fixed;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  flex-direction: row;
  padding: 24px;
  justify-content: space-between;
  align-items: center;

  .wrapper {
    height: 100%;
    width: 100%;
    border: 2px solid ${props => props.theme.colors.primary};
    padding: 0px 48px;
    border-radius: 12px;

    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: nowrap;

      h1 {
        color: ${props => props.theme.colors.primary};
        text-align: center;
        font-weight: 900;
        font-size: 39px;
      }

      img {
        width: 108px;
        height: 108px;
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
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.text};
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
`;

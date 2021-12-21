import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: calc(100% - 80px);
  margin-top: 80px;
  overflow: hidden;
`;

export const Ficha = styled.form`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 64px;

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    label {
      width: 250px;
      font-size: 20px;
    }

    input {
      width: 100%;
      border: none;
      background-color: transparent;
      border-bottom: 1px solid #fff;
      outline: none;
      color: #fff;
      height: 24px;
      font-size: 18px;
      padding: 0px 4px;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  #secretIdentityDiv {
    align-items: center;

    input {
      height: 32px;
    }
  }

  button {
    background-color: #fff;
    border: none;
    height: 48px;
    color: #000;
    font-size: 28px;
    font-weight: 700;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      filter: brightness(80%);
    }
  }
`;

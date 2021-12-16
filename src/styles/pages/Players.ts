import styled from "styled-components";

export const Players = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding-top: 64px;

  .player {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 32px 64px;

    .avatar {
      background: #303030;
      width: 180px;
      height: 180px;
      border-radius: 50%;
      margin-bottom: 16px;
    }

    label {
      color: ${props => props.theme.colors.text};
      font-weight: 700;
    }
  }
`;

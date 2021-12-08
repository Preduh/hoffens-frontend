import styled from "styled-components";

export const Container = styled.div`
  color: ${color => color.theme.colors.primary};
`;

export const Header = styled.div`
  background-color: ${color => color.theme.colors.primary};
  color: ${color => color.theme.colors.text};
  display: flex;
  flex-direction: row;
  padding: 8px 64px;
  justify-content: space-between;
  align-items: center;

  img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }
`;

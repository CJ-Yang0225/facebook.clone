import styled from "@emotion/styled";

export const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  background-color: #f0f2f5;
`;

export const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  max-width: 680px;
`;

export const Aside = styled.aside`
  width: 340px;
  padding: 16px;
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  width: 340px;
`;

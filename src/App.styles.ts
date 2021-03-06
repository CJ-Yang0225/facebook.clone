import styled from "@emotion/styled";

export const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  height: 56px;
  background-color: white;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  background-color: #f0f2f5;

  @media screen and (max-width: 1060px) {
    flex-wrap: wrap;
    justify-content: center;
  }
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

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 340px;
  height: 100%;
  box-sizing: border-box;
`;

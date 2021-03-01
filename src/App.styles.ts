import styled from "@emotion/styled";

export const AppBody = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  background-color: #f0f2f5;

  .app__widgets {
    flex-grow: 0.3;
  }
`;

export const AppMain = styled.div`
  flex-grow: 0.3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  max-width: 680px;
`;

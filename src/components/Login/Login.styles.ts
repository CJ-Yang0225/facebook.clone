import styled from "@emotion/styled";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  width: 100vw;

  .login__brand {
    display: flex;
    flex-direction: column;
    align-items: center;

    .login__logo,
    .login__textLogo {
      height: 256px;
    }
  }

  .login__signIn {
    outline: none;
    border: none;
    border-radius: 12px;
    padding: 16px 32px;
    width: 312px;
    background-color: #2e81f4;
    color: #eff2f5;
    font-size: large ;
    font-weight: 800;
    transition: all 0.3s;

    &:hover {
      cursor: pointer;
      opacity: 0.87;
    }
  }
`;

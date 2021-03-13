import styled from "@emotion/styled";

export const TopNavStart = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 295px;

  .topNav__logo {
    padding-left: 16px;
    height: 40px;
  }

  .topNav__search {
    display: flex;
    align-items: center;
    background-color: #eff2f5;
    padding: 8px;
    margin-left: 8px;
    border-radius: 32px;
    width: fit-content;

    input {
      border: none;
      background-color: transparent;
      outline-width: 0;
      font-size: 0.9rem;
    }
  }
  
  @media screen and (max-width: 545px) {
    justify-content: flex-start;
    margin: 4px 0;
    width: fit-content;

    .topNav__search input {
      padding: 0;
      width: 0;
    }
  }
`;

export const TopNavCenter = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  height: 100%;
  max-width: 680px;

  .topNav__option {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 28px;
    cursor: pointer;

    .MuiSvgIcon-root {
      color: #65676b;
    }

    &:hover {
      border-radius: 8px;
      background-color: #f0f2f5;

      .MuiSvgIcon-root {
        color: #2e81f4;
      }
    }

    &--active {
      border-bottom: 4px solid #2e81f4;

      .MuiSvgIcon-root {
        color: #2e81f4;
      }

      &:hover {
        border-radius: 8px 8px 0 0px;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    margin: 4px 0;

    .topNav__option {
      display: none;
    }
  }
`;

export const TopNavEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 295px;
  height: 100%;

  .topNav__info {
    display: flex;
    align-items: center;

    h4 {
      margin: 0;
      margin-left: 8px;
    }
  }

  .topNav__buttonGroup {
    display: flex;
    justify-content: space-between;
    margin-left: 8px;

    button {
      height: 40px;
      width: 40px;
    }
  }

  @media screen and (max-width: 368px) {
    .topNav__buttonGroup {
      display: flex;
      justify-content: flex-end;

      button:not(:last-of-type) {
        display: none;
      }
    }
  }
`;

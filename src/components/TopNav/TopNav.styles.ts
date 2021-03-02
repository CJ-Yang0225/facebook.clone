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

    input {
      border: none;
      background-color: transparent;
      outline-width: 0;
    }
  }
`;

export const TopNavCenter = styled.div`
  display: flex;
  justify-content: center;

  .topNav__option {
    cursor: pointer;
    padding: 4px 28px;

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
`;

export const TopNavEnd = styled.div`
  display: flex;
  align-items: center;
  width: 295px;

  .topNav__info {
    display: flex;
    align-items: center;

    h4 {
      margin-left: 8px;
    }
  }

  .topNav__buttonGroup {
    display: flex;

    button {
      height: 40px;
      width: 40px;
    }
  }
`;

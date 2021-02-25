import styled from "@emotion/styled";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
`;

export const BannerStart = styled.div`
  display: flex;
  justify-content: space-evenly;

  .banner__logo {
    padding-left: 16px;
    height: 40px;
  }

  .banner__search {
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

export const BannerCenter = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

  .banner__option {
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

export const BannerEnd = styled.div`
  display: flex;
  /* justify-content: space-around; */
  align-items: center;

  .banner__info {
    display: flex;
    align-items: center;

    h4 {
      margin-left: 8px;
    }
  }

  .banner__buttonGroup {
    display: flex;
  }
`;
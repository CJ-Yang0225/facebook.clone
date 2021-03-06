import styled from "@emotion/styled";
export const SidebarTabWrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 0px 8px;
  border-radius: 8px;
  cursor: pointer;

  &:not(:first-of-type) {
    margin-top: 8px;
  }

  &:hover {
    background-color: #dadde1;
  }

  h4 {
    margin-left: 16px;
    font-weight: 600;
  }

  .MuiSvgIcon-root {
    color: #2e81f4;
    font-size: xx-large;
  }
`;

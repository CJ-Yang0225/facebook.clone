import styled from "@emotion/styled";

export const MessageSenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin-bottom: 16px;
  border-radius: 16px;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);

  background-color: white;

  .messageSender__top {
    display: flex;
    padding: 16px;
    border-bottom: 1px solid #eff2f5;

    form {
      flex-grow: 1;
      display: flex;

      input {
        outline-width: 0;
        border: none;
        padding: 8px 16px;
        margin: 0 10px;
        border-radius: 99px;
        background-color: #eff2f5;
      }

      input:first-of-type {
        flex-grow: 1;
      }

      button {
        display: none;
      }

      @media screen and (max-width: 514px) {
        flex-wrap: wrap;

        input {
          padding: 12px 16px;

          :first-of-type {
            margin-bottom: 8px;
          }
        }
      }
    }
  }

  .messageSender__bottom {
    display: flex;
    justify-content: space-evenly;
    padding: 0 8px;
  }
`;

const MessageSenderOption = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  margin: 8px;

  h4 {
    margin: 12px 0;
  }

  &:hover {
    background-color: #eff2f5;
    border-radius: 8px;
  }
`;

export const RedOption = styled(MessageSenderOption)`
  svg {
    color: red;
  }
`;
export const GreenOption = styled(MessageSenderOption)`
  svg {
    color: green;
  }
`;
export const OrangeOption = styled(MessageSenderOption)`
  svg {
    color: orange;
  }
`;

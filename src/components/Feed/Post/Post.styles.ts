import styled from "@emotion/styled";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 4px 16px 4px;
  padding: 12px 16px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 5px 7px -7px rgba(0, 0, 0, 0.75);

  .post__top {
    display: flex;
    justify-content: flex-start;

    .post__avatar {
      margin-right: 8px;
    }

    .post__info {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      h3,
      p {
        margin: 0;
      }
    }
  }

  .post__center {
    border-bottom: 1px solid #ced0d4;

    p {
      overflow-wrap: break-word;
    }

    img {
      width: 100%;
    }
  }

  .post__bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
    color: #808080;

    .post__option {
      display: flex;
      flex-grow: 1;
      justify-content: center;
      align-items: center;

      p {
        margin: 12px 4px;
      }

      &:hover {
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
  }
`;

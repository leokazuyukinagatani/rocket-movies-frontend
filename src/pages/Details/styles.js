import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
 
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
  margin: 40px;

  button {
    background: none;
    border: none;
    color: ${({theme}) => theme.COLORS.PINK};
  }
  .title {
    display: flex;
    align-items: center;
    gap: 19px;
  }
  .image-profile {
    width: 19px;
    height: 19px;
    border: 1px solid #3E3B47;
    border-radius: 50%;
  }
  .info {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
 
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1rem;
  margin: 4rem;

  button {
    background: none;
    border: none;
    color: ${({theme}) => theme.COLORS.PINK};
  }
  .title {
    display: flex;
    align-items: center;
    gap: 1.9rem;
  }
  .image-profile {
    width: 1.9rem;
    height: 1.9rem;
    border: 1px solid #3E3B47;
    border-radius: 50%;
  }
  .info {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

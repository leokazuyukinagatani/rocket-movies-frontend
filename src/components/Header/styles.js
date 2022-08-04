import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area:header;
  height: 11.6rem;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 6.4rem;
  padding: 0 1rem;
  .container-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  > h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: ${({theme}) => theme.COLORS.PINK};
  }

  >:nth-child(2) {
    margin-bottom: 0;
    max-width: 630px;
  }
  @media (max-width: 945px){
    gap: 1rem;
    .container-logo h2 {
      display: none;
    }
  }
`;

export const Profile = styled(Link)`
 
  > img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
  @media (max-width: 945px){
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
  }

`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: .9rem;
  > div {
    display: flex;
    flex-direction: column;
    text-align: right;
  
    line-height: 2.4rem;
    width: 16rem;
    
    button {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.8rem;
      background: none;
      border: none;
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    strong {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.8rem;
      color: ${({theme}) => theme.COLORS.WHITE};
    }
   
  }
  @media (max-width: 945px){
      >div{
        width: 3rem;
      }
      strong {
        display: none;
      }
  }
`;

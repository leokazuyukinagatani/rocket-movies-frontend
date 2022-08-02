import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area:header;
  height: 116px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 64px;
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
    font-size: 24px;
    line-height: 32px;
    color: ${({theme}) => theme.COLORS.PINK};
  }

  >:nth-child(2) {
    margin-bottom: 0;
    max-width: 630px;
  }

`;

export const Profile = styled(Link)`
 
  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  > div {
    display: flex;
    flex-direction: column;
    text-align: right;
  
    line-height: 24px;
    width: 164px;
    
    button {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      background: none;
      border: none;
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    strong {
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }
`;

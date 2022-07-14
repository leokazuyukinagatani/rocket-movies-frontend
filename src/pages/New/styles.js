import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
 
  .tags {
    display: flex;
    align-items: center;
    justify-content: left;
    flex-wrap: wrap;
    gap: 15px;
    background-color: ${({theme}) => theme.COLORS.BLACK};
    padding: 10px;

    border-radius: 10px;
  }
 
`;

export const Content = styled.div`  
  margin-top: 40px;
  max-height: 300px;
  overflow-y: auto;
  padding-right: 16px;

  > section {
    margin-bottom: 40px;
  }
  h1,h2 {
    align-items: left;
    margin-bottom: 40px;
  }

  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
    margin-bottom: 24px;
  }
  .col-2 { 
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
  }

  
  &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.COLORS.PINK};
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb:hover {
    transform: scale(1.5);
  }
`;


export const Form = styled.form`
  max-width: 1400px;
  margin: 38px 64px;
  
  .buttons {
    display: flex;
    padding: 16px;
    gap: 24px;
    > button:first-child {
      color: ${({theme}) => theme.COLORS.WHITE};
      background-color: ${({theme}) => theme.COLORS.BLACK};

    }
  }
`;

export const ButtonBack = styled(Link)`
  display:flex;
  align-items: center;
  color: ${({theme}) => theme.COLORS.PINK};
  gap: 8px;
  margin-bottom: 24px;
`;

import styled from "styled-components";


export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.PINK_100};

  border: none;
  border-radius: 10px;
  
  padding: 22px;
  margin-bottom: 16px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.WHITE};
  }
  

  > p { 
    text-align: justify;
    font-weight: 400;
    font-size: 16px;
    color: ${({theme}) => theme.COLORS.WHITE
  };

  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }

`;
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;
    background-color: ${({theme}) => theme.COLORS.PINK_100};
    display: flex;
    align-items: center;
    padding: 0 124px;
   
    svg {
      color: ${({theme}) => theme.COLORS.PINK};
      font-size: 16px;

    }
    span {
      font-size: 16px;
      line-height: 21px;
      color: ${({theme}) => theme.COLORS.PINK};
    }
  }
 

`;

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  > div:nth-child(4) {
    margin-top: 24px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;

  width: 185px;
  height: 185px;
  > img {
    width: 185px;
    height: 185px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({theme}) => theme.COLORS.PINK};

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    input {
      display: none;
    }
    
    svg {
      width: 20px;
      height: 20px;
      color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    }
  }
`;
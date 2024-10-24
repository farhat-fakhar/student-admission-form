import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    box-sizing: border-box;
    font-family: "Quicksand";
    overflow-x: 0;

}
 button{
  font-size: 19px;
  font-weight: 600;
  padding: 5px 20px;
  background-color: ${({ theme }) => theme.colors.lightPurpul};
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.darkPurpul};
  color: white;

 }
h1{
  font-size: 37px;
    font-weight: 700;
    margin-bottom: 5px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.darkPurpulColor};
   
}
h4{
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.whiteColor};
  cursor: pointer;
     margin-top: 10px;
}
.slick-dots li button:before {
    width: 8px;
    height: 8px;
    border-radius: 30px;
    border: 1px solid;
    padding: 0;
     font-size: 0px;
    border-color: #253d4e;
    background: green;
    transition: all 0.3s linear;
  }
  .slick-dots li{
    margin-left: -7px;
  }
  .dot-style-1 ul li.slick-active button {
    background-color: gray;
    color: green;
  }
  .slick-dots {
    bottom: -40px;
  }
  .slick-arrow {
     position: absolute;
    top: 47%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.greenColor};
    color: ${({ theme }) => theme.colors.greenColor};
    &:hover{
      background-color: ${({ theme }) => theme.colors.yellowColor};
      transition: all 0.2s   ease-in-out  ;
    }
  }
  .slick-next {
    right: 20px;
  }
  .slick-prev {
    left: 20px;
  }
  .slick-next:before,
  .slick-prev:before {
    color: ${({ theme }) => theme.colors.whiteColor};
   
  }
  

  `;

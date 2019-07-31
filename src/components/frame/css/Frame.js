import styled from "styled-components";

export const Frame = styled.div`
  position:relative;
  width: 90vw;
    padding-top:40px;
    padding-bottom:5vh;
    box-sizing:border-box;
  margin:auto;
  background-image: url('${require("./img/bg.png")}');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding-top:50px;
  box-sizing:border-box;
  z-index:1000;
  color: #46e5d4;
  >.bg-1{
      position:absolute;
      width:100%;
      left:0;
      max-height:250px;
  }
  >.Close{
    position:absolute;
    top:30px;
    right:20px;
    z-index:1000;
  }
`;

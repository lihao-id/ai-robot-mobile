import styled from "styled-components";

export const StyledFrame = styled.div`
  position: fixed;
  /* left: 5vw;
  top: 5vh; */
  /* width: 90vw;
  height: 90vh; */
  left:0;
  top:0;
  width: 100vw;
  height: 100vh;
  background-image: url('${require("./img/bg.png")}');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-top:50px;
  box-sizing:border-box;
  z-index:1000;
  >.Close{
    position:absolute;
    top:30px;
    right:20px;
    z-index:1000;
  }
`;

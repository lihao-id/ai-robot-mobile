import { keyframes } from "styled-components";

export const move = keyframes`
    0%{
        transform:translateX(100%);
        opacity:1;
    }

    100%{
        transform:translateX(0);
        opacity:1;
    }
`;

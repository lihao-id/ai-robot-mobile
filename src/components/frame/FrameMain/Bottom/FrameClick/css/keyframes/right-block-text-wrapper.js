import { keyframes } from "styled-components";

export const keyframe1 = props => keyframes`
    0%{
        opacity:1;
        right:0;
        transform: translateX(0);
    }

    /* ${props.right}%{
        right: ${props.right}px;
        transform: translateX(0);
    } */

    100%{

        opacity:1;
        right: ${props.right}px;
        transform: translateX(100%);
    }
`;

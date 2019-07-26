import { keyframes } from "styled-components";

export const keyframe1 = props => keyframes`
    0%{
        /* width:0; */
        /* transform:translateX(0); */
    }

    100%{
        /* width:0; */
        transform:translateX(${-props.translateX}px);
    }
`;

export const keyframe2 = props => keyframes`
    0%{
        /* width:0; */
        /* transform:translateX(${-props.translateX}px); */
    }

    /* ${props.translateX}%{
        width:0;
        transform:translateX(0px);
    } */

    100%{
        /* width:${props.width}px; */
        transform:translateX(20px);
    }
`;

export const keyframe3 = keyframes`
    0%{
        transform:translateX(20px);
    }
    100%{
        transform:translateX(5px);
    }
`;

import { keyframes } from "styled-components";

import { triangleAnimateObj } from "./Var";

export const UpKeyframesRotate = keyframes`
    /* 1%{
        transform: translateY(${-triangleAnimateObj.translateY}%);
    } */

    100%{
        transform: translateY(${-triangleAnimateObj.translateY}%) rotateZ(-90deg);
    }
`;

export const DownKeyframesRotate = keyframes`
    /* 1%{
        transform: translateY(${triangleAnimateObj.translateY}%);
    } */

    100%{
        transform: translateY(${
          triangleAnimateObj.translateY
        }%) rotateZ(-90deg);
    }
`;

export const UpKeyframesMove = props => keyframes`

    100%{
        left: ${props.width * 3}px;
    }
`;

export const DownKeyframesMove = props => keyframes`
    100%{
        right:${props.width * 3}px;
    }
`;

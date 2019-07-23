import { keyframes } from "styled-components";

export const width = props => keyframes`
    0%{
        width:0;
    }

    100%{
        width:${props.width}px;
    }
`;

import { keyframes } from "styled-components";

const color = "#00ffff";

export const keyframesIn = props => keyframes`
    1%{
        text-shadow:0 0 12px rgba(0,0,0,0);
        transform:${props.right ? "translateX(25px)" : "translateX(-25px)"};
    }
    100%{
        text-shadow:0 0 0 ${color};
        transform:transLateX(0);
    }
`;

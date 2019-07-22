import { css } from "styled-components";

export const BgImg = props => css`
    background-image:url('${props.url}');
    background-size:100% 100%;
    background-repeat:no-repeat;
`;

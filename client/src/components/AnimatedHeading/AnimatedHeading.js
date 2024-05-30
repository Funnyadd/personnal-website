import styled, { keyframes } from "styled-components"

const Animation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        transform: translate(0,0);
        opacity: 1;
    }
`

export const AnimatedLetter = styled.span`
    transform: translate(0, -100px);
    display: inline-block;
    transition: 1s;
    opacity: 0;
    font-size: ${(props) => props.fontSize ? props.fontSize : "100px"};
    line-height: ${(props) => props.lineHeight ? props.lineHeight : "90px"};
    font-family: Teko;
    text-transform: uppercase;

    @media (max-width: 767px) {
        font-size: 40px;
        line-height: 40px;
    }

    &.animationComplete {
        transform: translate(0, 0);
        opacity: 1;
    }

    &.animate {
        animation: ${Animation} forwards 1s;
    }
`
export const Space = styled.span`
    font-size: 100px;
    margin: 0 ${(props) => props.space ? props.space : "10px"};
    
    @media (max-width: 767px) {
        font-size: 40px;
        line-height: 40px;
        margin: 0 5px;
    }
`
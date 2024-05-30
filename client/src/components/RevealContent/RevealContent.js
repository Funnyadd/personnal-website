import styled, { keyframes } from "styled-components"

const Animation = keyframes`
    0% {
        width: 0;
        left: 0;
    } 
    50% {
        width: 100%;
        left: 0;
    }
    100% {
        width: 0;
        left: 100%;
    }
`

const RevealText = keyframes`
    0%{
        opacity: 0;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
`

export const RevealContainer = styled.div`
    position: relative;
    * {
        opacity: 0;
    }

    &.animationComplete {
        * {
            opacity: 1;
        }
    }

    &:before,
    &:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        z-index: 10;
    }

    &:before {
        background-color: rgb(12,148,0);
    }

    &:after {
        background-color: #fff;
        animation-delay: 0.5s;
    }

    &.animate {
        * {
            animation: ${RevealText} 0.1s 1.1s forwards;
        }

        &:before {
            animation: ${Animation} 1.8s ease;
        }

        &:after {
            animation: ${Animation} 1s 0.6s ease;
        }
    }
`
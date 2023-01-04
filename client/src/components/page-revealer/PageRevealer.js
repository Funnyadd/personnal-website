import styled, { keyframes } from 'styled-components';

export const RevealContainer = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: #000;
    opacity: 1;
    visibility: visible;
    overflow-x: hidden !important;
    overflow-y: hidden !important;
    font-size: 50px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    @media (max-width: 500px) {
        font-size: 30px;
    }
`;

const RevealAnimation = keyframes`
    0% {
        transform: translate3d(100%, 0, 0);
    }
    35%, 65% {
        transform: translate3d(0, 0, 0);
    }
    100% {
        transform: translate3d(-100%, 0, 0);
    }
`
export const Reveal = styled.div`
    position: fixed;
    width: 100%;
    pointer-events: none;
    height: 100%;
    background-color: rgb(12,148,0);
    transform: translateX(100%);
    &.animate {
        animation: ${RevealAnimation} 1.1s cubic-bezier(0.2, 1, 0.3, 1) forwards;
    }
`
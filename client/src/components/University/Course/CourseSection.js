import styled, { keyframes } from "styled-components"
import { Row, Col, Container } from "react-bootstrap"

export const CourseContainer = styled(Col)`
    justify-content: center;
`
export const HyperlinkTile = styled.a`
    /* text-align: center; */
    padding: 10px 5px;
    transition: all 0.1s ease 0s;
    border-radius: 16px;
    text-decoration: none;
    color: #fff;
    display: block;
    border: 4px solid transparent;
    background: linear-gradient(black, black) padding-box,
                linear-gradient(120deg, rgb(12, 148, 40), rgb(63, 142, 222), rgb(35, 98, 234)) border-box;

    &:hover {
        transform: scale(1.1);
        z-index: 5;
        border-radius: 10px;
    }

    /* &:before {
        content: '';
        transition: all 0.1s ease 0s;
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        z-index: -1;
        margin: -5px;
        border-radius: inherit;
        background: linear-gradient(120deg, rgb(12, 148, 40), rgb(63, 142, 222), rgb(35, 98, 234));
    } */
`

export const CourseId = styled.h3`
    font-weight: bolder;
`

const gradientAnimation = keyframes`
    0% {
        background-position: 15% 0%;
    }
    50% {
        background-position: 30% 30%;
    }
    100% {
        background-position: 15% 0%;
    }
`
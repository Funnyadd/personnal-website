import styled from "styled-components"
import { Col } from "react-bootstrap"

export const CourseContainer = styled(Col)`
    justify-content: center;
`
export const HyperlinkTile = styled.a`
    height: 165px;
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

    &:before {
        content: '';
        transition: all 0.1s ease 0s;
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        z-index: -1;
        margin: -5px;
        border-radius: inherit;
        background: linear-gradient(120deg, rgb(12, 148, 40), rgb(63, 142, 222), rgb(35, 98, 234));
        background-size: 300% 300%;
    }

    @media (max-width: 362px) {
        height: 140px;
    }
`

export const CourseId = styled.h3`
    font-weight: bolder;

    @media (max-width: 362px) {
        font-size: 20px;
    }
`

export const CourseName = styled.p`
    @media (max-width: 768px) {
        font-size: 13px;
    }

    @media (max-width: 576px) {
        font-size: 16px;
    }

    @media (max-width: 504px) {
        font-size: 14px;
    }

    @media (max-width: 408px) {
        font-size: 12px;
    }

    @media (max-width: 362px) {
        font-size: 10px;
    }
`

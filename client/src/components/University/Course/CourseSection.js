import Col from "react-bootstrap/Col"
import styled from "styled-components"

export const CourseContainer = styled(Col)`
    justify-content: center;
    margin-bottom: 10px;

    @media (max-width: 500px) {
        padding-left: 7px !important;
        padding-right: 7px !important;
    }
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
        z-index: 10;
        border-radius: 10px;
        transition: all 0.1s ease 0s;
        background: linear-gradient(120deg, rgb(12, 148, 40), rgb(15, 163, 138), rgb(35, 98, 234)) border-box;
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

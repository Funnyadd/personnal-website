import styled, { keyframes } from "styled-components"
import { Row, Col, Container } from "react-bootstrap"

export const UniversityContainer = styled(Container)`
`

export const BachelorContainer = styled(Container)`
    margin: 40px auto;
    `

export const Heading = styled.h2`
    font-size: 70px;
    font-family: Teko;
    color: rgb(255, 255, 255);
    line-height: 50px;
    margin-bottom: 0.5rem;
    font-weight: 500;
    margin-top: 0;

    @media screen and (max-width: 576px) {
        padding: 0px 20px;
    }
`
export const Seperator = styled.div`
    height: 5px;
    width: 50px;
    background-color: rgb(12, 148, 0);
    margin-bottom: 20px;

    @media screen and (max-width: 576px) {
        margin: 0px 20px 20px 20px;
    }
`
import styled from "styled-components"
import { Container, Accordion } from "react-bootstrap"

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

    @media screen and (max-width: 992px) {
        font-size: 50px;
    }

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

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

export const SemesterAccordion = styled(Accordion)`
    
`

export const InformationContainer = styled(Container)`
    margin-bottom: 50px;

    @media screen and (max-width: 768px) {
        margin-left: 0;
    }
`

export const InfoTitle = styled.div`
    font-size: 22px;
    width: 35%;
    display: inline-block;
    color: #bfbfbf !important;

    @media screen and (max-width: 1200px) {
        font-size: 20px;
        width: 45%;
    }

    @media screen and (max-width: 992px) {
        width: 50%;
    }

    @media screen and (max-width: 768px) {
        display: block;
        width: 100%;
        font-size: 22px;
    }

    @media screen and (max-width: 516px) {
        font-size: 20px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }

    @media screen and (max-width: 440px) {
        font-size: 16px;
    }

    @media screen and (max-width: 402px) {
        font-size: 14px;
    }
`

export const Info = styled.div`
    font-size: 18px;
    color: rgb(63, 142, 222);
    margin: 10px;

    @media screen and (max-width: 1200px) {
        font-size: 16px;
    }

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }

    @media screen and (max-width: 516px) {
        font-size: 16px;
    }

    @media screen and (max-width: 440px) {
        font-size: 14px;
    }

    @media screen and (max-width: 402px) {
        font-size: 12px;
    }
`

import styled, { keyframes } from "styled-components"
import { Row, Col, Container } from "react-bootstrap"
import handleViewport from "react-in-viewport"

export const FormRow = styled(Row)`
    background-color: #111;
    padding: 0px !important;
`

export const ContactContainer = styled(Container)``

export const ContactCol = styled(Col)`
    min-height: 600px;
    padding: 0 !important;
    display: flex;
    align-items: center;
`

export const Icon = styled.img`
    height: 70px;
    width: 70px;
    object-fit: contain;
`

export const IconRow = styled(Row)`
    margin-top: 150px !important;
`

export const IconCol = styled(Col)`
    @media (max-width: 768px) {
        margin-bottom: 140px;
    }
`

const gradientAnimation = keyframes`
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 30% 30%;
    }
    100% {
        background-position: 0% 0%;
    }
`

export const IconContainer = styled.div`
    width: 150px;
    height: 150px;
    margin: auto;
    padding: 35px;
    text-align: center;
    position: relative;
    bottom: 75px;
    background-size: 300% 300%;
    border-radius: 150px;
    transition: 0.5s;
    background: linear-gradient(
        120deg,
        rgb(12, 148, 40),
        rgb(63, 142, 222),
        rgb(35, 98, 234)
    );
    background-size: 300% 300%;
    animation: ${gradientAnimation} 5s ease-in-out infinite;
`

export const InfoPart = styled.div`
    min-height: 250px;
    background-color: #111;
    border: 2px solid rgb(68, 68, 68);
`

export const Info = styled.div`
    position: relative;
    bottom: 30px;
`

export const InfoTitle = styled.h4`
    font-size: 35px;
    color: rgb(255, 255, 255);
    font-family: Teko;
    text-align: center;
`

export const InfoLinkContainer = styled.div`
    text-align: center;
`

export const InfoLink = styled.a`
    color: rgb(12, 148, 0);
    transition: all 0.5s ease 0s;
    text-decoration: none;

    &:hover {
        color: #ddd;
    }
`

export const Map = styled.iframe`
    border: none;
    height: 100%;
    width: 100%;
`

export const Gradient = styled.div`
    height: auto;
    min-height: 600px;
    width: 100vh;
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &::after {
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        clip-path: polygon(
            0% 100%,
            10px 100%,
            10px 10px,
            calc(100% - 10px) 10px,
            calc(100% - 10px) calc(100% - 10px),
            10px calc(100% - 10px),
            10px 100%,
            100% 100%,
            100% 0%,
            0% 0%
        );
        background: linear-gradient(
                120deg,
                rgb(12, 148, 40),
                rgb(63, 142, 222),
                rgb(35, 98, 234)
            )
            0% 0% / 300% 300%;
        /* animation: 5s ease-in-out 0s infinite normal none running ${gradientAnimation}; */
    }
`

const Form_Container = styled.div`
    opacity: 1;
    height: auto;
`

export const FormContainer = handleViewport(Form_Container)

import styled, { keyframes } from 'styled-components'
import { Row, Col, Container } from 'react-bootstrap'
import handleViewport from 'react-in-viewport'


export const FormRow = styled(Row)`
    background-color: #111;
    padding: 0px !important;
`

export const ContactContainer = styled(Container)`

`

export const ContactCol = styled(Col)`
    min-height: 600px;
    max-height: 600px;
    padding: 0 !important;
    display: flex;
    align-items: center;
`

export const IconRow = styled(Row)`
    margin-top: 150px;
`

export const IconCol = styled(Col)`
    @media (max-width: 500px) {
        margin-bottom: 140px;
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
    background: linear-gradient(120deg, #04e5e5, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
    background-size: 300% 300%;
    border-radius: 150px;
    transition: .5s;
`

export const InfoPart = styled.div`
    min-height: 250px;
    background-color: #111;
`

export const Map = styled.iframe`
    border: none;
    height: 100%;
    width: 100%;
`

const gradientAnimation = keyframes`
    0% {
        background-position: 15% 0%;
    }
    50% {
        background-position: 85% 100%;
    }
    100% {
        background-position: 15% 0%;
    }
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
        clip-path: polygon(0% 100%, 10px 100%, 10px 10px, 
            calc(100% - 10px) 10px, 
            calc(100% - 10px) calc(100% - 10px), 
            10px calc(100% - 10px), 
            10px 100%, 100% 100%, 100% 0%, 0% 0%);
        background: linear-gradient(
            120deg, 
            rgb(12, 148, 0), 
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
import styled, { keyframes } from "styled-components"

export const Separator = styled.div`
    height: 5px;
    width: 50px;
    background-color: rgb(12, 148, 0);
    margin-bottom: 30px;
    margin-left: 6px;
`

export const ContactFormContainer = styled.div`
    padding: 0px 50px;
    width: 100%;
    position: relative;
    z-index: 5;
`

export const Heading = styled.h2`
    font-size: 70px;
    font-family: Teko;
    color: #fff;
`

export const InputElement = styled.div`
    margin: 20px 0;
`

export const ErrorInputAnimation = keyframes`
    0% {
        border-bottom: 1px solid #111;
    }
    100% {
        border-bottom: 1px solid #ff0000;
    }
`

export const Input = styled.input`
    width: 100%;
    background-color: #111;
    border: none;
    border-bottom: 1px solid #444;
    padding: 10px 5px;
    border-radius: 0;
    color: #fff;
    transition: 0.5s;
    &:focus {
        border-bottom: 1px solid rgb(12, 148, 0);
        outline: none;
    }
    &.error {
        animation: ${ErrorInputAnimation} 1s forwards;
    }
`

export const Textarea = styled.textarea`
    width: 100%;
    background-color: #111;
    border: none;
    border-bottom: 1px solid #444;
    padding: 10px 5px;
    border-radius: 0;
    color: rgb(255, 255, 255);
    transition: all 0.5s ease 0s;
    min-height: 100px;
    margin-top: 0px;
    margin-bottom: 0px;
    height: 100px;
    &:focus {
        border-bottom: 1px solid rgb(12, 148, 0);
        outline: none;
    }
    &.error {
        animation: ${ErrorInputAnimation} 1s forwards;
    }
`

export const Submit = styled.button`
    display: block;
    height: 50px;
    width: 186px;
    position: relative;
    border: none;
    overflow: hidden;
    transition: 0.5s;
    background-color: #000;

    &:hover {
        background: #444;
    }
    span {
        position: relative;
        top: 0;
        color: #fff;
        z-index: 10;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
`

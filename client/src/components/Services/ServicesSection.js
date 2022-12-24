import styled, { keyframes } from 'styled-components'

export const BackgroundContainer = styled.div`
    background-image: url(${props => props.url});
    position: relative;
    overflow: hidden;
    background-color: #111;
    background-size: cover;
`

export const ServiceContainer = styled.div`
    background-color: rgba(0,0,0,0.9);
    padding: 100px 0;
    
`

const gradientAnimation = keyframes`
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 40% 50%;
    }
    100% {
        background-position: 0% 0%;
    }
`

export const ServiceElement = styled.div`
    margin-bottom: 20px;
    text-align: center;
    transition: 0.3s;
    padding: 40px;

    &::after {
        content: '';
        width: 100%;
        height: 100%;
        opacity: 0;
        top: 0;
        left: 2px;
        position: absolute;
        border-radius: 20px;
        z-index: -1;
        
        @keyframes colorChange {
            0% {
                box-shadow: #10b568 0px 24px 45px;
                
            }
            100% {
                box-shadow: #4272e3 0px 24px 45px;
            }
        }

        animation: 5s ease infinite alternate running colorChange;
        transition: opacity 0.5s ease-in-out;
    }

    &:hover {
        transform: translateY(-10px);
    }

    &:hover::after {
        opacity: 1;
    }
`
export const ServiceHeading = styled.h4`
    font-size: 30px;
    font-weight: 500;
    font-family: Teko;
    color: #fff;
`
export const ServiceSeparator = styled.div`
    height: 5px;
    width: 50px;
    background-color: rgb(12, 148, 0);
    margin-bottom: 10px;
    margin: auto;
`
export const ServiceIcon = styled.div`
    width: 120px;
    height: 120px;
    margin: 0 auto 25px auto;
    background-color: #fff;
    border-radius: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
            120deg, 
            rgb(12, 148, 40), 
            rgb(63, 142, 222),
            rgb(35, 98, 234)
        );
    background-size: 300% 300%;
    animation: ${gradientAnimation} 5s ease-in-out infinite;

    img {
        max-height: 70px;
    }
`

export const ServiceList = styled.ul`
    padding: 0;
    margin: 11px 0 0 0;
`

export const ServiceListElement = styled.li`
    list-style: none;
    color: #c5c5c5;
    font-weight: 300;
    font-size: 14px;
    margin: 5px 0px;

    &::before {
        display: inline-block;
        content: '';
        border-radius: 2.5px;
        height: 5px;
        width: 5px;
        margin-right: 10px;
        position: relative;
        bottom: 2.5px;
    }

`
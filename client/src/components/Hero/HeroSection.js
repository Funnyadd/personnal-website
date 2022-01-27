import styled from 'styled-components'

export const HeroContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    height: 100vh;

    @media (max-width: 576px) {
        height: 400px;
    }
`

export const Background = styled.video`
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
`

export const HeadingBox = styled.div`
    height: 570px;
    width: 900px;
    margin: auto;
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
        border-radius: 5px;
        background: linear-gradient(
            120deg, 
            rgb(12, 148, 0), 
            rgb(63, 142, 222),
            rgb(35, 98, 234)
            
        ) 
        0% 0% / 300% 300%;
    }

    @media (max-width: 850px) {
        height: 400px;
    }

`

export const SubHeading = styled.h2`
    font-size: 18px;
    font-weight: 300;
    color: rgb(204, 204, 204);
    text-transform: uppercase;
    letter-spacing: 4px;
`

export const Heading = styled.div`
    text-align: center;
`

export const HeadingText = styled.p`
    font-size: 90px;
    line-height: 150px;
    font-weight: 600;

    @media (max-width: 850px) {
        font-size: 40px;
        line-height: 50px;
    }
`

export const Type = styled.div`
    line-height: 50px;
    text-transform: uppercase;
    margin-left: 6px;

    span {
        font-family: Teko;
        font-size: 24px;
    }
`

export const ResumeLink = styled.a`
    text-decoration: none;
    font-weight: 300 !important;
    border-bottom: 2px solid;
    font-weight: 300;
    transition: all 0.5s ease 0s;
    margin-top: 50px;
    color: #fff;

    &:hover {
        color: #fff;
        text-decoration: none;
        border-color: rgb(12, 148, 0);
    }
`
import styled from "styled-components";

export const FooterMain = styled.div`
    background-color: #111;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SocialIcons = styled.div`
    .social_icon {
        font-size: 15px;
        color: #555;
        margin: 0 15px;
        cursor: pointer;
        transition: .5s;
        
        &:hover {
            color: #04e5e5;
        }
    }
`